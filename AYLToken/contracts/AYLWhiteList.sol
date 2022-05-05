//SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

contract AYLWhiteList {
    //list of whitelisted addresses
    address[] whitelistedList;
    //Max number of whitelisted address
    uint256 maxWhiteListedAddresses = 100; //when running test, change this from  100 to 5
    uint256 public numberOfWhitelistedAddresses;
    //check if an address has been whitelisted
    mapping(address => bool) public whitelistedAddress;
    address owner;

    constructor() {
        owner = msg.sender;
    }

    //add an address to the whitelist
    function addToWhiteList() external {
        require(!whitelistedAddress[msg.sender], "This address has already been whitelisted");
        require(numberOfWhitelistedAddresses < maxWhiteListedAddresses, "Maximum number of whitelisted addresses reached");
        numberOfWhitelistedAddresses++;
        whitelistedAddress[msg.sender] = true;
        whitelistedList.push(msg.sender);
    }

    //get all whitelisted addresses and display the count
    function getWhitelistedAddresses() external view onlyOwner returns(address[] memory) {
        return whitelistedList;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can do this action");
        _;
    }
}