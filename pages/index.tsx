import type { NextPage } from "next";
import Head from "next/head";

import Hero from "../components/Hero";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import ShopGrid from "../components/ShopGrid";
import getProducts from "../logic/get-products";
import { useEffect, useState } from "react";
import getFilteredProducts from "../logic/get-filtered-products";

export const getStaticProps = async () => {
  const data = await getProducts();

  return {
    props: { data },
  };
};

const Home: NextPage = ({ data }: any) => {
  const [products, setProducts] = useState<any[]>(data?.data ?? []);
  const [filteredProducts, setFilteredProducts] = useState<any>([]);
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const cart = localStorage.getItem("cart");

    setCartItems(cart ? JSON.parse(cart) : []);
  }, [refresh]);

  const handleLoadPage = async (page: number) => {
    const newData = await getProducts(page);
    setProducts(newData?.data ?? data?.data);
  };

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

  const handleCategoryFilterSelect = async (item: string | string[]) => {
    let newFilters = [...selectedFilters];

    if (typeof item === "object") {
      newFilters = item;
      setSelectedFilters(item);
    } else {
      const filterIndex = selectedFilters.indexOf(item);
      filterIndex > -1
        ? newFilters.splice(filterIndex, 1)
        : newFilters.push(item);

      setSelectedFilters(newFilters);
    }

    setFilteredProducts(await getFilteredProducts(newFilters));
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
        <ShopGrid
          totalPages={data?.last_page}
          products={filteredProducts.length > 0 ? filteredProducts : products}
          onAddToCart={handleAddToCart}
          selectedFilters={selectedFilters}
          onCategoryFilterSelect={handleCategoryFilterSelect}
          onLoadPage={handleLoadPage}
        />
      </main>
    </div>
  );
};

export default Home;
