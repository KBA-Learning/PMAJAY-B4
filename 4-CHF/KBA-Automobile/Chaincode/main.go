package main

import (
	"kbaauto/contracts"
	"log"

	"github.com/hyperledger/fabric-contract-api-go/contractapi"
)

func main() {
	carContract := new(contracts.CarContract)

	chaincode, err := contractapi.NewChaincode(carContract)

	if err != nil {
		log.Panicf("Could not create chaincode : %v", err)
	}

	err = chaincode.Start()

	if err != nil {
		log.Panicf("Failed to start chaincode : %v", err)
	}
}
