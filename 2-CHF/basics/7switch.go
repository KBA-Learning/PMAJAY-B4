package main

import (
	"fmt"
	"time"
)

func main(){
	day := 3

	switch day{

	case 1:
		fmt.Println("it is monday")

	case 2:
		fmt.Println("it is tuesday")

	case 3:
		fmt.Println("It is wednessday")

	default:
		fmt.Println("Weekend")
	}

	now := time.Now()
	// fmt.Println(now)
	switch {
	case now.Hour() <12:
		fmt.Println("Good morning")

	case now.Hour()<16:
		fmt.Println("Good afternoon")

	default:
		fmt.Println("Good evening")
	}
}