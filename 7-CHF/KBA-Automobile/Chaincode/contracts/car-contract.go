package contracts

import (
	"encoding/json"
	"fmt"
	"time"

	"github.com/hyperledger/fabric-chaincode-go/shim"
	"github.com/hyperledger/fabric-contract-api-go/contractapi"
)

// CarContract contract for managing CRUD for Car
type CarContract struct {
	contractapi.Contract
}

type Car struct {
	AssetType         string `json:"assetType"`
	CarId             string `json:"carId"`
	Color             string `json:"color"`
	DateOfManufacture string `json:"dateOfManufacture"`
	Make              string `json:"make"`
	Model             string `json:"model"`
	OwnedBy           string `json:"ownedBy"`
	Status            string `json:"status"`
}
type HistoryQueryResult struct {
	Record *Car `json:"record"`
	TxId string `json:"txId"`
	Timestamp string `json:"timestamp"`
	IsDelete bool `json:"isDelete"`
	}

// CarExists returns true when asset with given ID exists in world state
func (c *CarContract) CarExists(ctx contractapi.TransactionContextInterface, carID string) (bool, error) {
	data, err := ctx.GetStub().GetState(carID)

	if err != nil {
		return false, fmt.Errorf("failed to read from world state: %v", err)

	}
	return data != nil, nil
}

// CreateCar creates a new instance of Car
func (c *CarContract) CreateCar(ctx contractapi.TransactionContextInterface, carID string, make string, model string, color string, manufacturerName string, dateOfManufacture string) (string, error) {
	clientOrgID, err := ctx.GetClientIdentity().GetMSPID()
	if err != nil {
		return "", err
	}

	if clientOrgID == "Org1MSP" {

		exists, err := c.CarExists(ctx, carID)
		if err != nil {
			return "", fmt.Errorf("%s", err)
		} else if exists {
			return "", fmt.Errorf("the car, %s already exists", carID)
		}

		car := Car{
			AssetType:         "car",
			CarId:             carID,
			Color:             color,
			DateOfManufacture: dateOfManufacture,
			Make:              make,
			Model:             model,
			OwnedBy:           manufacturerName,
			Status:            "In Factory",
		}

		bytes, _ := json.Marshal(car)

		err = ctx.GetStub().PutState(carID, bytes)
		if err != nil {
			return "", err
		} else {
			return fmt.Sprintf("successfully added car %v", carID), nil
		}

	} else {
		return "", fmt.Errorf("user under following MSPID: %v can't perform this action", clientOrgID)
	}
}

// ReadCar retrieves an instance of Car from the world state
func (c *CarContract) ReadCar(ctx contractapi.TransactionContextInterface, carID string) (*Car, error) {

	bytes, err := ctx.GetStub().GetState(carID)
	if err != nil {
		return nil, fmt.Errorf("failed to read from world state: %v", err)
	}
	if bytes == nil {
		return nil, fmt.Errorf("the car %s does not exist", carID)
	}

	var car Car

	err = json.Unmarshal(bytes, &car)

	if err != nil {
		return nil, fmt.Errorf("could not unmarshal world state data to type Car")
	}

	return &car, nil
}
// DeleteCar removes the instance of Car from the world state
func (c *CarContract) DeleteCar(ctx contractapi.TransactionContextInterface, carID string) (string, error) {

	clientOrgID, err := ctx.GetClientIdentity().GetMSPID()
	if err != nil {
	return "", err
	}
	if clientOrgID == "Org1MSP" {
	
	exists, err := c.CarExists(ctx, carID)
	if err != nil {
	return "", fmt.Errorf("Could not read from world state. %s", err)
	} else if !exists {
	return "", fmt.Errorf("The asset %s does not exist", carID)
	}
	
	err = ctx.GetStub().DelState(carID)
	if err != nil {
	return "", err
	} else {
	return fmt.Sprintf("Car with id %v is deleted from the world state.", carID), nil
	}
	
	} else {
	return "", fmt.Errorf("User under following MSP:%v cannot able to perform this action", clientOrgID)
	}
	}
	
// GetAllCars retrieves all the asset with assetype 'car'
 
func (c *CarContract) GetAllCars(ctx contractapi.TransactionContextInterface) ([]*Car, error) {

 
	queryString :=`{"selector":{"assetType":"car"}}`
	
	//queryString := `{"selector":{"assetType":"car"}, "sort":[{ "CarId": "desc"}]}`

	 
	
	 
	resultsIterator, err := ctx.GetStub().GetQueryResult(queryString)
	
	 
	if err != nil {
	
	 
	return nil, err
	
	 
	}
	
	 
	defer resultsIterator.Close()
	
	 
	return carResultIteratorFunction(resultsIterator)
	
	 
	}
 	// Iterator function
		 
	func carResultIteratorFunction(resultsIterator shim.StateQueryIteratorInterface) ([]*Car, error) {
	
	 
	var cars []*Car
	
	 
	for resultsIterator.HasNext() {
	
	 
	queryResult, err := resultsIterator.Next()
	
	 
	if err != nil {
	
	 
	return nil, err
	
	 
	}
	
	 
	var car Car
	
	 
	err = json.Unmarshal(queryResult.Value, &car)
	
	 
	if err != nil {
	
	 
	return nil, err
	
	 
	}
	
	 
	cars = append(cars, &car)
	
	 
	}
	
	 
	
	 
	return cars, nil
	
	 
	}
	// GetCarsByRange gives a range of asset details based on a start key and end key
func (c *CarContract) GetCarsByRange(ctx contractapi.TransactionContextInterface, startKey, endKey string) ([]*Car, error) {
	resultsIterator, err := ctx.GetStub().GetStateByRange(startKey, endKey)
	if err != nil {
	return nil, err
	}
	defer resultsIterator.Close()
	return carResultIteratorFunction(resultsIterator)
	}
	
// GetCarHistory returns the history of a car since issuance.
func (c *CarContract) GetCarHistory(ctx contractapi.TransactionContextInterface, carID string) ([]*HistoryQueryResult, error) { 
	resultsIterator, err := ctx.GetStub().GetHistoryForKey(carID)
	if err != nil{
	  return nil, err 
	 }
	defer resultsIterator.Close() 
	var records []*HistoryQueryResult 
	for resultsIterator.HasNext() {
	response, err := resultsIterator.Next() 
	
	if err != nil {
	 return nil, err 
	 }
	var car Car 
	if len(response.Value) > 0 {
	 err = json.Unmarshal(response.Value, &car)
		 if err != nil {
			return nil, err 
		   }
	 } else { 
	   car = Car{ CarId: carID, } 
			} 
	timestamp := response.Timestamp.AsTime() 
	formattedTime := timestamp.Format(time.RFC1123)
	record := HistoryQueryResult{ 
			  TxId: response.TxId,
			  Timestamp: formattedTime, 
			  Record: &car,
			  IsDelete: response.IsDelete,
	 } 
	records = append(records, &record) } 
	return records, nil }

	// GetMatchingOrders get matching orders for car from the orders
func (c *CarContract) GetMatchingOrders(ctx contractapi.TransactionContextInterface, carID string) ([]*Order, error) {
	exists, err := c.CarExists(ctx, carID)
	if err != nil {
	return nil, fmt.Errorf("Could not read from world state. %s", err)
	} else if !exists {
	return nil, fmt.Errorf("The asset %s does not exist", carID)
	}
	car, err := c.ReadCar(ctx, carID)
	if err != nil {
	return nil, fmt.Errorf("Error reading car %v", err)
	}
	queryString := fmt.Sprintf(`{"selector":{"assetType":"Order","make":"%s", "model": "%s", "color":"%s"}}`,car.Make, car.Model, car.Color)
	resultsIterator, err := ctx.GetStub().GetPrivateDataQueryResult(getCollectionName(), queryString)
	if err != nil {
	return nil, err
	}
	defer resultsIterator.Close()
	return orderResultIteratorFunction(resultsIterator)
	}
	// MatchOrder matches car with matching order
	func (c *CarContract) MatchOrder(ctx contractapi.TransactionContextInterface, carID string, orderID string) (string, error) {
	order, err := ReadPrivateState(ctx, orderID)
	if err != nil {
	return "", err
	}
	car, err := c.ReadCar(ctx, carID)
	if err != nil {
	return "", err
	}
	if car.Make == order.Make && car.Color == order.Color && car.Model == order.Model {
	car.OwnedBy = order.DealerName
	car.Status = "assigned to a dealer"
	bytes, _ := json.Marshal(car)
	collectionName := getCollectionName()
	ctx.GetStub().DelPrivateData(collectionName, orderID)
	err = ctx.GetStub().PutState(carID, bytes)
	if err != nil {
	return "", err
	} else {
	return fmt.Sprintf("Deleted order %v and Assigned %v to %v", orderID, car.CarId, order.DealerName), nil
	}
	} else {
	return "", fmt.Errorf("order is not matching")
	}
	}
	// RegisterCar register car to the buyer
	func (c *CarContract) RegisterCar(ctx contractapi.TransactionContextInterface, carID string, ownerName string, registrationNumber string) (string, error) {
	clientOrgID, err := ctx.GetClientIdentity().GetMSPID()
	if err != nil {
	return "", err
	}
	if clientOrgID == "Org3MSP" {
	exists, err := c.CarExists(ctx, carID)
	if err != nil {
	return "", fmt.Errorf("Could not read from world state. %s", err)
	}
	if exists {
	car, _ := c.ReadCar(ctx, carID)
	car.Status = fmt.Sprintf("Registered to %v with plate number %v", ownerName, registrationNumber)
	car.OwnedBy = ownerName
	bytes, _ := json.Marshal(car)
	err = ctx.GetStub().PutState(carID, bytes)
	if err != nil {
	return "", err
	} else {
	return fmt.Sprintf("Car %v successfully registered to %v", carID, ownerName), nil
	}
	} else {
	return "", fmt.Errorf("Car %v does not exist!", carID)
	}
	} else {
	return "", fmt.Errorf("User under following MSPID: %v cannot able to perform this action", clientOrgID)
	}
	} 
