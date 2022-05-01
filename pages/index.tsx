import type { NextPage } from "next";
import Head from "next/head";

import Hero from "../components/Hero";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import ShopGrid from "../components/ShopGrid";
import getProducts from "../logic/get-products";
import { useEffect, useState } from "react";

export const getStaticProps = async () => {
  const data = await getProducts();

  return {
    props: { data },
  };
};

const Home: NextPage = ({ data }: any) => {
  const [cartItems, setCartItems] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const cart = localStorage.getItem("cart");

    setCartItems(cart ? JSON.parse(cart) : []);
  }, [refresh]);

  const handleAddToCart = (item: any) => {
    const currentCart = cartItems;
    currentCart.push(item);
    localStorage.setItem("cart", JSON.stringify(currentCart));
    setRefresh(!refresh);
  };

  const handleClearCart = () => {
    localStorage.removeItem("cart");
    setRefresh(!refresh);
  };

  return (
    <div>
      <Head>
        <title>Bejamas | Home</title>
        <meta name="description" content="The next generation of Ecommerce" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header cartItems={cartItems} onClearCart={handleClearCart} />
      <main className={styles.main}>
        <Hero
          featuredProducts={data?.data.filter((p: any) => p.featured)}
          onAddToCart={handleAddToCart}
        />
        <ShopGrid products={data?.data} onAddToCart={handleAddToCart} />
      </main>
    </div>
  );
};

export default Home;
