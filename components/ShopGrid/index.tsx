import Image from "next/image";
import { useState } from "react";
import { FILTERS_CATEGORY, FILTERS_PRICE } from "../../constants/filters";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import CardLarge from "../CardLarge";
import CheckBox from "../CheckBox";
import MobileFilters from "../MobileFilters";
import Separator from "../Separator";
import styles from "./shop-grid.module.css";

export default function ShopGrid({ products, onAddToCart }: any) {
  const [pageSelected, setPageSelected] = useState(2);
  const [showFiltersMobile, setShowFiltersMobile] = useState(false);
  const { width } = useWindowDimensions();

  return (
    <section className={styles.container}>
      <div className={styles.heading}>
        <h4>
          Photgraphy <span className={styles.slash}>/</span>{" "}
          <span className={styles.subtitle}>Premium Photos</span>
        </h4>
        {width > 992 ? (
          <div className={styles.sortBtn}>
            <Image
              src="/arrow-up-down.svg"
              alt="Filters button"
              width={15}
              height={15}
            />
            <span className={styles.sortBtnLabel}>Sort By</span>
            <span className={styles.sortCurrentLabel}>Price</span>
            <Image
              src="/chevron-down.svg"
              alt="open-sort"
              width={18}
              height={10}
            />
          </div>
        ) : (
          <button onClick={() => setShowFiltersMobile(true)}>
            <Image
              src="/filters-box.svg"
              alt="Filters button"
              width={29}
              height={29}
            />
          </button>
        )}
      </div>
      <section className={styles.shopSection}>
        {/* TODO Export to 2 filters components */}
        {width > 992 ? (
          <div className={styles.filters}>
            <h3 className={styles.filtersSectionTitle}>Category</h3>
            {FILTERS_CATEGORY.map((c) => (
              <CheckBox key={c.id} selected={true} label={c.label} />
            ))}

            <Separator size="small" />
            <h3 className={styles.filtersSectionTitle}>Price Range</h3>
            {FILTERS_PRICE.map((c) => (
              <CheckBox key={c.id} selected={true} label={c.label} />
            ))}
          </div>
        ) : (
          <MobileFilters
            visible={showFiltersMobile}
            onClose={() => setShowFiltersMobile(false)}
          />
        )}
        <div className={styles.shopGrid}>
          {products.map((product: any) => (
            <CardLarge
              onAddToCart={() => onAddToCart(product)}
              key={product._id}
              product={product}
            />
          ))}
        </div>
      </section>

      <div className={styles.paginator}>
        <Image
          onClick={() =>
            setPageSelected(pageSelected > 0 ? pageSelected - 1 : 0)
          }
          src="/chevron-left.svg"
          alt="prev-page"
          width={12}
          height={20}
        />
        {[1, 2, 3, 4].map((page, index) => (
          <button
            onClick={() => setPageSelected(index)}
            className={`${styles.page} ${
              pageSelected === index ? styles.pageSelected : ""
            }`}
            key={index}
          >
            {page}
          </button>
        ))}
        <Image
          onClick={() =>
            setPageSelected(pageSelected < 3 ? pageSelected + 1 : 3)
          }
          src="/chevron-right.svg"
          alt="next-page"
          width={12}
          height={20}
        />
      </div>
    </section>
  );
}
