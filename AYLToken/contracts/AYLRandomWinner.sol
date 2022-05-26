//SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

import "@chainlink/contracts/src/v0.8/interfaces/VRFCoordinatorV2Interface.sol";
import "@chainlink/contracts/src/v0.8/VRFConsumerBaseV2.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

error AYLRandomWinner__FailedToStartGame();
error AYLRandomWinner__FailedToJoinAGame();
error AYLRandomWinner__FailedToTransferTokensToWinner();
error AYLRandomWinner__NotEnoughAYLTokens();
error AYLRandomWinner__SameParamGameExist();

contract AYLRandomWinner is VRFConsumerBaseV2 {
    IERC20 public aylToken;
    VRFCoordinatorV2Interface COORDINATOR;

    //parameters of a game
    struct GameParam {
        uint256 gameId; //id of the game
        uint256 maxNumOfPlayers; //maximum number of players for a specific game id
        uint256 entryFee; //entry fee for a specific game id
    }

    mapping(uint256 => address[]) public players; //addresses of players for a specific game id
    
    //Checks if there is an existing game with the same max number and entry fee
    // this is to prevent multiple game instance with the same parameters
    mapping(uint256 => mapping(uint256 => bool)) public existingGame;

    //Check if the game for a specific game id has been started
    mapping(uint256 => bool) public gameStarted;

    //A container that holds the gameid and its struct
    mapping(uint256 => GameParam) public gameParams;

    uint256 public nextGameId;
    address public _onwerOfATLToken; //Owner of the ATLToken

    //subscription id, gotten from when you subscribe for LINK
    uint64 subscriptionId; //Subscription ID 3321
    // Rinkeby coordinator. For other networks,
    // see https://docs.chain.link/docs/vrf-contracts/#configurations
    address vrfCoordinator = 0x6168499c0cFfCaCD319c818142124B7A15E857ab;
    // The gas lane to use, which specifies the maximum gas price to bump to.
    // For a list of available gas lanes on each network,
    // see https://docs.chain.link/docs/vrf-contracts/#configurations
    bytes32 keyHash = 0xd89b2bf150e3b9e13446986e571fb9cab24b13cea0a43ea20a6049a85cc807cc;
    //specify gas that will be used in the fulfillRandomWords function
    uint32 callbackGasLimit = 100000;
    //Number of confimations you want before generating your random number
    //The higher the number the better the randomness
    uint16 requestConfirmations = 3;
    //number of random words you want, 1 cost 10,000 gas so make sure your callbackGasLimit is valid
    uint32 numWords =  1;

    uint256[] public randomNumbers;
    uint256 public requestId;

    event GameStarted(uint256 gameId, uint256 maxPlayers, uint256 entryFee);
    event GameEnded(address winner, uint256 amountWon, uint256 requestId);
    event JoinedGame(address player, uint256 gameId, uint256 entryFee);

    constructor(address _aylToken, uint64 _subscriptionId) VRFConsumerBaseV2(vrfCoordinator) {
        aylToken = IERC20(_aylToken);
        _onwerOfATLToken = msg.sender;
        COORDINATOR = VRFCoordinatorV2Interface(vrfCoordinator);
        subscriptionId = _subscriptionId;
    }

    function getPlayers(uint256 _gameId) external view returns(address[] memory){
        return players[_gameId];
    }

    function getPlayersCount(uint256 _gameId) external view returns(uint256){
        return players[_gameId].length;
    }

    //this function starts a new game specifying the max number of players and the entry fee
    function startGame(uint256 _maxNumOfPlayers, uint256 _entryFee) external {
        if(existingGame[_maxNumOfPlayers][_entryFee]){
            revert AYLRandomWinner__SameParamGameExist();
        }

        if(aylToken.balanceOf(msg.sender) < _entryFee*10**18) {
            revert AYLRandomWinner__NotEnoughAYLTokens();
        }

        bool success = aylToken.transferFrom(msg.sender, _onwerOfATLToken, _entryFee*10**18);
        if(!success) {
            revert AYLRandomWinner__FailedToStartGame();
        }
        
        gameParams[nextGameId] = GameParam(
            nextGameId,
            _maxNumOfPlayers,
            _entryFee
        );
        players[nextGameId].push(msg.sender);
        existingGame[_maxNumOfPlayers][_entryFee] = true;
        gameStarted[nextGameId] = true;

        emit GameStarted(nextGameId, _maxNumOfPlayers, _entryFee);
        nextGameId++;
    }

    //This function is used to join a game, specifying the gameid and the entry fee
    function joinGame(uint256 _gameId, uint256 _entryFee) external {
        require(gameStarted[_gameId], "A game with this id has not been started");
        require(_entryFee == gameParams[_gameId].entryFee, "Entry fee should be the required entry fee amount");
        require(players[_gameId].length < gameParams[_gameId].maxNumOfPlayers, "Max players reached");

        if(aylToken.balanceOf(msg.sender) < _entryFee*10**18) {
            revert AYLRandomWinner__NotEnoughAYLTokens();
        }

        bool _success = aylToken.transferFrom(msg.sender, _onwerOfATLToken, _entryFee*10**18);
        if(!_success){
            revert AYLRandomWinner__FailedToJoinAGame();
        }
        players[_gameId].push(msg.sender);
        emit JoinedGame(msg.sender, _gameId, _entryFee);

        if(players[_gameId].length == gameParams[_gameId].maxNumOfPlayers) {
            _requestRandomness();
            uint256 winnerIndex = randomNumbers[_gameId] % players[_gameId].length;
            address winner = players[_gameId][winnerIndex];
            uint256 totalAmount = gameParams[_gameId].maxNumOfPlayers * _entryFee;
            uint256 amountSentToWinner = ((totalAmount*10**18)*90)/100; //90% is sent to the winner and 10% to the owner

            bool success = aylToken.transferFrom(_onwerOfATLToken, winner, amountSentToWinner);
            if(!success){
                revert AYLRandomWinner__FailedToTransferTokensToWinner();
            }
            emit GameEnded(winner, amountSentToWinner, requestId);
        }
    }

    function fulfillRandomWords(
    uint256, /* requestId */
    uint256[] memory randomWords
    ) internal override {
        randomNumbers.push(randomWords[0]); //user the 0 index, since i am requesting just for 1 random number
    }

    //when this function is called, it checks if the subscription has enough LINK
    //The VRCoordinator then calls fullfillRandomWords() to generate randomness
    function _requestRandomness() internal {
        // Will revert if subscription is not set and funded with LINK.
        requestId = COORDINATOR.requestRandomWords(
            keyHash,
            subscriptionId,
            requestConfirmations,
            callbackGasLimit,
            numWords
        );
    }
}