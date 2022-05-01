import Image from "next/image";
import Button from "../Button";
import Separator from "../Separator";
import styles from "./cart.module.css";

export default function Cart({
  cartItems,
  visible,
  onClose,
  onClearCart,
}: {
  cartItems: [any];
  visible: boolean;
  onClose: () => void;
  onClearCart: () => void;
}) {
  return (
    <div className={`${styles.modal} ${visible ? styles.visible : ""}`}>
      <div className={styles.modalContent}>
        <button onClick={onClose} className={styles.close}>
          &times;
        </button>
        <ul className={styles.itemsContainer}>
          {cartItems?.length > 0 ? (
            cartItems.map((item, index) => (
              <li className={styles.item} key={index}>
                <div className={styles.itemInfo}>
                  <div className={styles.itemInfoTitle}>{item.name}</div>
                  <div className={styles.itemInfoPrice}>${item.price}</div>
                </div>
                <div className={styles.itemImg}>
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    layout="fill"
                  />
                </div>
              </li>
            ))
          ) : (
            <p className={styles.item}>Oops! Any items in cart (yet)...</p>
          )}
        </ul>
        <div className={styles.clearArea}>
          <Separator size="small" />
          <div className={styles.spacer} />
          <Button
            label="CLEAR"
            theme="light"
            size="large"
            expand
            onClick={onClearCart}
          />
        </div>
      </div>
    </div>
  );
}
