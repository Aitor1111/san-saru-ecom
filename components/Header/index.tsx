import Image from "next/image";
import Separator from "../Separator";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <Image src="/logo.svg" alt="Bejamas_ Logo" width={124} height={20} />
        <Image
          src="/shopping-cart.svg"
          alt="Shopping Cart"
          width={32}
          height={32}
        />
      </div>
      <Separator />
    </header>
  );
}
