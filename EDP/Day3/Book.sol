//SPDX-License-Identifier: MIT
pragma solidity 0.8.30;
contract Book{
    struct MyBook{
        string title;
        uint price;
        address owner;
        bool sold;
    } 
    MyBook b1,b2,b3;
    MyBook[] bList;
    bList.push(b1);

    modifier onlyOwner() {
        require(owner==msg.sender,"Unauthorized Access !!");
        _;
    }

    function setBook(string memory _title, uint _price) public{
        b1.title = _title;
        b1.price = _price;
        b1.owner = msg.sender;
        b1.sold = false;
    }
    function getBook()public view returns(string memory, uint, address){
        return (title, price, owner);
    }
    // transfer x wei from a to b
    //b.transfer(x);

    function buyBook()public payable{
        require(sold==false, "Book not available for Sale !!");
        require(msg.value >=price,"Amount insufficient");
       // if(sold==false && msg.value >=price){
            uint bal = msg.value - price;
            if(bal > 0)
                payable(msg.sender).transfer(bal);
            payable(owner).transfer(price);
            owner = msg.sender;
            sold = true;
        
    }
    function putBookForSale() public onlyOwner {
        //require(owner==msg.sender,"Unauthorized Access !!");
        sold = false;
    }
    function resetPrice(uint newPrice) public onlyOwner{
         //require(owner==msg.sender,"Unauthorized Access !!");
         price = newPrice;
    }
}
