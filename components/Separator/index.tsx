import styles from "./separator.module.css";

export default function Separator({ size = "large" }) {
  return <div className={`${styles.separator} ${styles[size]}`} />;
}
