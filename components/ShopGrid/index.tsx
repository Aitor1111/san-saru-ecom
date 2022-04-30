import Image from "next/image";
import { useState } from "react";
import CardLarge from "../CardLarge";
import styles from "./shop-grid.module.css";

export default function ShopGrid() {
  const [pageSelected, setPageSelected] = useState(2);
  return (
    <section className={styles.container}>
      <div className={styles.heading}>
        <h4>
          Photgraphy / <span className={styles.subtitle}>Premium Photos</span>
        </h4>
        <Image
          src="/filters-box.svg"
          alt="Shopping Cart"
          width={29}
          height={29}
        />
      </div>
      <div className={styles.shopGrid}>
        <CardLarge />
        <CardLarge />
        <CardLarge />
        <CardLarge />
      </div>

      <div className={styles.paginator}>
        <Image
          src="/chevron-left.svg"
          alt="Shopping Cart"
          width={12}
          height={20}
        />
        {[1, 2, 3, 4].map((page, index) => (
          <button
            className={`${styles.page} ${
              pageSelected === index ? styles.pageSelected : ""
            }`}
            key={index}
          >
            {page}
          </button>
        ))}
        <Image
          src="/chevron-right.svg"
          alt="Shopping Cart"
          width={12}
          height={20}
        />
      </div>
    </section>
  );
}
