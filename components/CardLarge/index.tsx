import Image from "next/image";
import styles from "./card-large.module.css";

export default function CardLarge() {
  return (
    <div className={styles.container}>
      <div className={styles.imgWrapper}>
        <div className={styles.highlightBanner}>Best Seller</div>
        <Image
          layout="fill"
          objectFit="cover"
          src={
            "https://s3-alpha-sig.figma.com/img/d578/0646/bea3c9f2aa2b94f1724c9124e6c9956e?Expires=1652054400&Signature=Og2kFuLgF7Y41XQGyPvfNP3U8eE1fG6Yzcwa~mhe8uK1OOJ1vxUrEEUgtpCNB-CCTNc8ytXqRw4011ITpgZAukH7DvEqlkouORW7GGWBZNMtI0WN0X9c4uTiDEsMvVvRTog7ECBnr9mX~LP94ZBkLtTuIj2KX8qaJg3R6bpC5onZ6kQERrmpsCyK8zzbZswR~QbbmCgdkXJUOQVIEHpAACyyr~B8jMkCylCZVUVEw0KlVU4i3qaWs8oq9HD6JeeCzAh~ejm1lq8OQmrZgSshygief-wAEkccu-XMKV2515i9S4RW-7-8Q21FQouCPS7YxRQwstEIuuK0AFCGpEZ8vQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          }
          alt="Samurai King Resting Image"
        />
        <button className={styles.ctaButton}>ADD TO CART</button>
      </div>
      <p className={styles.category}>People</p>
      <h2>Red Bench</h2>
      <p className={styles.price}>$3.89</p>
    </div>
  );
}
