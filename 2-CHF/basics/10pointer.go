package main

import "fmt"

func main() {

	var p *int
	i := 42
	p = &i
	fmt.Println(*p)
	fmt.Println(&p)
	*p = 21
}
