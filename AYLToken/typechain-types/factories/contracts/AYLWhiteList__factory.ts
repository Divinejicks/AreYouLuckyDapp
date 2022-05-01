/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  AYLWhiteList,
  AYLWhiteListInterface,
} from "../../contracts/AYLWhiteList";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "addToWhiteList",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getWhitelistedAddresses",
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
    inputs: [],
    name: "numberOfWhitelistedAddresses",
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
];

const _bytecode =
  "0x6080604052606460015534801561001557600080fd5b506100487f6b9c940c35f58b2772bbcda36015622ccccced6c36eb1001759da61ab900635960001b6100f260201b60201c565b61007a7f2a45ba27d8ad2dc4a31cdc52ab29ca478cb746cf7e6da704520289726825dcd060001b6100f260201b60201c565b6100ac7f4f338c2445dac9c505eeb500069994c924bc935b4e1eb76a75ad66ac25c2614360001b6100f260201b60201c565b33600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506100f5565b50565b610bfa806101046000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806355aee5ef146100515780636d0280271461006f578063c059cc731461008d578063c30796ab14610097575b600080fd5b6100596100c7565b6040516100669190610996565b60405180910390f35b6100776100cd565b60405161008491906108f9565b60405180910390f35b610095610377565b005b6100b160048036038101906100ac91906107c0565b610788565b6040516100be919061091b565b60405180910390f35b60025481565b60606100fb7fad428cc1347968b0e014f6e6e469ca05ac93ff63b048445551ec155997e57c2360001b6107a8565b6101277fecf128c5b357f04734075c3e957892f9b4cdf4b1806dfcd9af61a5a261c22a0f60001b6107a8565b6101537fdb3e83253a5ca7e80ad6b599771576bf7ddd08a31a5fbd3de5633a4035c9879060001b6107a8565b61017f7f46b8c14ca323bd7f85e02a2c357cef5af2fe482d3e38b4497198698302de997360001b6107a8565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461020f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161020690610956565b60405180910390fd5b61023b7f90fb5784d60ec3077a68cd01eb6f48d91a0ab57a96e5dd1109e852cd51d18a7d60001b6107a8565b6102677f51f353b3228b857d80421e6fc759bccd0535a25912884237f016712770e9e8f660001b6107a8565b6102937fca3aea2e9799c804fbbfa721ad8681f12bbfe219c43865ffbd6fea18590c766160001b6107a8565b6102bf7fb115b53f77cd7505132dd3eeda8b5f720d9cd671358a4961c57a777702ec81e660001b6107a8565b6102eb7f8ed688214acc4f3e988498dfc5bd9c18293d6b563d2980b949563812d5dbb78460001b6107a8565b600080548060200260200160405190810160405280929190818152602001828054801561036d57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610323575b5050505050905090565b6103a37f17b1a21cb5563de9ad8452c2623eb71a35182d4084e177872ace76df60595d3860001b6107a8565b6103cf7f706605a96bde6de96a89165c2a7c7630e0cf0ec3836d2a655496553eba5151e460001b6107a8565b6103fb7f67c497f0ac2078b6c1760c6000ac0c7f5cacdca86c2ebde9f387c433c130754060001b6107a8565b6104277f500be96bdf790e054bcad47d13aa9e9566ea421d7f5ac8aff182cb6e9a63fbbe60001b6107a8565b600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16156104b4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104ab90610936565b60405180910390fd5b6104e07f8984ce7ccd5a60b2ef926bc65609a8cdbe6b0c9f9ba5e912d7d0cf8a8d6b30a460001b6107a8565b61050c7f3e5737316f1867a2a82357d30b1a90750f4d14c07bd48c5df5462450e0cc1bf560001b6107a8565b6105387f8e470f7c0c44f83a8898ae330148fcf03b5a550fc278e83015212a7e4cd7b60c60001b6107a8565b6105647f304d53d5184e634c112410147b8601a6a8426f876f5733c9782aa6f00358174360001b6107a8565b60015460025411156105ab576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105a290610976565b60405180910390fd5b6105d77fd9141c4f6f51a83a9feb6fa8a04955f371a575c8c05e4bf8d3493f36a435343760001b6107a8565b6106037fe89c70d97b9fa2d32d48b656166e70af3b7e0408b0c581c0c97111869e8f70a660001b6107a8565b6002600081548092919061061690610a43565b91905055506106477fe8c91cc14ddbfbe244136a294583f837613c6616d44ceb42ec63fbcec39b315460001b6107a8565b6106737f0191c014462c21579b0efaab39985e623e95216c75a8e76a0509a0c21ce60ef960001b6107a8565b6001600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506106f77f75f86ebe51de96c3db59ab7b37affae752784a3d36645b74f9c3d22944a1000d60001b6107a8565b6107237f8b6d3e63c4184d728c0cffa579b84ce0a749257b55b555d8db85fb2f71589d7d60001b6107a8565b6000339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b60036020528060005260406000206000915054906101000a900460ff1681565b50565b6000813590506107ba81610bad565b92915050565b6000602082840312156107d6576107d5610abb565b5b60006107e4848285016107ab565b91505092915050565b60006107f98383610805565b60208301905092915050565b61080e816109fb565b82525050565b600061081f826109c1565b61082981856109d9565b9350610834836109b1565b8060005b8381101561086557815161084c88826107ed565b9750610857836109cc565b925050600181019050610838565b5085935050505092915050565b61087b81610a0d565b82525050565b600061088e6029836109ea565b915061089982610ac0565b604082019050919050565b60006108b16021836109ea565b91506108bc82610b0f565b604082019050919050565b60006108d4602f836109ea565b91506108df82610b5e565b604082019050919050565b6108f381610a39565b82525050565b600060208201905081810360008301526109138184610814565b905092915050565b60006020820190506109306000830184610872565b92915050565b6000602082019050818103600083015261094f81610881565b9050919050565b6000602082019050818103600083015261096f816108a4565b9050919050565b6000602082019050818103600083015261098f816108c7565b9050919050565b60006020820190506109ab60008301846108ea565b92915050565b6000819050602082019050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b6000610a0682610a19565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000610a4e82610a39565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610a8157610a80610a8c565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600080fd5b7f5468697320616464726573732068617320616c7265616479206265656e20776860008201527f6974656c69737465640000000000000000000000000000000000000000000000602082015250565b7f4f6e6c7920746865206f776e65722063616e20646f207468697320616374696f60008201527f6e00000000000000000000000000000000000000000000000000000000000000602082015250565b7f4d6178696d756d206e756d626572206f662077686974656c697374656420616460008201527f6472657373657320726561636865640000000000000000000000000000000000602082015250565b610bb6816109fb565b8114610bc157600080fd5b5056fea2646970667358221220df897580e174da35131950fb39433a1fba1ad9b0763c7f228e2966b0ff9bb3ad64736f6c63430008070033";

type AYLWhiteListConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AYLWhiteListConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AYLWhiteList__factory extends ContractFactory {
  constructor(...args: AYLWhiteListConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<AYLWhiteList> {
    return super.deploy(overrides || {}) as Promise<AYLWhiteList>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): AYLWhiteList {
    return super.attach(address) as AYLWhiteList;
  }
  override connect(signer: Signer): AYLWhiteList__factory {
    return super.connect(signer) as AYLWhiteList__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AYLWhiteListInterface {
    return new utils.Interface(_abi) as AYLWhiteListInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AYLWhiteList {
    return new Contract(address, _abi, signerOrProvider) as AYLWhiteList;
  }
}