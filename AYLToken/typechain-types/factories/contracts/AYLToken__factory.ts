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
import type { AYLToken, AYLTokenInterface } from "../../contracts/AYLToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "cap",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AYLToken__FailedToWithdrawEth",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "addAddressToWhiteList",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "balanceInTheContract",
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
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        name: "numberOfCoinsToBuy",
        type: "uint256",
      },
    ],
    name: "buyAYLCoins",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "cap",
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
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllWhiteListedAddress",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "hasReceivedCoinsOnSignup",
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_addresses",
        type: "address[]",
      },
    ],
    name: "issueAirDrop",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "numberOfSignupUsers",
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
    inputs: [],
    name: "owner",
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
    name: "price",
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
    inputs: [],
    name: "receiveCoinsOnSignup",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_newPrice",
        type: "uint256",
      },
    ],
    name: "updateAYLPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "whitelistedAddress",
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
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60c060405260056007556002600a55652d79883d2000600d553480156200002557600080fd5b506040516200332c3803806200332c83398181016040528101906200004b9190620004d3565b806040518060400160405280600881526020017f41594c546f6b656e0000000000000000000000000000000000000000000000008152506040518060400160405280600381526020017f41594c00000000000000000000000000000000000000000000000000000000008152508160039080519060200190620000d09291906200040c565b508060049080519060200190620000e99291906200040c565b5050506000811162000132576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620001299062000564565b60405180910390fd5b8060808181525050506200015b6200014f620001bb60201b60201c565b620001c360201b60201c565b6200017d336a084595161401484a0000006200028960201b620012751760201c565b3373ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff1660601b815250505062000742565b600033905090565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415620002fc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620002f39062000586565b60405180910390fd5b62000310600083836200040260201b60201c565b8060026000828254620003249190620005d6565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546200037b9190620005d6565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051620003e29190620005a8565b60405180910390a3620003fe600083836200040760201b60201c565b5050565b505050565b505050565b8280546200041a906200063d565b90600052602060002090601f0160209004810192826200043e57600085556200048a565b82601f106200045957805160ff19168380011785556200048a565b828001600101855582156200048a579182015b82811115620004895782518255916020019190600101906200046c565b5b5090506200049991906200049d565b5090565b5b80821115620004b85760008160009055506001016200049e565b5090565b600081519050620004cd8162000728565b92915050565b600060208284031215620004ec57620004eb620006d1565b5b6000620004fc84828501620004bc565b91505092915050565b600062000514601583620005c5565b91506200052182620006d6565b602082019050919050565b60006200053b601f83620005c5565b91506200054882620006ff565b602082019050919050565b6200055e8162000633565b82525050565b600060208201905081810360008301526200057f8162000505565b9050919050565b60006020820190508181036000830152620005a1816200052c565b9050919050565b6000602082019050620005bf600083018462000553565b92915050565b600082825260208201905092915050565b6000620005e38262000633565b9150620005f08362000633565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111562000628576200062762000673565b5b828201905092915050565b6000819050919050565b600060028204905060018216806200065657607f821691505b602082108114156200066d576200066c620006a2565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600080fd5b7f45524332304361707065643a2063617020697320300000000000000000000000600082015250565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b620007338162000633565b81146200073f57600080fd5b50565b60805160a05160601c612bba6200077260003960008181610aa80152610cc4015260006108d60152612bba6000f3fe6080604052600436106101a05760003560e01c8063617e7fc1116100ec578063a035b1fe1161008a578063c30796ab11610064578063c30796ab1461058f578063dd62ed3e146105cc578063f2fde38b14610609578063fcdd5d9314610632576101a7565b8063a035b1fe146104ea578063a457c2d714610515578063a9059cbb14610552576101a7565b8063715018a6116100c6578063715018a6146104525780638da5cb5b1461046957806395d89b411461049457806397f17af8146104bf576101a7565b8063617e7fc1146103ce5780636da81e0f146103ea57806370a0823114610415576101a7565b8063275aae84116101595780633950935111610133578063395093511461033857806339e1edc5146103755780633ccfd60b146103a05780634a6ebf3a146103b7576101a7565b8063275aae84146102b9578063313ce567146102e2578063355274ea1461030d576101a7565b806306fdde03146101a9578063095ea7b3146101d457806313f277441461021157806318160ddd146102285780631bfd22761461025357806323b872dd1461027c576101a7565b366101a757005b005b3480156101b557600080fd5b506101be61066f565b6040516101cb91906121d9565b60405180910390f35b3480156101e057600080fd5b506101fb60048036038101906101f69190611d65565b610701565b60405161020891906121be565b60405180910390f35b34801561021d57600080fd5b50610226610724565b005b34801561023457600080fd5b5061023d61072e565b60405161024a91906123fb565b60405180910390f35b34801561025f57600080fd5b5061027a60048036038101906102759190611df2565b610738565b005b34801561028857600080fd5b506102a3600480360381019061029e9190611d12565b6107be565b6040516102b091906121be565b60405180910390f35b3480156102c557600080fd5b506102e060048036038101906102db9190611da5565b6107ed565b005b3480156102ee57600080fd5b506102f76108c9565b6040516103049190612416565b60405180910390f35b34801561031957600080fd5b506103226108d2565b60405161032f91906123fb565b60405180910390f35b34801561034457600080fd5b5061035f600480360381019061035a9190611d65565b6108fa565b60405161036c91906121be565b60405180910390f35b34801561038157600080fd5b5061038a6109a4565b60405161039791906123fb565b60405180910390f35b3480156103ac57600080fd5b506103b5610a28565b005b3480156103c357600080fd5b506103cc610b6a565b005b6103e860048036038101906103e39190611df2565b610cc2565b005b3480156103f657600080fd5b506103ff610d86565b60405161040c91906123fb565b60405180910390f35b34801561042157600080fd5b5061043c60048036038101906104379190611ca5565b610d8c565b60405161044991906123fb565b60405180910390f35b34801561045e57600080fd5b50610467610dd4565b005b34801561047557600080fd5b5061047e610e5c565b60405161048b9190612181565b60405180910390f35b3480156104a057600080fd5b506104a9610e86565b6040516104b691906121d9565b60405180910390f35b3480156104cb57600080fd5b506104d4610f18565b6040516104e1919061219c565b60405180910390f35b3480156104f657600080fd5b506104ff610fa3565b60405161050c91906123fb565b60405180910390f35b34801561052157600080fd5b5061053c60048036038101906105379190611d65565b610fa9565b60405161054991906121be565b60405180910390f35b34801561055e57600080fd5b5061057960048036038101906105749190611d65565b611093565b60405161058691906121be565b60405180910390f35b34801561059b57600080fd5b506105b660048036038101906105b19190611ca5565b6110b6565b6040516105c391906121be565b60405180910390f35b3480156105d857600080fd5b506105f360048036038101906105ee9190611cd2565b6110d6565b60405161060091906123fb565b60405180910390f35b34801561061557600080fd5b50610630600480360381019061062b9190611ca5565b61115d565b005b34801561063e57600080fd5b5061065960048036038101906106549190611ca5565b611255565b60405161066691906121be565b60405180910390f35b60606003805461067e906125c9565b80601f01602080910402602001604051908101604052809291908181526020018280546106aa906125c9565b80156106f75780601f106106cc576101008083540402835291602001916106f7565b820191906000526020600020905b8154815290600101906020018083116106da57829003601f168201915b5050505050905090565b60008061070c6113d5565b90506107198185856113dd565b600191505092915050565b61072c6115a8565b565b6000600254905090565b6107406113d5565b73ffffffffffffffffffffffffffffffffffffffff1661075e610e5c565b73ffffffffffffffffffffffffffffffffffffffff16146107b4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107ab9061231b565b60405180910390fd5b80600d8190555050565b6000806107c96113d5565b90506107d6858285611750565b6107e18585856117dc565b60019150509392505050565b6107f56113d5565b73ffffffffffffffffffffffffffffffffffffffff16610813610e5c565b73ffffffffffffffffffffffffffffffffffffffff1614610869576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108609061231b565b60405180910390fd5b60005b828290508110156108c4576108b183838381811061088d5761088c6126a2565b5b90506020020160208101906108a29190611ca5565b680ad78ebc5ac6200000611a5d565b80806108bc906125fb565b91505061086c565b505050565b60006012905090565b60007f0000000000000000000000000000000000000000000000000000000000000000905090565b6000806109056113d5565b9050610999818585600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546109949190612491565b6113dd565b600191505092915050565b60006109ae6113d5565b73ffffffffffffffffffffffffffffffffffffffff166109cc610e5c565b73ffffffffffffffffffffffffffffffffffffffff1614610a22576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a199061231b565b60405180910390fd5b47905090565b610a306113d5565b73ffffffffffffffffffffffffffffffffffffffff16610a4e610e5c565b73ffffffffffffffffffffffffffffffffffffffff1614610aa4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a9b9061231b565b60405180910390fd5b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1647604051610aea9061216c565b60006040518083038185875af1925050503d8060008114610b27576040519150601f19603f3d011682016040523d82523d6000602084013e610b2c565b606091505b5050905080610b67576040517fe0ec015700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50565b600a54600c5410610bb0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ba7906122fb565b60405180910390fd5b600b60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615610c3d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c34906122db565b60405180910390fd5b6001600b60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550600c6000815480929190610ca8906125fb565b9190505550610cc033680ad78ebc5ac6200000611a5d565b565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610d6657600d5481610d2391906124e7565b341015610d65576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d5c9061221b565b60405180910390fd5b5b610d8333670de0b6b3a764000083610d7e91906124e7565b611a5d565b50565b600c5481565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610ddc6113d5565b73ffffffffffffffffffffffffffffffffffffffff16610dfa610e5c565b73ffffffffffffffffffffffffffffffffffffffff1614610e50576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e479061231b565b60405180910390fd5b610e5a6000611ac7565b565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b606060048054610e95906125c9565b80601f0160208091040260200160405190810160405280929190818152602001828054610ec1906125c9565b8015610f0e5780601f10610ee357610100808354040283529160200191610f0e565b820191906000526020600020905b815481529060010190602001808311610ef157829003601f168201915b5050505050905090565b6060610f226113d5565b73ffffffffffffffffffffffffffffffffffffffff16610f40610e5c565b73ffffffffffffffffffffffffffffffffffffffff1614610f96576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f8d9061231b565b60405180910390fd5b610f9e611b8d565b905090565b600d5481565b600080610fb46113d5565b90506000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508381101561107a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611071906123bb565b60405180910390fd5b61108782868684036113dd565b60019250505092915050565b60008061109e6113d5565b90506110ab8185856117dc565b600191505092915050565b60096020528060005260406000206000915054906101000a900460ff1681565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6111656113d5565b73ffffffffffffffffffffffffffffffffffffffff16611183610e5c565b73ffffffffffffffffffffffffffffffffffffffff16146111d9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111d09061231b565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611249576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112409061223b565b60405180910390fd5b61125281611ac7565b50565b600b6020528060005260406000206000915054906101000a900460ff1681565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156112e5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112dc906123db565b60405180910390fd5b6112f160008383611c1b565b80600260008282546113039190612491565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546113589190612491565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516113bd91906123fb565b60405180910390a36113d160008383611c20565b5050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561144d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114449061237b565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156114bd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114b49061225b565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258360405161159b91906123fb565b60405180910390a3505050565b600960003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615611635576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161162c9061227b565b60405180910390fd5b6007546008541061167b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116729061239b565b60405180910390fd5b6008600081548092919061168e906125fb565b91905055506001600960003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506006339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b600061175c84846110d6565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146117d657818110156117c8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117bf9061229b565b60405180910390fd5b6117d584848484036113dd565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561184c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118439061233b565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156118bc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118b3906121fb565b60405180910390fd5b6118c7838383611c1b565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508181101561194d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611944906122bb565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546119e09190612491565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051611a4491906123fb565b60405180910390a3611a57848484611c20565b50505050565b611a656108d2565b81611a6e61072e565b611a789190612491565b1115611ab9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ab09061235b565b60405180910390fd5b611ac38282611275565b5050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b60606006805480602002602001604051908101604052809291908181526020018280548015611c1157602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311611bc7575b5050505050905090565b505050565b505050565b600081359050611c3481612b56565b92915050565b60008083601f840112611c5057611c4f6126d6565b5b8235905067ffffffffffffffff811115611c6d57611c6c6126d1565b5b602083019150836020820283011115611c8957611c886126db565b5b9250929050565b600081359050611c9f81612b6d565b92915050565b600060208284031215611cbb57611cba6126e5565b5b6000611cc984828501611c25565b91505092915050565b60008060408385031215611ce957611ce86126e5565b5b6000611cf785828601611c25565b9250506020611d0885828601611c25565b9150509250929050565b600080600060608486031215611d2b57611d2a6126e5565b5b6000611d3986828701611c25565b9350506020611d4a86828701611c25565b9250506040611d5b86828701611c90565b9150509250925092565b60008060408385031215611d7c57611d7b6126e5565b5b6000611d8a85828601611c25565b9250506020611d9b85828601611c90565b9150509250929050565b60008060208385031215611dbc57611dbb6126e5565b5b600083013567ffffffffffffffff811115611dda57611dd96126e0565b5b611de685828601611c3a565b92509250509250929050565b600060208284031215611e0857611e076126e5565b5b6000611e1684828501611c90565b91505092915050565b6000611e2b8383611e37565b60208301905092915050565b611e4081612541565b82525050565b611e4f81612541565b82525050565b6000611e6082612441565b611e6a8185612464565b9350611e7583612431565b8060005b83811015611ea6578151611e8d8882611e1f565b9750611e9883612457565b925050600181019050611e79565b5085935050505092915050565b611ebc81612553565b82525050565b6000611ecd8261244c565b611ed78185612480565b9350611ee7818560208601612596565b611ef0816126ea565b840191505092915050565b6000611f08602383612480565b9150611f13826126fb565b604082019050919050565b6000611f2b601083612480565b9150611f368261274a565b602082019050919050565b6000611f4e602683612480565b9150611f5982612773565b604082019050919050565b6000611f71602283612480565b9150611f7c826127c2565b604082019050919050565b6000611f94602983612480565b9150611f9f82612811565b604082019050919050565b6000611fb7601d83612480565b9150611fc282612860565b602082019050919050565b6000611fda602683612480565b9150611fe582612889565b604082019050919050565b6000611ffd602d83612480565b9150612008826128d8565b604082019050919050565b6000612020604983612480565b915061202b82612927565b606082019050919050565b6000612043602083612480565b915061204e8261299c565b602082019050919050565b6000612066602583612480565b9150612071826129c5565b604082019050919050565b6000612089601983612480565b915061209482612a14565b602082019050919050565b60006120ac600083612475565b91506120b782612a3d565b600082019050919050565b60006120cf602483612480565b91506120da82612a40565b604082019050919050565b60006120f2602f83612480565b91506120fd82612a8f565b604082019050919050565b6000612115602583612480565b915061212082612ade565b604082019050919050565b6000612138601f83612480565b915061214382612b2d565b602082019050919050565b6121578161257f565b82525050565b61216681612589565b82525050565b60006121778261209f565b9150819050919050565b60006020820190506121966000830184611e46565b92915050565b600060208201905081810360008301526121b68184611e55565b905092915050565b60006020820190506121d36000830184611eb3565b92915050565b600060208201905081810360008301526121f38184611ec2565b905092915050565b6000602082019050818103600083015261221481611efb565b9050919050565b6000602082019050818103600083015261223481611f1e565b9050919050565b6000602082019050818103600083015261225481611f41565b9050919050565b6000602082019050818103600083015261227481611f64565b9050919050565b6000602082019050818103600083015261229481611f87565b9050919050565b600060208201905081810360008301526122b481611faa565b9050919050565b600060208201905081810360008301526122d481611fcd565b9050919050565b600060208201905081810360008301526122f481611ff0565b9050919050565b6000602082019050818103600083015261231481612013565b9050919050565b6000602082019050818103600083015261233481612036565b9050919050565b6000602082019050818103600083015261235481612059565b9050919050565b600060208201905081810360008301526123748161207c565b9050919050565b60006020820190508181036000830152612394816120c2565b9050919050565b600060208201905081810360008301526123b4816120e5565b9050919050565b600060208201905081810360008301526123d481612108565b9050919050565b600060208201905081810360008301526123f48161212b565b9050919050565b6000602082019050612410600083018461214e565b92915050565b600060208201905061242b600083018461215d565b92915050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b600061249c8261257f565b91506124a78361257f565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156124dc576124db612644565b5b828201905092915050565b60006124f28261257f565b91506124fd8361257f565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561253657612535612644565b5b828202905092915050565b600061254c8261255f565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b838110156125b4578082015181840152602081019050612599565b838111156125c3576000848401525b50505050565b600060028204905060018216806125e157607f821691505b602082108114156125f5576125f4612673565b5b50919050565b60006126068261257f565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561263957612638612644565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b7f4e6f7420656e6f75676820657468657200000000000000000000000000000000600082015250565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b7f5468697320616464726573732068617320616c7265616479206265656e20776860008201527f6974656c69737465640000000000000000000000000000000000000000000000602082015250565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b7f596f75206861766520616c72656164792072656365697665642041594c20636f60008201527f696e73206f6e207369676e757000000000000000000000000000000000000000602082015250565b7f4d6178206e756d62657220686173206265656e2072656163682c20796f75206360008201527f616e206e6f206c6f6e67657220726563656976652041594c20636f696e73206f60208201527f6e207369676e2075700000000000000000000000000000000000000000000000604082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b7f45524332304361707065643a2063617020657863656564656400000000000000600082015250565b50565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f4d6178696d756d206e756d626572206f662077686974656c697374656420616460008201527f6472657373657320726561636865640000000000000000000000000000000000602082015250565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b612b5f81612541565b8114612b6a57600080fd5b50565b612b768161257f565b8114612b8157600080fd5b5056fea2646970667358221220a188d376e06dab67f1f8721a81c4d699c2e18cd2d6ad9e8501804c9c7bd3057b64736f6c63430008070033";

type AYLTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AYLTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AYLToken__factory extends ContractFactory {
  constructor(...args: AYLTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    cap: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<AYLToken> {
    return super.deploy(cap, overrides || {}) as Promise<AYLToken>;
  }
  override getDeployTransaction(
    cap: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(cap, overrides || {});
  }
  override attach(address: string): AYLToken {
    return super.attach(address) as AYLToken;
  }
  override connect(signer: Signer): AYLToken__factory {
    return super.connect(signer) as AYLToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AYLTokenInterface {
    return new utils.Interface(_abi) as AYLTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AYLToken {
    return new Contract(address, _abi, signerOrProvider) as AYLToken;
  }
}
