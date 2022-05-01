import Image from "next/image";
import Button from "../Button";
import Separator from "../Separator";
import styles from "./cart.module.css";

export default function Cart({
  visible,
  onClose,
}: {
  visible: boolean;
  onClose: () => void;
}) {
  const data = [
    {
      title: "Samurai King Resting",
      price: 1000,
      img: "https://s3-alpha-sig.figma.com/img/d578/0646/bea3c9f2aa2b94f1724c9124e6c9956e?Expires=1652054400&Signature=Og2kFuLgF7Y41XQGyPvfNP3U8eE1fG6Yzcwa~mhe8uK1OOJ1vxUrEEUgtpCNB-CCTNc8ytXqRw4011ITpgZAukH7DvEqlkouORW7GGWBZNMtI0WN0X9c4uTiDEsMvVvRTog7ECBnr9mX~LP94ZBkLtTuIj2KX8qaJg3R6bpC5onZ6kQERrmpsCyK8zzbZswR~QbbmCgdkXJUOQVIEHpAACyyr~B8jMkCylCZVUVEw0KlVU4i3qaWs8oq9HD6JeeCzAh~ejm1lq8OQmrZgSshygief-wAEkccu-XMKV2515i9S4RW-7-8Q21FQouCPS7YxRQwstEIuuK0AFCGpEZ8vQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    },
    {
      title: "Samurai King Resting",
      price: 1000,
      img: "https://s3-alpha-sig.figma.com/img/d578/0646/bea3c9f2aa2b94f1724c9124e6c9956e?Expires=1652054400&Signature=Og2kFuLgF7Y41XQGyPvfNP3U8eE1fG6Yzcwa~mhe8uK1OOJ1vxUrEEUgtpCNB-CCTNc8ytXqRw4011ITpgZAukH7DvEqlkouORW7GGWBZNMtI0WN0X9c4uTiDEsMvVvRTog7ECBnr9mX~LP94ZBkLtTuIj2KX8qaJg3R6bpC5onZ6kQERrmpsCyK8zzbZswR~QbbmCgdkXJUOQVIEHpAACyyr~B8jMkCylCZVUVEw0KlVU4i3qaWs8oq9HD6JeeCzAh~ejm1lq8OQmrZgSshygief-wAEkccu-XMKV2515i9S4RW-7-8Q21FQouCPS7YxRQwstEIuuK0AFCGpEZ8vQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    },
  ];

  return (
    <div
      id="myModal"
      className={`${styles.modal} ${visible ? styles.visible : ""}`}
    >
      <div className={styles.modalContent}>
        <button onClick={onClose} className={styles.close}>
          &times;
        </button>
        <ul className={styles.itemsContainer}>
          {data.map((item, index) => (
            <li className={styles.item} key={index}>
              <div className={styles.itemInfo}>
                <div className={styles.itemInfoTitle}>{item.title}</div>
                <div className={styles.itemInfoPrice}>${item.price}</div>
              </div>
              <div className={styles.itemImg}>
                <Image src={item.img} alt="Bejamas_ Logo" layout="fill" />
              </div>
            </li>
          ))}
        </ul>
        <div className={styles.clearArea}>
          <Separator size="small" />
          <div className={styles.spacer} />
          <Button label="CLEAR" theme="light" size="large" expand />
        </div>
      </div>
    </div>
  );
}
