package main

func main() {

// use these functions to evaluate and submit transactions

// try calling these functions

submitTxnFn(

"org1",

"autochannel",

"KBA-Automobile",

"CarContract",

"invoke",

make(map[string][]byte),

"CreateCar",

"Car-08",

"Tata",

"Harrier",

"Black",

"fac01",

"25/10/2023",

)

// privateData := map[string][]byte{

// "make": []byte("Maruti"),

// "model": []byte("Alto"),

// "color": []byte("Red"),

// "dealerName": []byte("Popular"),

// }

// submitTxnFn("org2", "autochannel", "KBA-Automobile", "OrderContract", "private", make(map[string][]byte), "CreateOrder", "ORD-03")

// submitTxnFn("org2", "autochannel", "KBA-Automobile", "OrderContract", "query", make(map[string][]byte), "ReadOrder", "ORD-05")

//submitTxnFn("org1", "autochannel", "KBA-Automobile", "CarContract", "query", make(map[string][]byte), "GetAllCars")

// submitTxnFn("org1", "autochannel", "KBA-Automobile", "OrderContract", "query", make(map[string][]byte),"GetAllOrders")

// submitTxnFn("org1", "autochannel", "KBA-Automobile", "CarContract", "query", make(map[string][]byte),"GetMatchingOrders", "Car-06")

// submitTxnFn("org1", "autochannel", "KBA-Automobile", "CarContract", "invoke", make(map[string][]byte),"MatchOrder", "Car-06", "ORD-01")

// submitTxnFn("org3", "autochannel", "KBA-Automobile", "CarContract", "invoke", make(map[string][]byte),"RegisterCar", "Car-06", "Dani", "KL-01-CD-01")

}