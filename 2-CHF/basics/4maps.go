package main

import "fmt"

func main() {
	// phonebook := make(map[string]string)
	// var phonebook = map[string]string{"Alice":"43356"}
	phonebook := map[string]string{"Tony": "5764784"}
	phonebook["Tommy"] = "123435"
	phonebook["Danny"] = "676789"
	fmt.Println(phonebook)
	fmt.Println(phonebook["Tommy"])

	delete(phonebook, "Tommy")
	fmt.Println(phonebook)

	elem, ok := phonebook["Danny"]
	fmt.Println(elem, ok)
	

}
