import React, { useState } from "react";

// import react slick
import Slider from "react-slick";
import Image from "next/image";
import Stars from "../public/assets/Icon/stars.svg";
import ArrowBack from "../public/assets/Icon/eva_arrow-back-fill.svg";
import ArrowNext from "../public/assets/Icon/eva_arrow-next-fill.svg";

const MyGithub = ({
  listTestimoni = [
    {
      name: "AreYouLucky",
      image: "/assets/profilepic.jpeg",
      city: "Bamenda",
      country: "Cameroon",
      rating: "4.5",
      testimoni:
        "This is a gambling project where by users can start a game and specify the number of users and amout of AYL coins"
        + " to use. Users can join the game. Players can join AYLDAO, they can stake AYL as well as exchange it",
    },
    {
      name: "Token-Testing-Polygon-Uniswap",
      image: "/assets/profilepic.jpeg",
      city: "Bamenda",
      country: "Cameroon",
      rating: "3.0",
      testimoni:
        "Create an ERC20 token with a market cap, deployed it on the polygon mumbai testnet and tested it using hardhat."
        + " Create a LP on uniswap for the newly created coin.",
    },
    {
      name: "Multisig-smart-contract",
      image: "/assets/profilepic.jpeg",
      city: "Bamenda",
      country: "Cameroon",
      rating: "2.5",
      testimoni:
        "This is a multi signature smart contract aimed at increasing security, since attackers will need more than"
        + " one address to access the funds",
    },
    {
      name: "Web3Modal-White-Listing",
      image: "/assets/profilepic.jpeg",
      city: "Bamenda",
      country: "Cameroon",
      rating: "2.0",
      testimoni:
        "This is a small project to show the possibily to connect to more than one wallet depending on your choice",
    },
    {
      name: "Game-using-graphql-axios",
      image: "/assets/profilepic.jpeg",
      city: "Bamenda",
      country: "Cameroon",
      rating: "3.0",
      testimoni:
        "This is a random winner game that using graphQl and Axios",
    },
    {
      name: "IPFS-NFT-ERC721Enumerable",
      image: "/assets/profilepic.jpeg",
      city: "Bamenda",
      country: "Cameroon",
      rating: "3.0",
      testimoni:
        "An NFT project that uses polygon and IPFS. The NFTs are stored in IPFS. Here we used ERC721Enumberable",
    },
    {
      name: "Twitter-Smart-Contract",
      image: "/assets/profilepic.jpeg",
      city: "Bamenda",
      country: "Cameroon",
      rating: "2.0",
      testimoni:
        "A smart contract that functions as Twitter. Users can tweet, do private tweets and read tweets.",
    },
    {
      name: "DeFi-Web3.0",
      image: "/assets/profilepic.jpeg",
      city: "Bamenda",
      country: "Cameroon",
      rating: "3.0",
      testimoni:
        "A DeFi Project. For more on this, check out my repositor below.",
    },
    {
      name: "DAO-web3.0",
      image: "/assets/profilepic.jpeg",
      city: "Bamenda",
      country: "Cameroon",
      rating: "3.0",
      testimoni:
        "A DAO Project. For more on this, check out my repositor below.",
    },
  ],
}) => {
  const settings = {
    dots: true,
    customPaging: function (i) {
      return (
        <a className="">
          <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all "></span>
        </a>
      );
    },
    dotsClass: "slick-dots w-max absolute mt-20  ",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <>
      <Slider
        {...settings}
        arrows={false}
        ref={setSliderRef}
        className="flex items-stretch justify-items-stretch"
      >
        {listTestimoni.map((listTestimonis, index) => (
          <div className="px-3 flex items-stretch" key={index}>
            <div className="border-2 border-gray-500 hover:border-orange-500 transition-all rounded-lg p-8 flex flex-col">
              <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                <div className="flex order-2 xl:order-1">
                  <Image
                    src={listTestimonis.image}
                    height={50}
                    width={50}
                    alt="Icon People"
                  />
                  <div className="flex flex-col ml-5 text-left">
                    <p className="text-lg text-black-600 capitalize">
                      {listTestimonis.name}
                    </p>
                    <p className="text-sm text-black-500 capitalize">
                      {listTestimonis.city},{listTestimonis.country}
                    </p>
                  </div>
                </div>
                <div className="flex flex-none items-center ml-auto order-1 xl:order-2">
                  <p className="text-sm">{listTestimonis.rating}</p>
                  <span className="flex ml-4">
                    <Stars className="h-4 w-4" />
                  </span>
                </div>
              </div>
              <p className="mt-5 text-left">“{listTestimonis.testimoni}”.</p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex w-full items-center justify-end">
        <div className="flex flex-none justify-between w-auto mt-14">
          <div
            className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white border-orange-500 border hover:bg-orange-500 hover:text-white-500 transition-all text-orange-500 cursor-pointer"
            onClick={sliderRef?.slickPrev}
          >
            <ArrowBack className="h-6 w-6 " />
          </div>
          <div
            className="flex items-center justify-center h-14 w-14 rounded-full bg-white border-orange-500 border hover:bg-orange-500 hover:text-white-500 transition-all text-orange-500 cursor-pointer"
            onClick={sliderRef?.slickNext}
          >
            <ArrowNext className="h-6 w-6" />
          </div>
        </div>
      </div>
    </>
  );
};

export default MyGithub;
