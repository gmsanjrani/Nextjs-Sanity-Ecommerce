import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/sanity'

function Product({ product: {name, image , slug, price} }) {
    // console.log(slug);
  return (
    <div className=' cursor-pointer transition hover:scale-110 duration-500' >
      <Link href={`/product/${slug}`} passHref>
        <div className=' space-y-2'>
          <img
            className=' bg-my-gray-lit rounded-2xl shadow-sm'
            src={urlFor(image && image[0])} alt="nothing" width={250} height={250} />
          <p className=' text-my-blue font-semibold'>{name}</p>
          <p className=' font-extrabold'>$ {price}</p>
        </div>
      </Link>
    </div>
  )
}

export default Product