import React from "react";
import { urlFor } from "../lib/sanity";
import Link from "next/link";

const Banner = ({ bannerData }) => {
  const {
    buttonText,
    desc,
    discount,
    image,
    largeText1,
    largeText2,
    midText,
    product,
    saleTime,
    smallText,
  } = bannerData;
  // console.log(urlFor(image));

  return (
    <div
      className=" w-full h-[470px] sm:h-[550px] bg-my-gray-lit relative rounded-2xl py-16 px-8 sm:py-24 sm:px-14 lg:h-[460px]">
      <div>
        <p className=" text-xl ">{smallText}</p>
        <h3 className=" text-4xl font-semibold ml-3 mt-3 lg:text-5xl">{midText}</h3>
        <h1 className=" text-my-white text-6xl mt-3 ml-0 font-semibold lg:text-9xl">{largeText1}</h1>
        <img
        className=" absolute top-[10%] right-[-10%] w-[70%]   md:top-[-2%] md:w-[55%] md:h-[80%] md:right-0   lg:w-auto  lg:h-[100%] lg:right-[20%] "
          src={urlFor(image)} alt="no" />

        <div>
          
            <button
            className=" mt-20 px-5 py-2 bg-my-red text-my-white font-medium text-lg rounded-2xl lg:mt-8"
            >{buttonText}</button>
          
          <div className=" absolute bottom-[10%] right-[8%] text-right leading-8">
            <h5 className=" text-my-blue font-semibold">Description</h5>
            <p className=" text-my-gray">{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
