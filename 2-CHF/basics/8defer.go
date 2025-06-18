package main

import "fmt"

func main(){
	fmt.Println("Defer keyword - LIFO")

	defer fmt.Println("This is first line")
	fmt.Println("This is second line")
	defer fmt.Println("This is third line")
	fmt.Println("This is fourth line")


}