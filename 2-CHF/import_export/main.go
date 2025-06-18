package main

import (
	"fmt"
	"gobasics/greetings" // Import the greetings package
)

func main() {
	// Call the SayHello function from the greetings package
	message := greetings.SayHello("Tony")
	fmt.Println(message)
}
