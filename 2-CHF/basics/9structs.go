package main

import "fmt"

type User struct {
	Name  string
	Age   int
	Email string
}

func main() {
	user1 := User{"Tony", 25, "tony@example.com"}
	user2 := User{"Nancy", 27, "nancy@example.com"}

	fmt.Println(user1, user2)
	fmt.Println(user2.Email)
	fmt.Println(user1.Age)
	user1.Age = user1.Age + 10
	fmt.Println(user1.Age)
	fmt.Println(user1)
}
