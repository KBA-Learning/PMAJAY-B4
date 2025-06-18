package main

import "fmt"

func main(){

	fmt.Println("Usual for loop")
	sum := 1
	for i:=0; i<10 ; i++{
		sum += i
		fmt.Println(sum)
	}
	
	fmt.Println("The while loop")
	for sum <1000 {
		sum += sum
		fmt.Println(sum)
	}

	fmt.Println("Infinite loop")
	// for {
	// 	//do something
	// }


	fmt.Println("Range function")
	numbers := [5]int{1, 4, 7, 5, 8}
	for _, v := range numbers{
		fmt.Println(v)
	}

	
}