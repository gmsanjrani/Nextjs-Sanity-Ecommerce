import React, { Fragment } from "react";
import Image from "next/image";
import IMG from "../public/vercel.svg";
import { BiSearch } from "react-icons/bi";
import { GiShoppingCart } from "react-icons/gi";
import Link from "next/link";
import { Cart } from "./";
import { useStateContext } from "../context/StateContext";

function Navbar() {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <nav className=" flex justify-between  items-center px-3  lg:px-9 py-5">
      <Link href="/" passHref>
        <div className=" w-28 md:w-36 cursor-pointer">
          <Image src={IMG} alt="No Image" />
        </div>
      </Link>

      <div className=" flex place-items-center max-w-sm min-w-auto w-2/5 h-10 bg-my-gray-lit rounded-full ">
        <label htmlFor="search"></label>
        <input
          className=" w-full  h-full bg-my-gray-lit rounded-l-full text-black indent-1 border-0 outline-none text-[0.8rem] md:indent-4 md:text-sm"
          type="search"
          name="search"
          id="search"
          placeholder="Search Products"
        />
        <BiSearch className=" text-2xl cursor-pointer   rounded-2xl mr-2" />
      </div>

      <button
        type="button"
        onClick={() => setShowCart(!showCart)}
        className=" relative self-center"
      >
        <GiShoppingCart className="text-2xl cursor-pointer " />
        <span className=" animate-bounce cursor-pointer text-my-white absolute top-[-8px] right-[-7px]  bottom-4 bg-my-red rounded-full text-center w-[1.1rem] h-[1.3rem] self-center">
          {totalQuantities}
        </span>
      </button>
      {showCart && <Cart />}
    </nav>
  );
}

export default Navbar;
