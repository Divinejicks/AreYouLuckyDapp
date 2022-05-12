import React from "react";
import Image from "next/image";
import MyGithub from "./MyGithub";

const ProjectsIHaveWorkedOn = () => {
  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="workedon"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed">
            Projects I have worked on
          </h3>
          <p className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center">
            These are some of the projects I have worked on / I am working on, some are hakathons. On most of them 
            I worked /I am working as a backend developer. Also, integrated the wallet connect functionalities on the front end and
            assisting on the front end when need be,.
          </p>
          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
            <div className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20">
              <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                <Image
                  src="/assets/Free.png"
                  width={145}
                  height={165}
                  alt="Peace Keepers"
                />
              </div>
              <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                Chainlink 2022 Hakathon (Peace Keepers)
              </p>
              <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                <li className="relative check custom-list my-2">
                  Solidity developer
                </li>
                <li className="relative check custom-list my-2">
                  Wrote testing using hardhat 
                </li>
                <li className="relative check custom-list my-2">
                  Integrated moralis hooks in the front end (web3uikit)
                </li>
                <li className="relative check custom-list my-2">
                  Assisted on the front end.
                </li>
              </ul>
              <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                <p className="text-2xl text-black-600 text-center mb-4 ">
                  Check it out
                </p>
                <button className="font-medium tracking-wide py-2 sm:px-18 border border-orange-500 text-orange-500 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-orange-500 hover:text-white-500 transition-all hover:shadow-orange "
                      >Peace Keepers</button>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20">
              <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                <Image
                  src="/assets/GobFather.gif"
                  width={300}
                  height={200}
                  alt="Gob father"
                />
              </div>
              <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                Game-Fi (GobFather)
              </p>
              <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                <li className="relative check custom-list my-2">
                  Solidity developer (a team of two)
                </li>
                <li className="relative check custom-list my-2">
                  Handled the testing and security 
                </li>
                <li className="relative check custom-list my-2">
                  Dynamic NFTs where players can upgrade their NFTs attributes
                </li>
                <li className="relative check custom-list my-2">
                  Assisted in promoting the game on Twitter and Discord
                </li>
              </ul>
              <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                <p className="text-2xl text-black-600 text-center mb-4 ">
                  Check it out
                </p>
                <button className="font-medium tracking-wide py-2 sm:px-18 border border-orange-500 text-orange-500 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-orange-500 hover:text-white-500 transition-all hover:shadow-orange "
                      >GobFather</button>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20">
              <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                <Image
                  src="/assets/Premium.png"
                  width={145}
                  height={165}
                  alt="sportless"
                />
              </div>
              <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                Spotless NFT
              </p>
              <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                <li className="relative check custom-list my-2">
                  Solidity developer ( a team of two)
                </li>
                <li className="relative check custom-list my-2">
                  Generated the NFTs with hashlips
                </li>
                <li className="relative check custom-list my-2">
                  Testing and security
                </li>
                <li className="relative check custom-list my-2">
                Assisted in promoting the NFT on Twitter and Discord
                </li>
              </ul>
              <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                <p className="text-2xl text-black-600 text-center mb-4 ">
                  Check it out
                </p>

                <button className="font-medium tracking-wide py-2 sm:px-18 border border-orange-500 text-orange-500 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-orange-500 hover:text-white-500 transition-all hover:shadow-orange "
                      >Spotless</button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full my-16" id="gitproject">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto">
            My Github Projects.
          </h3>
          <p className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12">
            Below, you will find a link to my github repository. You will have access to all my personal projects
            including my portfolio (AreYouLucky) game. To get access to the code of my hakathon projects, please get to me.
            For the other Projects I worked on, I can link you with the owners of the projects to testify my claim.
          </p>
          <div className="w-full flex flex-col py-12">
            <MyGithub />
          </div>
          <div className="relative w-full mt-16">
            <div className="absolute rounded-xl  py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500">
              <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
                <h5 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                  Follow the link <br /> To get to my github
                </h5>
                <p>contact me through mail at <strong>mbuhdivinecho@gmail.com</strong></p>
              </div>
              <button className="py-3 lg:py-4 px-12 lg:px-10 text-white-500 font-semibold rounded-lg bg-orange-500 hover:shadow-orange-md transition-all outline-none "
                  onClick={() => window.location = 'https://github.com/Divinejicks?tab=repositories'}>My Github</button>
            </div>
            <div
              className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
              style={{ filter: "blur(114px)" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsIHaveWorkedOn;
