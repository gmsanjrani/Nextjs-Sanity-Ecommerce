import React, { useRef } from 'react';
import Link from 'next/link';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import toast from 'react-hot-toast';

import { useStateContext } from '../context/StateContext';
import { urlFor } from '../lib/sanity'
// import getStripe from '../lib/getStripe';

const Cart = () => {
  const cartRef = useRef();
  const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuanitity, onRemove } = useStateContext();

  // const handleCheckout = async () => {
  //   const stripe = await getStripe();

  //   const response = await fetch('/api/stripe', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(cartItems),
  //   });

  //   if(response.statusCode === 500) return;
    
  //   const data = await response.json();

  //   toast.loading('Redirecting...');

  //   stripe.redirectToCheckout({ sessionId: data.id });
  // }

  return (
    <div className=" fixed right-0 top-0 left-[25%] bg-my-red bg-opacity-95 h-full z-50  px-4 pt-10 lg:left-[50%]" ref={cartRef}>
      <div className=" h-full">
        <button
        type="button"
        className=" flex items-center gap-3"
        onClick={() => setShowCart(false)}>
          <AiOutlineLeft className=' font-bold text-lg text-my-white'/>
          <span className=" font-semibold text-lg">Your Cart</span>
          <span className=" text-my-gray-lit font-semibold text-lg">({totalQuantities} items)</span>
        </button>

        {cartItems.length < 1 && (
          <div className=" grid justify-center my-12">
            <AiOutlineShopping size={150} className=' w-full ' />
            <h3 className=' text-md md:text-xl font-semibold text-my-gray-lit'>Your shopping bag is empty</h3>
            <Link href="/" passHref>
              <button
                type="button"
                onClick={() => setShowCart(false)}
                className=" mt-12 bg-my-gray-lit rounded-2xl py-3 text-md md:text-xl font-medium text-black"
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        )}

        <div className=" mt-10 flex flex-col gap-7 sm:gap-8">
          {cartItems.length >= 1 && cartItems.map((item) => (
            <div className="flex gap-2 sm:gap-6 px-2" key={item._id}>
              <img src={urlFor(item?.image[0])} className=" w-20 h-20 sm:w-28 sm:h-28 bg-my-gray-lit rounded-md sm:rounded-xl" alt='noo'/>
              <div className=" w-full flex flex-col gap-6  sm:gap-10">
                <div className=" flex justify-between items-center">
                  <h5 className=' font-semibold text-sm sm:text-lg '>{item.name}</h5>
                  <h4 className=' font-semibold '>${item.price}</h4>
                </div>
                <div className=" flex justify-between ">
                  <div>
                  <p className=" flex border-[1px] border-my-gray-lit gap-1 sm:gap-4 place-items-center cursor-pointer">
                    <span className="pl-3 sm:py-[6px] text-my-gray-lit" onClick={() => toggleCartItemQuanitity(item._id, 'dec') }>
                    <AiOutlineMinus />
                    </span>
                    <span className="border-x px-[12px] border-my-gray-lit sm:py-[6px]" onClick="">{item.quantity}</span>
                    <span className="pr-3 sm:py-[6px] " onClick={() => toggleCartItemQuanitity(item._id, 'inc') }><AiOutlinePlus /></span>
                  </p>
                  </div>
                  <button
                    type="button"
                    className=" text-2xl "
                    onClick={() => onRemove(item)}
                  >
                    <TiDeleteOutline />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {cartItems.length >= 1 && (
          <div className=" mt-12 px-3">
            <div className=" flex justify-between">
              <h3 className=' text-my-gray-lit text-xl font-semibold'>Subtotal:</h3>
              <h3 className=' text-my-gray-lit text-xl font-medium'>${totalPrice}</h3>
            </div>
            <div className="mt-12 text-center bg-my-gray-lit rounded-2xl py-3 text-xl font-medium text-black">
              <button type="button" className=' w-full h-full' >
                Pay with Stripe
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart