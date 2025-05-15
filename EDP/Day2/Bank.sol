//SPDX-License-Identifier: MIT
pragma solidity 0.8.30;
contract Bank{
    mapping(address=>uint) balanceLedger;
    address public admin;
    constructor (){
        admin=msg.sender;
    }
    function deposit() public payable{
        // a = a+b => a+=b
        balanceLedger[msg.sender]+= msg.value;
    }
    function withdraw(uint amt)public {
        require(balanceLedger[msg.sender]>=amt,"Insufficient Balance");
        balanceLedger[msg.sender]-=amt;
        payable(msg.sender).transfer(amt);
    }
      function withdraw(uint amt,address payable recipient)public {
        require(balanceLedger[msg.sender]>=amt,"Insufficient Balance");
        balanceLedger[msg.sender]-=amt;
        payable(recipient).transfer(amt);
    }
    function getBalance() public view returns (uint){
        return balanceLedger[msg.sender];
    }
    function getBankBalance(address recipient){
        
    }
}
