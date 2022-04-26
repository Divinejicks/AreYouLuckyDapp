# AreYouLuckyDapp
This is my portfolio project, made up of token creation, whitelisting, ICO, airdropping, Exchange, Dao and more. Check out the readme to see the requirements of the project and the progress in the checklist

Name: 
Are You Lucky (AYL)
Description: 
This is a smart contract that allow users to start an AYL. The first person to start AYL specifies the number of users that can play (if not specified it will remain open) and the set the amount. The time duration will be specified by the smart contract, when the time elapses the smart contract will determine the winner randomly and send the money to his/her account and a percentage will be cut from the total amount and given to the smart contract owner. (Users should be able to swap their tokens to AYL token and use it to place their buy their spots, also AYL token should have the possibility to swap to other tokens). Users should be able to see the number of opened AYL and their status. Once the maximum number is reached, other accounts will not be able to add. If the time duration reaches when the AYL is not yet full, the winner will be decided between the existing players. (Can specify the minimum amount of eth that can be used and convert behind the scene to AYL Token)
Problem Solving: Providing a decentralize platform for uses to 
Functionalities:
Users should be able to connect with their wallet to AYL
Users should be able to start a new AYL
Users should be able to specified the number of members if not specified, the AYL instance will be open for upto 50 members
AYL should be able to track each instance and how much came from it
When starting a new AYL, the user deposits eth
The deposited eth should be set as the amount for that AYL
When starting a new AYL, the user should specify the duration he wants the AYL to run for in minutes
When an AYL has been started, other users should be able to join by depositing the exact amount of eth the person who started the AYL deposited.
Users should swap their tokens to AYL Token and use that to buy their spot in an open AYL. That is, AYL Token are the standard to be used with AYL. (Or is should show a list of supported token with their equivalent in AYL Token
There should be a list of all opened AYL
There should be a history section, about, contact
When the time duration elapses or the number of specified members reaches, AYL should randomly choose the winner
2% of the total amount is sent to the owner's account and the rest is sent to the winner's account.
If there is only one person in an AYL, his/her money should be sent back into his/her account.
The open AYL is closed.
Possible to do and airdrop For early users
When a user has played more than a certain amount of time, a number of tokens are calculated and send to him.
If someone wins a number of time, a certain amount of token should be calculated and given to him.
Contract should be verified 
It should have a DAO
It should have a swapping mechanism



The Token Contract
It should import ERC20Capped and Ownable.
Send an initial amount of token to the owner on deployment.
Should be able to issueAirDrop to a list of addresses, only the owner should be able to call this function
When users signup (max first 500 users), they should receive AYL token, each address should only receive it once
ICO and purchase should be implemented at 0.00005 ether
Users should be able to buy AYL tokens like and ICO.
The cost of 1 AYL = 0.00005, the owner should be able to change the price of 1 AYL
It should be able to select the random winner
It should get randomness from chainlink.
Events should be emited
Max number of players
Have and entry fee (AYL) specified by the first player and the max number
Contract should be able to select a winner and send part of the AYL to him
The Contract should get part of the AYL
A player that wins a number of times should be given a gift
Get all started games with Ids
Should be verified on etherscan using hardhat when deploying




The White List Contract
Should Keep track of the number of addresses that are being whitelisted
Should have the max number of addresses that has to be white listed
Should be able to add new addresses to the white listed addresses.
Should be verified on etherscan using hardhat when deploying




The dapp
Should be able to login users
Should allow users to connect their wallets
Should allow users to request for initial tokens
Should allow users to interact with the AYL system. //More on this
Before the launch, it should restrict the highest number of bet that can be placed. 
Users should bet for a number of time and when that reaches, they should be added to the whitelisted addresses.
When the system launches, the owner should be able to call the issueAridrop to send tokens to the whitelisted addresses.
Users that signup should be given AYL tokens
Users should be able to swap coins on the platform.
Graphql should be used to get events
Show list of started games with their Ids
