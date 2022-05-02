import Image from "next/image";
import { useState } from "react";
import { FILTERS_CATEGORY, FILTERS_PRICE } from "../../constants/filters";
import CardLarge from "../CardLarge";
import CheckBox from "../CheckBox";
import MobileFilters from "../MobileFilters";
import Separator from "../Separator";
import styles from "./shop-grid.module.css";

type ShopGridProps = {
  products: [any];
  onAddToCart: (product: any) => void;
  selectedFilters: string[];
  onCategoryFilterSelect: (filter: string | string[]) => void;
};

export default function ShopGrid({
  products,
  onAddToCart,
  selectedFilters,
  onCategoryFilterSelect,
}: ShopGridProps) {
  const [pageSelected, setPageSelected] = useState(0);
  const [showFiltersMobile, setShowFiltersMobile] = useState(false);

  return (
    <section className={styles.container}>
      <div className={styles.heading}>
        <h4>
          Photgraphy <span className={styles.slash}>/</span>{" "}
          <span className={styles.subtitle}>Premium Photos</span>
        </h4>

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

        <button
          className={styles.filtersBtnMobile}
          onClick={() => setShowFiltersMobile(true)}
        >
          <Image
            src="/filters-box.svg"
            alt="Filters button"
            width={29}
            height={29}
          />
        </button>
      </div>
      <section className={styles.shopSection}>
        <div className={styles.filters}>
          <h3 className={styles.filtersSectionTitle}>Category</h3>
          {FILTERS_CATEGORY.map((c) => (
            <CheckBox
              key={c.id}
              selected={selectedFilters.indexOf(c.name) > -1}
              label={c.label}
              onClick={() => onCategoryFilterSelect(c.name)}
            />
          ))}

          <Separator size="small" />
          <h3 className={styles.filtersSectionTitle}>Price Range</h3>
          {FILTERS_PRICE.map((c) => (
            <CheckBox key={c.id} selected={false} label={c.label} />
          ))}
        </div>
        <div className={styles.mobileFilters}>
          <MobileFilters
            onCategoryFilterSelect={onCategoryFilterSelect}
            selectedFilters={selectedFilters}
            visible={showFiltersMobile}
            onClose={() => setShowFiltersMobile(false)}
          />
        </div>

        <div className={styles.shopGrid}>
          {products?.map((product: any) => (
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
