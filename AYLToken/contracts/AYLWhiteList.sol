//SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

contract AYLWhiteList {
    //list of whitelisted addresses
    address[] whitelistedList;
    //Max number of whitelisted address
    uint256 maxWhiteListedAddresses = 100; //when running test, change this from  100 to 5
    uint256 numberOfWhitelistedAddresses;
    //check if an address has been whitelisted
    mapping(address => bool) public whitelistedAddress;

    //add an address to the whitelist
    function addToWhiteList() internal {
        require(!whitelistedAddress[msg.sender], "This address has already been whitelisted");
        require(numberOfWhitelistedAddresses < maxWhiteListedAddresses, "Maximum number of whitelisted addresses reached");
        numberOfWhitelistedAddresses++;
        whitelistedAddress[msg.sender] = true;
        whitelistedList.push(msg.sender);
    }

    //get all whitelisted addresses and display the count
    function getWhitelistedAddresses() internal view returns(address[] memory) {
        return whitelistedList;
    }
}