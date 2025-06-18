package main

import "fmt"

func main() {
	fmt.Println("Arrays")
	var fruits [10]string
	fruits[3] = "Mango"
	fruits[9] = "Apple"
	fmt.Println(fruits, fruits[1])
	numbers := [10]int{1, 4, 7, 5, 8, 9, 0}
	fmt.Println(numbers)

	fmt.Println("Slices")
	random := numbers[2:6]
	fmt.Println(random)
	var ages []int
	// ages[0] = 25
	ages = append(ages, 25, 75, 66)
	fmt.Println(ages)
	ages = append(ages, 12,57,87,98)
	names := []string{"Tommy", "Danny", "Robin"}
	fmt.Println(names)

	fmt.Println("Capacity and Length of slices")
	fmt.Println( "capacity of numbers array: ",cap(numbers))
	fmt.Println( "length of numbers array: ", len(numbers))
	fmt.Println( "capacity of slice 'random': ",cap(random))
	fmt.Println( "length of slice 'random': ", len(random))
	// fmt.Println( "capacity of slice 'ages': ",cap(ages))

}
