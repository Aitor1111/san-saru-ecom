import Image from "next/image";
import { CURRENCY } from "../../constants/currency";
import styles from "./card-large.module.css";

type CardLargeProps = {
  product: any;
  onAddToCart: () => void;
};

export default function CardLarge({
  product,
  onAddToCart = () => {},
}: CardLargeProps) {
  const getCurrency = (currency: string) =>
    currency === "EUR" || currency === "USD"
      ? CURRENCY[currency].symbol
      : CURRENCY["DEFAULT"].symbol;

  const formatCategory = (category: string) =>
    category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <div className={styles.container}>
      <div className={styles.imgWrapper}>
        {product?.bestseller && (
          <div className={styles.highlightBanner}>Best Seller</div>
        )}
        <Image
          layout="fill"
          objectFit="cover"
          src={product?.image.src}
          alt={product?.image.alt}
        />
        <button onClick={onAddToCart} className={styles.ctaButton}>
          ADD TO CART
        </button>
      </div>
      <p className={styles.category}>{formatCategory(product?.category)}</p>
      <h2>{product?.name}</h2>
      <p className={styles.price}>
        {product?.price + getCurrency(product.currency)}
      </p>
    </div>
  );
}
