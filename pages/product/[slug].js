import React ,{ useState} from "react";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import { urlFor, client } from "../../lib/sanity";
import { ProductsLine } from "../../components";
import { useStateContext } from '../../context/StateContext';

function ProductDetail({ products, product }) {
  const { image, name, details, price } = product;
  const [index, setIndex] = useState(0);

  const { decQty, incQty, qty, onAdd } = useStateContext();
  return (
    <div className="">
      <div className=" mx-2 mt-2 md:mx-8 md:grid md:grid-cols-2 md:mt-11 md:gap-8 ">
        <div className=" w-[95%] mx-auto grid ">
          <div className=" w-[100%] justify-self-center bg-my-gray-lit rounded-xl cursor-pointer
            transition-colors hover:bg-my-red  duration-500
          ">
            <img src={urlFor(image && image[index])} alt="noo" />
          </div>
          <div className="w-[90%] grid justify-self-center grid-cols-4 gap-3 mt-6 ">
            {image?.map((item, i) => (
              <img
                src={urlFor(item)}
                alt="no"
                key={i}
                onMouseEnter={() => setIndex(i)}
                className={`${i === index ? 'small-image selected-image' : 'small-image'} bg-my-gray-lit rounded-lg  cursor-pointer hover:bg-my-red`}
              />
            ))}
          </div>
        </div>

        <div className=" mt-10">
          <h1 className=" text-4xl font-semibold text-my-blue">{name}</h1>
          <div className=" flex align-middle mt-4">
            <div className=" flex gap-[2px]">
              <AiFillStar className=" text-my-red" />
              <AiFillStar className=" text-my-red" />
              <AiFillStar className=" text-my-red" />
              <AiFillStar className=" text-my-red" />
              <AiOutlineStar className=" text-my-red" />
            </div>
            <p className=" text-my-blue">(20)</p>
          </div>
          <h4 className=" my-2 text-my-blue font-semibold">Details:</h4>
          <p className=" font-thin mt-3">{details}</p>
          <p className=" my-6 text-my-red text-2xl font-semibold">${price}</p>
          <div className=" flex gap-6 align-middle">
            <h3 className=" text-my-blue text-lg font-bold">Quantity:</h3>
            <p className=" flex border-[1px]  gap-4 place-items-center cursor-pointer">
              <span className=" pl-3 py-[6px] text-my-red" onClick={decQty}>
                <AiOutlineMinus />
              </span>
              <span className=" border-x px-[12px] py-[6px]">{qty}</span>
              <span className="pr-3 py-[6px] text-my-green" onClick={incQty}>
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <div className=" my-10 space-x-6">
            <button
              className=" border-my-red border py-1 px-2 sm:px-7 sm:py-2 text-my-red
              cursor-pointer transition hover:scale-110 duration-500"
              onClick={() => onAdd(product, qty)}
            >
              Add to Cart
            </button>
            <button
              className=" border-my-red border-[2px] sm:px-7 
             sm:py-2 bg-my-red py-1 px-4 text-my-white font-medium
            cursor-pointer transition hover:scale-110 duration-500"
           
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <div className=" maylike-products-wrapper  sm:mb-[-3rem] lg:mb-0 ">
        <h2>You may also like</h2>
        <div className="marquee md:mt-2">
          <div className=" maylike-products-container track ">
            {products.slice(0, 5).map((item) => (
              <ProductsLine key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export const getStaticPaths = async () => {
  const query = `*[_type == "product"]{slug}`;

  const products = await client.fetch(query);

  const paths = products.filter((product) => {
    params: {
      slug: product.slug;
    }
  });

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug == "${slug}"][0]`;
  const productsQuery = '*[_type == "product"]';

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  return {
    props: { products, product },
  };
};

export default ProductDetail;
