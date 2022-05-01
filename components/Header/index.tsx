import Image from "next/image";
import Separator from "../Separator";
import styles from "./header.module.css";
import { useState } from "react";
import Cart from "../Cart";

export default function Header() {
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => setShowCart(!showCart);

  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <div className={styles.logoWrapper}>
          <Image src="/logo.svg" alt="Bejamas_ Logo" layout="fill" />
        </div>
        <button onClick={toggleCart} className={styles.cartButton}>
          <div className={styles.counter}>1</div>
          <div className={styles.cartWrapper}>
            <Image src="/shopping-cart.svg" alt="Shopping Cart" layout="fill" />
          </div>
        </button>
      </div>
      <Cart visible={showCart} onClose={toggleCart} />
      <Separator />
    </header>
  );
}
