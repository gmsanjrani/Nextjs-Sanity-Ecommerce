import { Fragment } from "react";
import {
  Footer,
  Banner,
  FooterBanner,
  Product,
  Navbar,
  Layout,
  Cart,
} from "../components";

import { client } from "../lib/sanity";

const Home = ({ products, banner }) => {
  // console.log(JSON.stringify(products, " ", 2));
  // console.log(banner);
  return (
    <Fragment>
      <Banner bannerData={banner?.length && banner[0]} />
      <div className=" text-center mt-14 ">
        <h2 className=" text-4xl font-extrabold leading-tight text-my-blue">Top Selling Product</h2>
        <p className=" text-my-gray">Best speakers you ever use</p>
      </div>

      <div className=" flex flex-wrap justify-center gap-7 mt-8">
          {products?.map((product)=> <Product key={product._id} product={product}/>)}
      </div>

      <div>
        <FooterBanner footerData={banner && banner[0]}/>
      </div>
    </Fragment>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client?.fetch(query);

  const queryBanner = '*[_type == "banner"]';
  const banner = await client?.fetch(queryBanner);

  return {
    props: {
      products,
      banner,
    },
  };
};

export default Home;
