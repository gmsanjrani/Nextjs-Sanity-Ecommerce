import React from "react";

import Link from "next/link";
import { urlFor } from "../lib/sanity";

function FooterBanner({ footerData }) {
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
    } = footerData;
    
    // console.log(desc);
  return (
    <div className=" bg-my-red h-[600px] md:h-[580px] my-12 rounded-xl px-10 py-24 relative lg:h-[400px] lg:px-16">
      <div className=" lg:flex lg:justify-between">
        <div>
          <p className=" text-my-white ">{discount}</p>
          <h3 className=" text-my-white text-6xl font-bold mt-4 lg:text-7xl">{largeText1}</h3>
          <h2 className="text-my-white text-6xl font-bold lg:text-7xl">{largeText2}</h2>
          <p className=" text-my-white mt-2 ml-4">{saleTime}</p>
        </div>
        <div>
          <p className=" mt-7 text-my-white ">{smallText}</p>
          <h3 className=" my-4 text-5xl font-bold text-my-white lg:text-6xl">{midText}</h3>
          <p className=" text-my-white ">{desc}</p>
         
            <button className=" mt-8 px-5 py-2 bg-my-white text-my-red font-medium text-lg rounded-2xl">
              {buttonText}
            </button>
         
              </div>
              
              <img
              className=" absolute top-[-1%] right-[-10%] w-[70%] lg:w-[40%] lg:top-[-20%] lg:right-[30%]"
                  src={urlFor(image)} alt="nothing" />
      </div>
    </div>
  );
}

export default FooterBanner;
