import { useState } from "react";
import { FILTERS_CATEGORY, FILTERS_PRICE } from "../../constants/filters";
import Button from "../Button";
import CheckBox from "../CheckBox";
import Separator from "../Separator";
import styles from "./mobile-filters.module.css";

type MobileFiltersProps = {
  visible: boolean;
  onClose: () => void;
  selectedFilters: string[];
  onCategoryFilterSelect: (filters: string[]) => void;
};

export default function MobileFilters({
  visible = true,
  onClose = () => {},
  selectedFilters,
  onCategoryFilterSelect,
}: MobileFiltersProps) {
  const [tempFilters, setTempFilters] = useState(selectedFilters);

  const handleCategoryFilterSelect = async (name: string) => {
    const filterIndex = tempFilters.indexOf(name);
    let newFilters = [...tempFilters];
    filterIndex > -1
      ? newFilters.splice(filterIndex, 1)
      : newFilters.push(name);

    setTempFilters(newFilters);
  };

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
              <CheckBox
                onClick={() => handleCategoryFilterSelect(item.name)}
                selected={tempFilters.indexOf(item.name) > -1}
                label={item.label}
              />
            </li>
          ))}
          <Separator size="small" />
          <h2 className={styles.filterTitle}>Price range</h2>
          {FILTERS_PRICE.map((item, index) => (
            <li className={styles.item} key={index}>
              <CheckBox selected={false} label={item.label} />
            </li>
          ))}
        </ul>
        <div className={styles.btnArea}>
          <Separator size="large" />
          <div className={styles.spacer} />
          <div className={styles.btnRow}>
            <Button
              label="CLEAR"
              theme="light"
              size="large"
              expand
              onClick={() => {
                setTempFilters([]);
                onCategoryFilterSelect([]);
                onClose();
              }}
            />
            <div className={styles.btnSpacer} />
            <Button
              label="SAVE"
              theme="dark"
              size="large"
              expand
              onClick={() => {
                onCategoryFilterSelect(tempFilters);
                onClose();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
