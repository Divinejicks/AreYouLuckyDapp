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
    const [numberOfPlayers, setNumberOfPlayers] = useState(0);
    const [entryFee, setEntryFee] = useState(0);
    const [gameId, setGameId] = useState(-1);
    const [numberOfCoinsToBuy, setNumberOfCoinsToBuy] = useState(0);
    const [showModal, setShowModal] = useState(false);

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
            cacheProvider: true,
            disableInjectedProvider: false,
            providerOptions
          });
      
          setWeb3Modal(newWeb3Modal);
        }, []);
    
    //if cachedProvider is set to true, this function will be usefull
    useEffect(() => {
      // connect automatically and without a popup if user is already connected
      if(web3Modal && web3Modal.cachedProvider){
        connectWallet()
      }
    }, [web3Modal])

    const clearCachedProvider = () => {
      if(web3Modal && web3Modal.cachedProvider){
        web3Modal.clearCachedProvider()
      }
    }

    //a generic method that connects the wallet as a provider or a signer
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

    //This connects to the ayltoken contract as a provider
    const getAYLTokenProvider = async () => {
      const provider = await getProviderOrSigner();
      const aylToken = new ethers.Contract(
        AYLToken_Address,
        AYLToken_ABI,
        provider
      )

      return aylToken;
    }

    //this connects to the ayltoken contract as a signer
    const getAYLTokenSigner = async () => {
      const signer = await getProviderOrSigner(true);
      const aylToken = new ethers.Contract(
        AYLToken_Address,
        AYLToken_ABI,
        signer
      )

      return aylToken;
    }

    //this connects the aylrandonwinner contract as a provider
    const getAYLRandomWinnerProvider = async () => {
      const provider = await getProviderOrSigner();
      const aylRandomWinner = new ethers.Contract(
        AYLRandomWinner_Address,
        AYLRandomWinner_ABI,
        provider
      )

      return aylRandomWinner;
    }

    //this connects to the aylrandomwinner contract as a signer
    const getAYLRandomWinnerSigner = async () => {
      const signer = await getProviderOrSigner(true);
      const aylRandomWinner = new ethers.Contract(
        AYLRandomWinner_Address,
        AYLRandomWinner_ABI,
        signer
      )

      return aylRandomWinner;
    }

    //Listerners that listens to changes on the wallet
    const addListeners = async (web3ModalProvider) => {
        web3ModalProvider.on("accountsChanged", (accounts) => {
          window.location.reload()
          clearCachedProvider()
        });
    
        // Subscribe to chainId change
        web3ModalProvider.on("chainChanged", (chainId) => {
          if(chainId !== "0x4"){
            alert("Connect to rinkeby")
            return
          }
        });
      }

    //Connect the wallets and show its address and balance
    const connectWallet = async () => {
        try{
            await getProviderOrSigner();
            setWalletConnected(true);
            getAddressBalance()
            //this gets the number of signed up users
            getSignNumber()
        }catch(err) {
            console.log(err)
        }
    }

    const getAddressBalance = async () => {
      const aylTokenProvider = await getAYLTokenProvider();
      const balance = await aylTokenProvider.balanceOf(await aylTokenProvider.provider.getSigner().getAddress());
      setAddressBalance(ethers.utils.formatEther(balance));
    }

    const getSignNumber = async () => {
      const aylTokenProvider = await getAYLTokenProvider();
      const numbSigner = await aylTokenProvider.numberOfSignupUsers();
      setSignUpNumber(ethers.utils.formatEther(numbSigner)*10**18);
    }
  
    //This calls the receiveCoinsOnSignup function in the aylToken contract
    const onsignUp = async () => {
      const aylTokenSigner = await getAYLTokenSigner();
      await aylTokenSigner.receiveCoinsOnSignup();
    }

    const approveAYLTokens = async () => {
      const aylTokenSigner = await getAYLTokenSigner();
      const aylRandomWinnerSigner = await getAYLRandomWinnerSigner();
      await aylTokenSigner.approve(aylRandomWinnerSigner.address, ethers.utils.parseEther(entryFee));
    }

    const startGame = async () => {
      const aylRandomWinnerSigner = await getAYLRandomWinnerSigner();
      await aylRandomWinnerSigner.startGame(numberOfPlayers, entryFee);
    }

    const joinGame = async () => {
      const aylRandomWinnerSigner = await getAYLRandomWinnerSigner();
      await aylRandomWinnerSigner.joinGame(gameId, entryFee);
    }

    const buyAYLCoins = async () => {
      const aylTokenSigner = await getAYLTokenSigner();
      const aylTokenProvider = await getAYLTokenProvider();
      const price = await aylTokenProvider.price();
      const _price = numberOfCoinsToBuy*ethers.utils.formatEther(price);
      await aylTokenSigner.buyAYLCoins(numberOfCoinsToBuy, 
        {value: ethers.utils.parseEther(_price.toString())});
      setShowModal(false);
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

    const renderModal = () => {
      return (
        <>
          {showModal ? (
            <>
              <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none 
                focus:outline-none bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
              >
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                      <h3 className="text-3xl font-semibold">
                        Buy AYL Coins
                      </h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none 
                        font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                      >
                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                          x
                        </span>
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                      <h5>1 AYL = 0.00005 ETH</h5>
                    <input className="shadow appearance-none border rounded py-2 mt-2 px-3 text-gray-700 leading-tight 
                        focus:outline-none focus:shadow-outline" type="number" placeholder="Amount of ayl coins to buy" 
                        onChange={event => setNumberOfCoinsToBuy(event.target.value)} />
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none 
                        focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </button>
                      <button
                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 
                        rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={buyAYLCoins}
                      >
                        Buy
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : null}
        </>
      );
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
                  <button className="font-medium tracking-wide py-2 mt-2 mx-5 px-5 sm:px-8 border border-orange-500 
                    text-orange-500 bg-white-500 outline-none rounded-l-full rounded-r-full 
                    capitalize hover:bg-orange-500 hover:text-white-500 transition-all hover:shadow-orange" 
                    onClick={() => setShowModal(true)}>Buy AYL Coins</button>
                    <div className="opacity-1 fixed z-5 bg-black">
                      {renderModal()}
                    </div>
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
              <p>
                  Before to successfully start a new game or join a game you <strong>MUST APPROVE</strong> the contract
                  to spend your AYL Coins you want to play with.
              </p>
             <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-1 gap-4 lg:gap-12 py-4 lg:py-4 px-6 sm:px-0 lg:px-6">
                  <div className="flex flex-col justify-center items-center">
                  <input className="shadow appearance-none border rounded py-2 mt-2 px-3 text-gray-700 leading-tight 
                        focus:outline-none focus:shadow-outline" type="number" placeholder="Approve entry fee" 
                        onChange={event => setEntryFee(event.target.value)} />
                        <button className="font-medium tracking-wide py-2 mt-2 mx-5 px-5 sm:px-8 border border-orange-500 
                          text-orange-500 bg-white-500 outline-none rounded-l-full rounded-r-full 
                          capitalize hover:bg-orange-500 hover:text-white-500 transition-all hover:shadow-orange"
                          onClick={approveAYLTokens}>Approve
                        </button>
                  </div>
              </div>
              <p><strong>Are You Lucky....</strong> If yes, then start a new game or join an existing one.</p>
               <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-1 gap-4 lg:gap-12 py-4 lg:py-4 px-6 sm:px-0 lg:px-6">
                    <div className="flex flex-col justify-center items-center">
                        <p><strong>Start a new game</strong></p>
                        <input className="shadow appearance-none border rounded py-2 mt-1 px-3 text-gray-700 leading-tight 
                        focus:outline-none focus:shadow-outline" type="number" placeholder="Number of players"
                          onChange={event => setNumberOfPlayers(event.target.value)} />
                        <input className="shadow appearance-none border rounded py-2 mt-2 px-3 text-gray-700 leading-tight 
                        focus:outline-none focus:shadow-outline" type="number" placeholder="Entry fee" 
                         onChange={event => setEntryFee(event.target.value)} />
                        <button className="font-medium tracking-wide py-0 px-2 mt-2 sm:px-8 border border-orange-500 
                          text-orange-500 bg-white-500 outline-none rounded-l-full rounded-r-full 
                          capitalize hover:bg-orange-500 hover:text-white-500 transition-all hover:shadow-orange"
                      onClick={startGame}>Start a New Game</button>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <p><strong>Join an existing game</strong></p>
                        <input className="shadow appearance-none border rounded py-2 mt-1 px-3 text-gray-700 leading-tight 
                        focus:outline-none focus:shadow-outline" type="number" placeholder="Game Id"
                        onChange={event => setGameId(event.target.value)} />
                        <input className="shadow appearance-none border rounded py-2 mt-2 px-3 text-gray-700 leading-tight 
                        focus:outline-none focus:shadow-outline" type="number" placeholder="Entry fee"
                        onChange={event => setEntryFee(event.target.value)} />
                        <button className="font-medium tracking-wide py-0 px-2 mt-2 sm:px-8 border border-orange-500 
                          text-orange-500 bg-white-500 outline-none rounded-l-full rounded-r-full 
                          capitalize hover:bg-orange-500 hover:text-white-500 transition-all hover:shadow-orange"
                      onClick={joinGame}>Join Game</button>
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