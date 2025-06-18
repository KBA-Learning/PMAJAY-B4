package main

import "fmt"

func main() {
	fmt.Println("Data Types in Go")

	var number1 int
	var number2 float64
	var complex complex64
	var name string
	var IsTrue bool

	fmt.Println(number1, number2, complex, IsTrue, name)
	fmt.Printf("An empty string %q \n", name) //null values of different types

	fmt.Println("Ways to define variable or constants")
	var age int                  //declaration without initialisation
	var user = "Tommy"           //declaration with initialisation
	email := "email@example.com" //shorthand for declaration with initialisation
	fmt.Println(age, user, email)
	const distance = 25
	fmt.Printf("Type of distance: %T \n",distance)

}
