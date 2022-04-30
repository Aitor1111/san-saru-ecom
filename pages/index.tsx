import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import Hero from "../components/Hero";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import ShopGrid from "../components/ShopGrid";
import Pagination from "../components/Pagination";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className={styles.main}>
        <Hero />
        <ShopGrid />
      </main>
    </div>
  );
};

export default Home;
