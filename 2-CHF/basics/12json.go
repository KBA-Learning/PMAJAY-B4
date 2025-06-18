package main

import (
	"encoding/json"
	"fmt"
)

// Defining a struct
type Person struct {
	Name    string `json:"name"` 
	Age     int    `json:"age"`
	Address string `json:"address"`
}

func main() {
	// Marshaling: Go struct to JSON 
	p1 := Person{Name: "John", Age: 30, Address: "123 Main St"}
	jsonData, err := json.Marshal(p1)
	if err != nil {
		fmt.Println(err)
		return
	}
	
	fmt.Println(string(jsonData))
	fmt.Printf("the data is %s \n", jsonData)

	// Unmarshaling: JSON string to Go struct
	jsonString := `{"Name":"Alice","age":25,"address":"456 Elm St"}`
	var p2 Person
	err = json.Unmarshal([]byte(jsonString), &p2)
	if err != nil {
		fmt.Println(err)
		return
	}
	fmt.Printf(" the data is : %#v \n", p2)
}

