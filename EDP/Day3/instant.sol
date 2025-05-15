//SPDX-License-Identifier: MIT
pragma solidity 0.8.30;
contract MyContract{
    string message;
 
    function getMessage() public view returns(string memory){
        return message;
    }
    function setMessage(string memory _message) public {
        message = _message;
    }
}
contract B{
    function deployMyContract() public returns(address){
        MyContract mc = new MyContract();
        return address(mc);
    }
    function interactWithMyC(string memory input) public{
        MyContract mc = MyContract(0x00648CA25a2E54b636c22cd5e1dF72DA69570AA2);
        mc.setMessage(input);
    }
}
