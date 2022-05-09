import React from "react";
import Image from "next/image";

const About = ({
}) => {
  return (
    <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id="about">
      <div className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16 ">
        <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
            <strong>Mbuh Divine Cho</strong>.
          </h1>
          <p className="text-black-500 mt-4 mb-6">
            Is a web2 software developer with more than 5 years of experience, he recently transitioned into
            web3.0. He has worked on many web3.0 projects which you can find below. 
          </p>
          <button className="py-3 lg:py-4 px-12 lg:px-10 text-white-500 font-semibold rounded-lg bg-orange-500 hover:shadow-orange-md transition-all outline-none "
          onClick={() => window.location = 'mailto:mbuhdivinecho@gmail.com'}>Contact me</button>
        </div>
        <div className="flex w-full">
          <div className="h-full w-full">
            <Image
              src="/assets/profilepic.jpeg"
              alt="My Profile Picture"
              quality={100}
              width={100}
              height={100}
              layout="responsive"
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
