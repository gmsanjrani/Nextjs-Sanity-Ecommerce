import React from "react";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
function Footer() {
  return (
    <div className=" flex flex-col gap-2 mb-8 items-center">
      <p className=" text-my-blue font-semibold ">2022 JSM Headphones All rights reserverd</p>
      <p className=" self-center flex gap-2">
        <AiFillInstagram  className=" text-3xl text-my-blue"/>
        <AiOutlineTwitter className=" text-3xl text-my-blue" />
      </p>
    </div>
  );
}

export default Footer;
