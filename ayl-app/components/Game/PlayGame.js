import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3Modal from "web3modal";
import Authereum from "authereum";
import { ethers } from 'ethers';
import { useEffect, useRef, useState } from "react";
import {AYLToken_ABI, AYLToken_Address, AYLRandomWinner_ABI, AYLRandomWinner_Address} from "../../constants/index";

const PlayGame = ({}) => {
    const [walletConnected, setWalletConnected] = useState(false);
    const [loading, setLoading] = useState(false)
    const [web3Modal, setWeb3Modal] = useState(null);
    const [address, setAddress] = useState("")
    const [hyphenatedAddress, setHyphenatedAddress] = useState("")
    const [addressBalance, setAddressBalance] = useState("");
    const [signUpNumber, setSignUpNumber] = useState(0);

    useEffect(() => {
        const providerOptions = { 
            walletconnect: {
              package: WalletConnectProvider,
              options: {
                alchemyId: "WN9CtkTpyLOReqiGmAhXJTtCU_Osm-WT"
              }
            },
            coinbasewallet: {
              package: CoinbaseWalletSDK,
              options: {
                appName: "Are You Lucky",
                alchemyId: "WN9CtkTpyLOReqiGmAhXJTtCU_Osm-WT"
              }
            },
            authereum: {
              package: Authereum // required
            }
          }
      
          const newWeb3Modal = new Web3Modal({
            network: "rinkeby",
            cacheProvider: false,
            disableInjectedProvider: false,
            providerOptions
          });
      
          setWeb3Modal(newWeb3Modal);
        }, []);

    const getProviderOrSigner = async (IsSigner = false) => {
        const web3Instance = await web3Modal.connect();
        addListeners(web3Instance);
        const provider = new ethers.providers.Web3Provider(web3Instance);
    
        const { chainId } = await provider.getNetwork();
        if(chainId !== 4){
          window.alert("Change to Rinkeby network");
          throw new Error("Change to Rinkeby network")
        }
        
        const _address = await provider.getSigner().getAddress();
        setAddress(_address);
        const _addressSub1 = _address.substring(0, 5);
        const _addressSub2 = _address.substring(38);
        setHyphenatedAddress(_addressSub1 + "...." +_addressSub2);
    
        if(IsSigner){
          const signer = await provider.getSigner();
          return signer;
        }
        return provider;
    }

    const getAYLTokenProvider = async (provider) => {
      const aylToken = new ethers.Contract(
        AYLToken_Address,
        AYLToken_ABI,
        provider
      )

      return aylToken;
    }

    const getAYLTokenSigner = async () => {
      const signer = await getProviderOrSigner(true);
      const aylToken = new ethers.Contract(
        AYLToken_Address,
        AYLToken_ABI,
        signer
      )

      return aylToken;
    }

    const addListeners = async (web3ModalProvider) => {
        web3ModalProvider.on("accountsChanged", (accounts) => {
          window.location.reload()
        });
    
        // Subscribe to chainId change
        web3ModalProvider.on("chainChanged", (chainId) => {
          if(chainId !== "0x4"){
            alert("Connect to rinkeby")
            return
          }
        });
      }

    const connectWallet = async () => {
        try{
            const provider = await getProviderOrSigner();
            setWalletConnected(true);
            getAddressBalance(provider)
            getSignNumber(provider)
        }catch(err) {
            console.log(err)
        }
    }

    const getAddressBalance = async (provider) => {
      const aylToken = await getAYLTokenProvider(provider);
      const balance = await aylToken.balanceOf(await provider.getSigner().getAddress());
      setAddressBalance(ethers.utils.formatEther(balance));
    }

    const getSignNumber = async (provider) => {
      const aylToken = await getAYLTokenProvider(provider);
      const numbSigner = await aylToken.numberOfSignupUsers();
      setSignUpNumber(ethers.utils.formatEther(numbSigner)*10**18);
    }

    const renderButton = () => {
        if(!walletConnected) {
            return (
                <>
                     <button className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-orange-500 
                    text-orange-500 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-orange-500 
                    hover:text-white-500 transition-all hover:shadow-orange"
                    onClick={connectWallet}>
                            Connect Wallet
                    </button>
                </>
            )
        }
        else {
            return (
                <>
                    <button className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-orange-500 
                    text-orange-500 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize ">
                            {hyphenatedAddress} With {addressBalance} AYL
                    </button>
                </>
            )
        }
    }

    const onsignUp = async () => {
      const aylToken = await getAYLTokenSigner();
      await aylToken.receiveCoinsOnSignup();
    }

    return(
        <div className="bg-gradient-to-b from-white-300 to-white-500 w-full mt-20 py-7" id="playgame">
            <div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
                <div>
                   {renderButton()}
                </div>
                <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-1 gap-4 lg:gap-12 py-4 lg:py-4 px-6 sm:px-0 lg:px-6">
                    <div className="flex flex-col justify-center items-center">
                        <p>The <strong>first 500 users</strong> to sign up gets <strong>200 AYL Coins</strong>, Sign up now</p>
                    </div>
                    <button className="mt-3 py-3 lg:py-4 px-12 lg:px-8 text-white-500 font-semibold rounded-lg bg-orange-500 
              hover:shadow-orange-md transition-all outline-none " onClick={onsignUp}>Sign Up {signUpNumber}/500</button>
                </div>
            </div>
            <div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
               <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-1 gap-4 lg:gap-12 py-4 lg:py-4 px-6 sm:px-0 lg:px-6">
                    <div className="flex flex-col justify-center items-center">
                        <p>
                          Take a look at the open games and see which one you will like to join. If you don't see any of your choice, 
                          then start a new game below.
                        </p>
                        <div className="my-2">
                          <button className="font-medium tracking-wide py-2 mt-2 mx-5 px-5 sm:px-8 border border-orange-500 
                            text-orange-500 bg-white-500 outline-none rounded-l-full rounded-r-full 
                            capitalize hover:bg-orange-500 hover:text-white-500 transition-all hover:shadow-orange"
                            >See opened games
                          </button>
                          <button className="font-medium tracking-wide py-2 mt-2 mx-5 px-5 sm:px-8 border border-orange-500 
                            text-orange-500 bg-white-500 outline-none rounded-l-full rounded-r-full 
                            capitalize hover:bg-orange-500 hover:text-white-500 transition-all hover:shadow-orange"
                            >See previous winners
                          </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
              <p><strong>Are You Lucky....</strong> If yes, then start a new game or join an existing one.</p>
               <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-1 gap-4 lg:gap-12 py-4 lg:py-4 px-6 sm:px-0 lg:px-6">
                    <div className="flex flex-col justify-center items-center">
                        <p><strong>Start a new game</strong></p>
                        <input className="shadow appearance-none border rounded py-2 mt-1 px-3 text-gray-700 leading-tight 
                        focus:outline-none focus:shadow-outline" type="number" placeholder="Number of players" />
                        <input className="shadow appearance-none border rounded py-2 mt-2 px-3 text-gray-700 leading-tight 
                        focus:outline-none focus:shadow-outline" type="number" placeholder="Entry fee" />
                        <button className="font-medium tracking-wide py-0 px-2 mt-2 sm:px-8 border border-orange-500 
                          text-orange-500 bg-white-500 outline-none rounded-l-full rounded-r-full 
                          capitalize hover:bg-orange-500 hover:text-white-500 transition-all hover:shadow-orange"
                      >Start a New Game</button>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <p><strong>Join an existing game</strong></p>
                        <input className="shadow appearance-none border rounded py-2 mt-1 px-3 text-gray-700 leading-tight 
                        focus:outline-none focus:shadow-outline" type="number" placeholder="Game Id" />
                        <input className="shadow appearance-none border rounded py-2 mt-2 px-3 text-gray-700 leading-tight 
                        focus:outline-none focus:shadow-outline" type="number" placeholder="Entry fee" />
                        <button className="font-medium tracking-wide py-0 px-2 mt-2 sm:px-8 border border-orange-500 
                          text-orange-500 bg-white-500 outline-none rounded-l-full rounded-r-full 
                          capitalize hover:bg-orange-500 hover:text-white-500 transition-all hover:shadow-orange"
                      >Join Game</button>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <p><strong>Winner takes 90%</strong></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayGame;