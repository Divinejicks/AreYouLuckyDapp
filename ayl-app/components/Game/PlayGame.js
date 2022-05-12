import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3Modal from "web3modal";
import Authereum from "authereum";
import { ethers } from 'ethers';
import { useEffect, useRef, useState } from "react";

const PlayGame = ({}) => {
    const [walletConnected, setWalletConnected] = useState(false);
    const [loading, setLoading] = useState(false)
    const [web3Modal, setWeb3Modal] = useState(null);
    const [address, setAddress] = useState("")

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
        const _addressSub1 = _address.substring(0, 5);
        const _addressSub2 = _address.substring(38);
        setAddress(_addressSub1 + "...." +_addressSub2);
    
        if(IsSigner){
          const signer = await provider.getSigner();
          return signer;
        }
        return provider;
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
            await getProviderOrSigner();
            setWalletConnected(true);
        }catch(err) {
            console.log(err)
        }
    }

    const disconnectWallet = async () => {
        try{
            await getProviderOrSigner();
            setWalletConnected(false);
        }catch(err) {
            console.log(err)
        }
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
                    text-orange-500 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-orange-500 
                    hover:text-white-500 transition-all hover:shadow-orange"
                    onClick={disconnectWallet}>
                            Wallet Connected on {address}
                    </button>
                </>
            )
        }
    }

    return(
        <div className="bg-gradient-to-b from-white-300 to-white-500 w-full mt-20 py-7">
            <div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
                <div>
                   {renderButton()}
                </div>
                <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-4 lg:py-4 px-6 sm:px-0 lg:px-6">
                    <div className="flex flex-col justify-center items-center">
                        <h1>Add UI/UX for the game here</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayGame;