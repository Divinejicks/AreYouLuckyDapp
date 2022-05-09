import React from "react";
import Facebook from "../../public/assets/Icon/facebook.svg";
import Twitter from "../../public/assets/Icon/twitter.svg";
const Footer = () => {
  return (
    <div className="bg-white-300 pt-44 pb-24">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          {/* <LogoVPN className="h-8 w-auto mb-6" /> */}
          <span className="h-8 w-auto mb-6"><strong>divinejicks</strong></span>
          <p className="mb-4">
            You can contact <strong className="font-medium">Mbuh Divine Cho</strong> on the following
            social outlets
          </p>
          <div className="flex w-full mt-2 mb-8 -mx-2">
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <button>
              <Facebook className="h-6 w-6" />
              </button>
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <button>
              <Twitter className="h-6 w-6" />
              </button>
            </div>
            {/* <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Instagram className="h-6 w-6" />
            </div> */}
          </div>
          <p className="text-gray-400">©2022divinejicks</p>
        </div>
        <div className=" row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Web3.0</p>
          <ul className="text-black-500 ">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Solidity{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Openzeppelin{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Ethersjs{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Hardhat{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Testing and Coverage{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Security with slither{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Hashlips{" "}
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Web2</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              C#{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              angular{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Reactjs{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Nextjs{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Node ExpresJs{" "}
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Database</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              SQL Server{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              PostgreSql{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              MongoDB{" "}
            </li>
          </ul>
        </div>
      </div> 
    </div>
  );
};

export default Footer;
