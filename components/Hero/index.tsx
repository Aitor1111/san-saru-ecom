/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Button from "../Button";
import CardSmall from "../CardSmall";
import Separator from "../Separator";
import styles from "./hero.module.css";

type HeroProps = {
  // TODO CREATE PRODUCT MODEL
  featuredProducts: [any];
  onAddToCart: (product: any) => void;
};

export default function Hero({ featuredProducts, onAddToCart }: HeroProps) {
  const formatCategory = (category: string) =>
    category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <>
      <section className={styles.container}>
        <div className={styles.heading}>
          <h1>{featuredProducts[0].name}</h1>
          <div className={styles.upperCta}>
            <Button
              label="ADD TO CART"
              size="medium"
              onClick={() => onAddToCart(featuredProducts[0])}
            />
          </div>
        </div>

        <div className={styles.imgWrapper}>
          <Image
            layout="fill"
            objectFit="cover"
            src={featuredProducts[0].image.src}
            alt={featuredProducts[0].image.alt}
          />
          <div className={styles.imgLabel}>Photo of the day</div>
        </div>

        <div className={styles.lowerCta}>
          <Button
            expand
            label="ADD TO CART"
            size="large"
            onClick={() => onAddToCart(featuredProducts[0])}
          />
        </div>

        <div className={styles.content}>
          <div className={styles.info}>
            <h3>About the {featuredProducts[0].name}</h3>

            <p className={styles.category}>
              {formatCategory(featuredProducts[0].category)}
            </p>

            <p>{featuredProducts[0].description}</p>
          </div>

          <div className={styles.additionalInfo}>
            <h3>People also buy</h3>
            <div className={styles.cardRowWrap}>
              {featuredProducts.map(({ image, _id }: any) => (
                <CardSmall key={_id} img={image.src} alt={image.alt} />
              ))}
            </div>
            <h3>Details</h3>

            <p>Size: 1020 x 1020 pixel</p>
            <p>Size: 15 mb</p>
          </div>
        </div>
      </section>
      <Separator />
    </>
  );
}
