import Image from "next/image";
import Button from "../Button";
import CheckBox from "../CheckBox";
import Separator from "../Separator";
import styles from "./mobile-filters.module.css";

export default function MobileFilters({ visible = true, onClose = () => {} }) {
  const data = [
    { title: "People", selected: true },
    { title: "People", selected: true },
    { title: "People", selected: true },
    { title: "People", selected: true },
    { title: "People", selected: true },
  ];

  return (
    <div className={`${styles.modal} ${visible ? styles.visible : ""}`}>
      <div className={styles.modalContent}>
        <div>
          <button onClick={onClose} className={styles.close}>
            &times;
          </button>
          <h2>Filter</h2>
        </div>
        <ul className={styles.itemsContainer}>
          {data.map((item, index) => (
            <li className={styles.item} key={index}>
              <CheckBox selected={item.selected} label={item.title} />
            </li>
          ))}
          <Separator size="small" />
          <h2 className={styles.filterTitle}>Price range</h2>
          {data.map((item, index) => (
            <li className={styles.item} key={index}>
              <CheckBox selected={item.selected} label={item.title} />
            </li>
          ))}
        </ul>
        <div className={styles.btnArea}>
          <Separator size="large" />
          <div className={styles.spacer} />
          <div className={styles.btnRow}>
            <Button label="CLEAR" theme="light" size="large" expand />
            <div className={styles.btnSpacer} />
            <Button label="SAVE" theme="dark" size="large" expand />
          </div>
        </div>
      </div>
    </div>
  );
}
