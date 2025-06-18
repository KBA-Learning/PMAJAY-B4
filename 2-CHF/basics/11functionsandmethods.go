package main

import "fmt"

type User struct {
	Name  string
	Age   int
	Email string
}

func main() {

	sum := add(2, 3)
	fmt.Println(sum)
	sum1, mul1 := addmul(2, 3)
	fmt.Println(sum1, mul1)

	user1 := User{"Tony", 25, "tony@example.com"}
	newAge := alterAgeFn(user1)
	fmt.Println(newAge)
	fmt.Printf("New data is %v \n", user1)
	newAgeMethod := user1.AlterAgeMethod()
	fmt.Println(newAgeMethod)
	fmt.Println(user1.Age)
	Alteredvalue := user1.AlterAgePtr()
	fmt.Printf("Pointer updated value %v", Alteredvalue)
}

func add(a, b int) int {
	return a + b
}
func addmul(a, b int) (int, int) {
	return a + b, a * b
}

func alterAgeFn(user User) int {
	user.Age += 10
	return user.Age
}

func (u User) AlterAgeMethod() int {
	u.Age = u.Age + 10
	return u.Age
}

func (u *User) AlterAgePtr() int {
	u.Age += 5
	return u.Age
}
