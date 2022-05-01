import Image from "next/image";
import Separator from "../Separator";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <div className={styles.logoWrapper}>
          <Image src="/logo.svg" alt="Bejamas_ Logo" layout="fill" />
        </div>
        <div className={styles.cartWrapper}>
          <Image src="/shopping-cart.svg" alt="Shopping Cart" layout="fill" />
        </div>
      </div>
      <Separator />
    </header>
  );
}
