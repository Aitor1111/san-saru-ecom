/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { useEffect, useState } from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import Button from "../Button";
import CardSmall from "../CardSmall";
import Separator from "../Separator";
import styles from "./hero.module.css";

export default function Hero() {
  const { width } = useWindowDimensions();

  const shortDescription =
    "So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book.";
  const largeDescription =
    "So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book.So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book.So how did the classical Latin become so incoherent? According to McClintock.";

  return (
    <>
      <section className={styles.container}>
        <div className={styles.heading}>
          <h1>Samurai King Resting</h1>
          {width > 992 && <Button label="ADD TO CART" size="medium" />}
        </div>

        <div className={styles.imgWrapper}>
          <Image
            layout="fill"
            objectFit="cover"
            src={
              "https://s3-alpha-sig.figma.com/img/d578/0646/bea3c9f2aa2b94f1724c9124e6c9956e?Expires=1652054400&Signature=Og2kFuLgF7Y41XQGyPvfNP3U8eE1fG6Yzcwa~mhe8uK1OOJ1vxUrEEUgtpCNB-CCTNc8ytXqRw4011ITpgZAukH7DvEqlkouORW7GGWBZNMtI0WN0X9c4uTiDEsMvVvRTog7ECBnr9mX~LP94ZBkLtTuIj2KX8qaJg3R6bpC5onZ6kQERrmpsCyK8zzbZswR~QbbmCgdkXJUOQVIEHpAACyyr~B8jMkCylCZVUVEw0KlVU4i3qaWs8oq9HD6JeeCzAh~ejm1lq8OQmrZgSshygief-wAEkccu-XMKV2515i9S4RW-7-8Q21FQouCPS7YxRQwstEIuuK0AFCGpEZ8vQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            }
            alt="Samurai King Resting Image"
          />
          <div className={styles.imgLabel}>Photo of the day</div>
        </div>

        {width < 992 && <Button label="ADD TO CART" size="large" />}

        <div className={styles.content}>
          <div className={styles.info}>
            <h3>About the Samurai King Resting</h3>

            <p>{width < 992 ? shortDescription : largeDescription}</p>
          </div>

          <div className={styles.additionalInfo}>
            <h3>People also buy</h3>
            <div className={styles.cardRowWrap}>
              <CardSmall />
              <CardSmall />
              <CardSmall />
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
