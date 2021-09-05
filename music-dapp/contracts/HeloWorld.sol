pragma solidity ^0.8.4;

contract HelloWorld {
    string public str;

    constructor(string memory _str) public {
        str = _str;
    }

    function print() public view returns(string memory) {
        return str;
    }
}