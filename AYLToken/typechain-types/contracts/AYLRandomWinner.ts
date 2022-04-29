/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../common";

export interface AYLRandomWinnerInterface extends utils.Interface {
  functions: {
    "_onwerOfATLToken()": FunctionFragment;
    "allGames(uint256)": FunctionFragment;
    "aylToken()": FunctionFragment;
    "existingGame(uint256,uint256)": FunctionFragment;
    "gameStarted(uint256)": FunctionFragment;
    "joinGame(uint256,uint256)": FunctionFragment;
    "players(uint256,uint256)": FunctionFragment;
    "randomNumbers(uint256)": FunctionFragment;
    "rawFulfillRandomWords(uint256,uint256[])": FunctionFragment;
    "requestId()": FunctionFragment;
    "startGame(uint256,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "_onwerOfATLToken"
      | "allGames"
      | "aylToken"
      | "existingGame"
      | "gameStarted"
      | "joinGame"
      | "players"
      | "randomNumbers"
      | "rawFulfillRandomWords"
      | "requestId"
      | "startGame"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "_onwerOfATLToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "allGames",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "aylToken", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "existingGame",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "gameStarted",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "joinGame",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "players",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "randomNumbers",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "rawFulfillRandomWords",
    values: [BigNumberish, BigNumberish[]]
  ): string;
  encodeFunctionData(functionFragment: "requestId", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "startGame",
    values: [BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "_onwerOfATLToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "allGames", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "aylToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "existingGame",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "gameStarted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "joinGame", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "players", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "randomNumbers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rawFulfillRandomWords",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "requestId", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "startGame", data: BytesLike): Result;

  events: {
    "GameEnded(address,uint256,uint256)": EventFragment;
    "GameStarted(uint256,uint256,uint256)": EventFragment;
    "JoinedGame(address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "GameEnded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "GameStarted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "JoinedGame"): EventFragment;
}

export interface GameEndedEventObject {
  winner: string;
  amountWon: BigNumber;
  requestId: BigNumber;
}
export type GameEndedEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  GameEndedEventObject
>;

export type GameEndedEventFilter = TypedEventFilter<GameEndedEvent>;

export interface GameStartedEventObject {
  gameId: BigNumber;
  maxPlayers: BigNumber;
  entryFee: BigNumber;
}
export type GameStartedEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber],
  GameStartedEventObject
>;

export type GameStartedEventFilter = TypedEventFilter<GameStartedEvent>;

export interface JoinedGameEventObject {
  player: string;
  gameId: BigNumber;
  entryFee: BigNumber;
}
export type JoinedGameEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  JoinedGameEventObject
>;

export type JoinedGameEventFilter = TypedEventFilter<JoinedGameEvent>;

export interface AYLRandomWinner extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AYLRandomWinnerInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    _onwerOfATLToken(overrides?: CallOverrides): Promise<[string]>;

    allGames(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        gameId: BigNumber;
        maxNumOfPlayers: BigNumber;
        entryFee: BigNumber;
      }
    >;

    aylToken(overrides?: CallOverrides): Promise<[string]>;

    existingGame(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    gameStarted(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    joinGame(
      _gameId: BigNumberish,
      _entryFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    players(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    randomNumbers(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    rawFulfillRandomWords(
      requestId: BigNumberish,
      randomWords: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    requestId(overrides?: CallOverrides): Promise<[BigNumber]>;

    startGame(
      _maxNumOfPlayers: BigNumberish,
      _entryFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  _onwerOfATLToken(overrides?: CallOverrides): Promise<string>;

  allGames(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      gameId: BigNumber;
      maxNumOfPlayers: BigNumber;
      entryFee: BigNumber;
    }
  >;

  aylToken(overrides?: CallOverrides): Promise<string>;

  existingGame(
    arg0: BigNumberish,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  gameStarted(arg0: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

  joinGame(
    _gameId: BigNumberish,
    _entryFee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  players(
    arg0: BigNumberish,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  randomNumbers(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  rawFulfillRandomWords(
    requestId: BigNumberish,
    randomWords: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  requestId(overrides?: CallOverrides): Promise<BigNumber>;

  startGame(
    _maxNumOfPlayers: BigNumberish,
    _entryFee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    _onwerOfATLToken(overrides?: CallOverrides): Promise<string>;

    allGames(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        gameId: BigNumber;
        maxNumOfPlayers: BigNumber;
        entryFee: BigNumber;
      }
    >;

    aylToken(overrides?: CallOverrides): Promise<string>;

    existingGame(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    gameStarted(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    joinGame(
      _gameId: BigNumberish,
      _entryFee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    players(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    randomNumbers(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rawFulfillRandomWords(
      requestId: BigNumberish,
      randomWords: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    requestId(overrides?: CallOverrides): Promise<BigNumber>;

    startGame(
      _maxNumOfPlayers: BigNumberish,
      _entryFee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "GameEnded(address,uint256,uint256)"(
      winner?: null,
      amountWon?: null,
      requestId?: null
    ): GameEndedEventFilter;
    GameEnded(
      winner?: null,
      amountWon?: null,
      requestId?: null
    ): GameEndedEventFilter;

    "GameStarted(uint256,uint256,uint256)"(
      gameId?: null,
      maxPlayers?: null,
      entryFee?: null
    ): GameStartedEventFilter;
    GameStarted(
      gameId?: null,
      maxPlayers?: null,
      entryFee?: null
    ): GameStartedEventFilter;

    "JoinedGame(address,uint256,uint256)"(
      player?: null,
      gameId?: null,
      entryFee?: null
    ): JoinedGameEventFilter;
    JoinedGame(
      player?: null,
      gameId?: null,
      entryFee?: null
    ): JoinedGameEventFilter;
  };

  estimateGas: {
    _onwerOfATLToken(overrides?: CallOverrides): Promise<BigNumber>;

    allGames(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    aylToken(overrides?: CallOverrides): Promise<BigNumber>;

    existingGame(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    gameStarted(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    joinGame(
      _gameId: BigNumberish,
      _entryFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    players(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    randomNumbers(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rawFulfillRandomWords(
      requestId: BigNumberish,
      randomWords: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    requestId(overrides?: CallOverrides): Promise<BigNumber>;

    startGame(
      _maxNumOfPlayers: BigNumberish,
      _entryFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    _onwerOfATLToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    allGames(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    aylToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    existingGame(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    gameStarted(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    joinGame(
      _gameId: BigNumberish,
      _entryFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    players(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    randomNumbers(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rawFulfillRandomWords(
      requestId: BigNumberish,
      randomWords: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    requestId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    startGame(
      _maxNumOfPlayers: BigNumberish,
      _entryFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
