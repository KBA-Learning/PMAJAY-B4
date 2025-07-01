package main

import "fmt"

func main() {

	// use this functions to evaluate and submit txns
	// try calling these functions

	// result := submitTxnFn(
	// 	"org1",
	// 	"autochannel",
	// 	"KBA-Automobile",
	// 	"CarContract",
	// 	"invoke",
	// 	make(map[string][]byte),
	// 	"CreateCar",
	// 	"Car-06",
	// 	"Maruti",
	// 	"Alto",
	// 	"Red",
	// 	"fac01",
	// 	"25/10/2023",
	// )

	// privateData := map[string][]byte{
	// 	"make":       []byte("Maruti"),
	// 	"model":      []byte("Alto"),
	// 	"color":      []byte("Red"),
	// 	"dealerName": []byte("Popular"),
	// }

	 //result := submitTxnFn("org2", "autochannel", "KBA-Automobile", "OrderContract", "private", privateData, "CreateOrder", "ORD-05")
	 result := submitTxnFn("org2", "autochannel", "KBA-Automobile", "OrderContract", "query", make(map[string][]byte), "ReadOrder", "ORD-03")
	 //result := submitTxnFn("org1", "autochannel", "KBA-Automobile", "CarContract", "query", make(map[string][]byte), "GetAllCars")
	// result := submitTxnFn("org1", "autochannel", "KBA-Automobile", "OrderContract", "query", make(map[string][]byte), "GetAllOrders")
	// result := submitTxnFn("org1", "autochannel", "KBA-Automobile", "CarContract", "query", make(map[string][]byte), "GetMatchingOrders", "Car-06")
	// result := submitTxnFn("org1", "autochannel", "KBA-Automobile", "CarContract", "invoke", make(map[string][]byte), "MatchOrder", "Car-06", "ORD-03")
	// result := submitTxnFn("org3", "autochannel", "KBA-Automobile", "CarContract", "invoke", make(map[string][]byte), "RegisterCar", "Car-06", "Dani", "KL-01-CD-01")
	fmt.Println(result)
}
