import Image from "next/image";
import React from "react";
import {useRouter} from "next/router";

const MyProject = () => {
  const router = useRouter();
  const showPlayGamePage = () => {
    router.push('/game')
  }

  return (
    <div
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="myproject"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 py-8 my-12">
        <div className="flex w-full justify-end">
          <div className="h-full w-full p-4">
            <Image
              src="/assets/aylgame.png"
              alt="AreYouLuck"
              layout="responsive"
              quality={100}
              height={400}
              width={508}
            />
          </div>
        </div>
        <div className="flex flex-col items-end justify-center ml-auto w-full lg:w-9/12">
          <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
            All about Are You Lucky
          </h3>
          <p className="my-2 text-black-500">
            This is a gambling game that gives players the ability to start a game and specify the number of players
            and the amount. This game has a AYL Token that is used to play with. Others are allowed to join the game and
            when the maximum number is reached, a random winner is chosen. Below are the features of the game.
          </p>
          <ul className="text-black-500 self-start list-inside ml-8">
            <li className="relative circle-check custom-list">
              A number of active users are whitelisted.
            </li>
            <li className="relative circle-check custom-list">
              Air drop of the AYL Coins.
            </li>
            <li className="relative circle-check custom-list">
              A number of early sign up users get AYL Coins on sign up.
            </li>
            <li className="relative circle-check custom-list">
              Initial Coin Offering of the ATL coins.
            </li>
            <li className="relative circle-check custom-list">
              A AreYouLuckyDAO. Holders can alter the ICO price.
            </li>
            <li className="relative circle-check custom-list">
              A DEX section to swap AYL coins for eth (rinkeby testnet)
            </li>
            <li className="relative circle-check custom-list">
              A staking section for the AYL coins.
            </li>
          </ul>
          <button className="mt-3 py-3 lg:py-4 px-12 lg:px-8 text-white-500 font-semibold rounded-lg bg-orange-500 
          hover:shadow-orange-md transition-all outline-none "
           onClick={showPlayGamePage}>Play game</button>
        </div>
      </div>
    </div>
  );
};

export default MyProject;
