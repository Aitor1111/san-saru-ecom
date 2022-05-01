import { FILTERS_CATEGORY, FILTERS_PRICE } from "../../constants/filters";
import Button from "../Button";
import CheckBox from "../CheckBox";
import Separator from "../Separator";
import styles from "./mobile-filters.module.css";

export default function MobileFilters({ visible = true, onClose = () => {} }) {
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
          {FILTERS_CATEGORY.map((item, index) => (
            <li className={styles.item} key={index}>
              <CheckBox selected={true} label={item.label} />
            </li>
          ))}
          <Separator size="small" />
          <h2 className={styles.filterTitle}>Price range</h2>
          {FILTERS_PRICE.map((item, index) => (
            <li className={styles.item} key={index}>
              <CheckBox selected={true} label={item.label} />
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
