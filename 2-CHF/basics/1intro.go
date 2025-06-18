package main

import "fmt"

func main()  {
	fmt.Println("Introduction to Go")
	fmt.Println("Hello world!")
	var name string
	fmt.Print("Please enter Your Name: ")
	fmt.Scan(&name)
	fmt.Printf("Hello %s good morning \n", name)
}