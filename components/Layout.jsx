import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
// import Link from 'next/link'

function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Hafiz Store</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>

      <header>
        <Navbar />
      </header>

      <main className="main-container">
        {children}
      </main>

      <footer className=" main-container">
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
