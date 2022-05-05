//SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Capped.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./AYLWhiteList.sol";

error AYLToken__FailedToWithdrawEth();

contract AYLToken is ERC20Capped, Ownable, AYLWhiteList {
    //Max number of users that will receive AYL coins on signup
    uint256 maxNumberOfSignUpAddresses = 2;  //use 2 when running the tests instead of 500
    //Checks if the address has already been given coins
    mapping(address => bool) public hasReceivedCoinsOnSignup;
    //Keep count of the number of users signing up
    uint256 public numberOfSignupUsers;
    //Price for 1 AYL Coin for ICO and purchase
    uint256 public price = 0.00005 ether;
    address immutable _owner;

    constructor(uint256 cap) ERC20("AYLToken", "AYL") ERC20Capped(cap) {
        ERC20._mint(msg.sender, 10000000*10**18);
        _owner = msg.sender;
    }

    //In this function, whitelisted addresses will be issued 200 AYL tokens.
    //Calling the _mint() is checked and issue that our minted tokens does not go above the cap value
    function issueAirDrop(address[] calldata _addresses) external onlyOwner {
        for(uint i = 0; i < _addresses.length; i++) {
            _mint(_addresses[i], 200*10**18);
        }
    }

    //Funtion to receive coins on signup
    //Users will pay for the gas fee
    function receiveCoinsOnSignup() external {
        require(numberOfSignupUsers < maxNumberOfSignUpAddresses, "Max number has been reach, you can no longer receive AYL coins on sign up");
        require(!hasReceivedCoinsOnSignup[msg.sender], "You have already received AYL coins on signup");
        hasReceivedCoinsOnSignup[msg.sender] = true;
        numberOfSignupUsers++;
        _mint(msg.sender, 200*10**18);
    }

    //this function is used for ICO and purchase of AYL coins
    function buyAYLCoins(uint256 numberOfCoinsToBuy) external payable {
        if(msg.sender != _owner){
            require(msg.value >= numberOfCoinsToBuy*price, "Not enough ether");
        }
        _mint(msg.sender, numberOfCoinsToBuy*10**18);
    }

    //This function is used to update the price of 1 AYL
    function updateAYLPrice(uint256 _newPrice) external onlyOwner {
        price = _newPrice;
    }

    function balanceInTheContract() external onlyOwner view returns(uint256){
        return address(this).balance;
    }

    function withdraw() external onlyOwner {
        (bool success, ) = _owner.call{value: address(this).balance}("");
        if(!success) {
            revert AYLToken__FailedToWithdrawEth();
        }
    }

    function addAddressToWhiteList() external {
        addToWhiteList();
    }

    function getAllWhiteListedAddress() external view onlyOwner returns (address[] memory) {
        return getWhitelistedAddresses();
    }

    
    receive() external payable {}
    fallback() external payable {}
}