/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  AYLRandomWinner,
  AYLRandomWinnerInterface,
} from "../../contracts/AYLRandomWinner";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_aylToken",
        type: "address",
      },
      {
        internalType: "uint64",
        name: "_subscriptionId",
        type: "uint64",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AYLRandomWinner__FailedToJoinAGame",
    type: "error",
  },
  {
    inputs: [],
    name: "AYLRandomWinner__FailedToStartGame",
    type: "error",
  },
  {
    inputs: [],
    name: "AYLRandomWinner__NotEnoughAYLTokens",
    type: "error",
  },
  {
    inputs: [],
    name: "AYLRandomWinner__SameParamGameExist",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "have",
        type: "address",
      },
      {
        internalType: "address",
        name: "want",
        type: "address",
      },
    ],
    name: "OnlyCoordinatorCanFulfill",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "winner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountWon",
        type: "uint256",
      },
    ],
    name: "GameEnded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "gameId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "maxPlayers",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "entryFee",
        type: "uint256",
      },
    ],
    name: "GameStarted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "player",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "gameId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "entryFee",
        type: "uint256",
      },
    ],
    name: "JoinedGame",
    type: "event",
  },
  {
    inputs: [],
    name: "_onwerOfATLToken",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "aylToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "existingGame",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "gameParams",
    outputs: [
      {
        internalType: "uint256",
        name: "gameId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxNumOfPlayers",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "entryFee",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "gameStarted",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_gameId",
        type: "uint256",
      },
    ],
    name: "getPlayers",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_gameId",
        type: "uint256",
      },
    ],
    name: "getPlayersCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_gameId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_entryFee",
        type: "uint256",
      },
    ],
    name: "joinGame",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "nextGameId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "players",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "requestId",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "randomWords",
        type: "uint256[]",
      },
    ],
    name: "rawFulfillRandomWords",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_maxNumOfPlayers",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_entryFee",
        type: "uint256",
      },
    ],
    name: "startGame",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a0604052736168499c0cffcacd319c818142124b7a15e857ab600a60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507fd89b2bf150e3b9e13446986e571fb9cab24b13cea0a43ea20a6049a85cc807cc60001b600b55620186a0600c60006101000a81548163ffffffff021916908363ffffffff1602179055506003600c60046101000a81548161ffff021916908361ffff1602179055506001600c60066101000a81548163ffffffff021916908363ffffffff160217905550348015620000f157600080fd5b5060405162001e3338038062001e338339818101604052810190620001179190620002b5565b600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b8152505050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555033600960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600960146101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555050506200037d565b600081519050620002988162000349565b92915050565b600081519050620002af8162000363565b92915050565b60008060408385031215620002cf57620002ce62000344565b5b6000620002df8582860162000287565b9250506020620002f2858286016200029e565b9150509250929050565b6000620003098262000310565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600067ffffffffffffffff82169050919050565b600080fd5b6200035481620002fc565b81146200036057600080fd5b50565b6200036e8162000330565b81146200037a57600080fd5b50565b60805160601c611a90620003a3600039600081816102ab01526102ff0152611a906000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c8063998f1b8011610071578063998f1b80146101a1578063b135bbb0146101d1578063b60b9fcb146101ef578063b898a9771461020b578063eaed8d4e1461023b578063eca1ada714610259576100b4565b80630904cb57146100b95780631fe543e3146100e95780632edc4bd414610105578063460e204914610123578063730b838114610153578063852335c01461016f575b600080fd5b6100d360048036038101906100ce919061110f565b610289565b6040516100e09190611468565b60405180910390f35b61010360048036038101906100fe9190611169565b6102a9565b005b61010d610369565b60405161011a91906114d6565b60405180910390f35b61013d6004803603810190610138919061110f565b61038d565b60405161014a9190611446565b60405180910390f35b61016d600480360381019061016891906111c5565b61042e565b005b6101896004803603810190610184919061110f565b610842565b6040516101989392919061156c565b60405180910390f35b6101bb60048036038101906101b691906111c5565b61086c565b6040516101c8919061136b565b60405180910390f35b6101d96108ba565b6040516101e69190611551565b60405180910390f35b610209600480360381019061020491906111c5565b6108c0565b005b610225600480360381019061022091906111c5565b610e04565b6040516102329190611468565b60405180910390f35b610243610e33565b604051610250919061136b565b60405180910390f35b610273600480360381019061026e919061110f565b610e59565b6040516102809190611551565b60405180910390f35b60046020528060005260406000206000915054906101000a900460ff1681565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461035b57337f00000000000000000000000000000000000000000000000000000000000000006040517f1cf993f4000000000000000000000000000000000000000000000000000000008152600401610352929190611386565b60405180910390fd5b6103658282610e79565b5050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60606002600083815260200190815260200160002080548060200260200160405190810160405280929190818152602001828054801561042257602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116103d8575b50505050509050919050565b60036000838152602001908152602001600020600082815260200190815260200160002060009054906101000a900460ff1615610497576040517f363effed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b670de0b6b3a7640000816104ab91906116c5565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231336040518263ffffffff1660e01b8152600401610504919061136b565b60206040518083038186803b15801561051c57600080fd5b505afa158015610530573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610554919061113c565b101561058c576040517fcdc8ec6400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd33600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16670de0b6b3a76400008661060391906116c5565b6040518463ffffffff1660e01b8152600401610621939291906113af565b602060405180830381600087803b15801561063b57600080fd5b505af115801561064f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061067391906110e2565b9050806106ac576040517f9b72fd5500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6106b4610ec9565b600860008154809291906106c79061180a565b91905055506040518060600160405280600854815260200184815260200183815250600560006008548152602001908152602001600020600082015181600001556020820151816001015560408201518160020155905050600260006008548152602001908152602001600020339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600160036000858152602001908152602001600020600084815260200190815260200160002060006101000a81548160ff021916908315150217905550600160046000600854815260200190815260200160002060006101000a81548160ff0219169083151502179055507fedb371157a97763aaa1b348e6811cbb8c9eb299aaf93a6f5ba91f312bcb40fcf60085484846040516108359392919061156c565b60405180910390a1505050565b60056020528060005260406000206000915090508060000154908060010154908060020154905083565b6002602052816000526040600020818154811061088857600080fd5b906000526020600020016000915091509054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60085481565b6004600083815260200190815260200160002060009054906101000a900460ff16610920576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161091790611531565b60405180910390fd5b60056000838152602001908152602001600020600201548114610978576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161096f90611511565b60405180910390fd5b60056000838152602001908152602001600020600101546002600084815260200190815260200160002080549050106109e6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109dd906114f1565b60405180910390fd5b670de0b6b3a7640000816109fa91906116c5565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231336040518263ffffffff1660e01b8152600401610a53919061136b565b60206040518083038186803b158015610a6b57600080fd5b505afa158015610a7f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610aa3919061113c565b1015610adb576040517fcdc8ec6400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd33600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16670de0b6b3a764000086610b5291906116c5565b6040518463ffffffff1660e01b8152600401610b70939291906113af565b602060405180830381600087803b158015610b8a57600080fd5b505af1158015610b9e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bc291906110e2565b905080610bfb576040517fb98486ad00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60026000848152602001908152602001600020339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f53d337ea1dc431137693f9a003695ac0fde36068f5fc73370015168b9e64cf9e338484604051610ca29392919061140f565b60405180910390a1600560008481526020019081526020016000206001015460026000858152602001908152602001600020805490501415610dff57600060026000858152602001908152602001600020805490506007600086815260200190815260200160002054610d159190611853565b90506000600260008681526020019081526020016000208281548110610d3e57610d3d6118e2565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506000846005600088815260200190815260200160002060010154610d8f91906116c5565b905060006064605a670de0b6b3a764000084610dab91906116c5565b610db591906116c5565b610dbf9190611694565b90507fd4ba6fec82d9b0e8ffe50b9fed9e4be3b25c984ce1e0e016405a5528726e8a2c8382604051610df29291906113e6565b60405180910390a1505050505b505050565b60036020528160005260406000206020528060005260406000206000915091509054906101000a900460ff1681565b600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600060026000838152602001908152602001600020805490509050919050565b60006006600084815260200190815260200160002054905081600081518110610ea557610ea46118e2565b5b60200260200101516007600083815260200190815260200160002081905550505050565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635d3b1d30600b54600960149054906101000a900467ffffffffffffffff16600c60049054906101000a900461ffff16600c60009054906101000a900463ffffffff16600c60069054906101000a900463ffffffff166040518663ffffffff1660e01b8152600401610f7a959493929190611483565b602060405180830381600087803b158015610f9457600080fd5b505af1158015610fa8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fcc919061113c565b90506001600d6000828254610fe1919061163e565b92505081905550600d54600660008381526020019081526020016000208190555050565b6000611018611013846115c8565b6115a3565b9050808382526020820190508285602086028201111561103b5761103a611945565b5b60005b8581101561106b578161105188826110b8565b84526020840193506020830192505060018101905061103e565b5050509392505050565b600082601f83011261108a57611089611940565b5b813561109a848260208601611005565b91505092915050565b6000815190506110b281611a2c565b92915050565b6000813590506110c781611a43565b92915050565b6000815190506110dc81611a43565b92915050565b6000602082840312156110f8576110f761194f565b5b6000611106848285016110a3565b91505092915050565b6000602082840312156111255761112461194f565b5b6000611133848285016110b8565b91505092915050565b6000602082840312156111525761115161194f565b5b6000611160848285016110cd565b91505092915050565b600080604083850312156111805761117f61194f565b5b600061118e858286016110b8565b925050602083013567ffffffffffffffff8111156111af576111ae61194a565b5b6111bb85828601611075565b9150509250929050565b600080604083850312156111dc576111db61194f565b5b60006111ea858286016110b8565b92505060206111fb858286016110b8565b9150509250929050565b6000611211838361121d565b60208301905092915050565b6112268161171f565b82525050565b6112358161171f565b82525050565b600061124682611604565b611250818561161c565b935061125b836115f4565b8060005b8381101561128c5781516112738882611205565b975061127e8361160f565b92505060018101905061125f565b5085935050505092915050565b6112a281611731565b82525050565b6112b18161173d565b82525050565b6112c0816117a3565b82525050565b60006112d360138361162d565b91506112de82611965565b602082019050919050565b60006112f660318361162d565b91506113018261198e565b604082019050919050565b600061131960288361162d565b9150611324826119dd565b604082019050919050565b61133881611747565b82525050565b61134781611775565b82525050565b6113568161177f565b82525050565b6113658161178f565b82525050565b6000602082019050611380600083018461122c565b92915050565b600060408201905061139b600083018561122c565b6113a8602083018461122c565b9392505050565b60006060820190506113c4600083018661122c565b6113d1602083018561122c565b6113de604083018461133e565b949350505050565b60006040820190506113fb600083018561122c565b611408602083018461133e565b9392505050565b6000606082019050611424600083018661122c565b611431602083018561133e565b61143e604083018461133e565b949350505050565b60006020820190508181036000830152611460818461123b565b905092915050565b600060208201905061147d6000830184611299565b92915050565b600060a08201905061149860008301886112a8565b6114a5602083018761135c565b6114b2604083018661132f565b6114bf606083018561134d565b6114cc608083018461134d565b9695505050505050565b60006020820190506114eb60008301846112b7565b92915050565b6000602082019050818103600083015261150a816112c6565b9050919050565b6000602082019050818103600083015261152a816112e9565b9050919050565b6000602082019050818103600083015261154a8161130c565b9050919050565b6000602082019050611566600083018461133e565b92915050565b6000606082019050611581600083018661133e565b61158e602083018561133e565b61159b604083018461133e565b949350505050565b60006115ad6115be565b90506115b982826117d9565b919050565b6000604051905090565b600067ffffffffffffffff8211156115e3576115e2611911565b5b602082029050602081019050919050565b6000819050602082019050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600061164982611775565b915061165483611775565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561168957611688611884565b5b828201905092915050565b600061169f82611775565b91506116aa83611775565b9250826116ba576116b96118b3565b5b828204905092915050565b60006116d082611775565b91506116db83611775565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561171457611713611884565b5b828202905092915050565b600061172a82611755565b9050919050565b60008115159050919050565b6000819050919050565b600061ffff82169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600063ffffffff82169050919050565b600067ffffffffffffffff82169050919050565b60006117ae826117b5565b9050919050565b60006117c0826117c7565b9050919050565b60006117d282611755565b9050919050565b6117e282611954565b810181811067ffffffffffffffff8211171561180157611800611911565b5b80604052505050565b600061181582611775565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561184857611847611884565b5b600182019050919050565b600061185e82611775565b915061186983611775565b925082611879576118786118b3565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4d617820706c6179657273207265616368656400000000000000000000000000600082015250565b7f456e747279206665652073686f756c642062652074686520726571756972656460008201527f20656e7472792066656520616d6f756e74000000000000000000000000000000602082015250565b7f412067616d652077697468207468697320696420686173206e6f74206265656e60008201527f2073746172746564000000000000000000000000000000000000000000000000602082015250565b611a3581611731565b8114611a4057600080fd5b50565b611a4c81611775565b8114611a5757600080fd5b5056fea2646970667358221220bc3a3fa4d361030769fcdae0210237922d4e02e0328243959ad170fab7637e8e64736f6c63430008070033";

type AYLRandomWinnerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AYLRandomWinnerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AYLRandomWinner__factory extends ContractFactory {
  constructor(...args: AYLRandomWinnerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _aylToken: string,
    _subscriptionId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<AYLRandomWinner> {
    return super.deploy(
      _aylToken,
      _subscriptionId,
      overrides || {}
    ) as Promise<AYLRandomWinner>;
  }
  override getDeployTransaction(
    _aylToken: string,
    _subscriptionId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _aylToken,
      _subscriptionId,
      overrides || {}
    );
  }
  override attach(address: string): AYLRandomWinner {
    return super.attach(address) as AYLRandomWinner;
  }
  override connect(signer: Signer): AYLRandomWinner__factory {
    return super.connect(signer) as AYLRandomWinner__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AYLRandomWinnerInterface {
    return new utils.Interface(_abi) as AYLRandomWinnerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AYLRandomWinner {
    return new Contract(address, _abi, signerOrProvider) as AYLRandomWinner;
  }
}
