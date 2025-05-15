//SPDX-License-Identifier:MIT

pragma solidity 0.8.28;

contract Cert {
    struct Certificate {
        string name;
        string course;
        string grade;
        string date;
    }

    address admin;

    constructor(){
      admin=msg.sender;
    }

    modifier onlyAdmin(){
        require(msg.sender==admin,"Unauthorized access");
        _;
    }
    
    mapping(uint256 => Certificate)public Certificates;

    function issue(
        uint256 _id,
        string memory name,
        string memory course,
        string memory grade,
        string memory date
    ) public onlyAdmin {
        Certificates[_id] = Certificate(name, course, grade, date);
    }
}

