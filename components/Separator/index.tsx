import styles from "./separator.module.css";

type SeparatorProps = {
  size?: "large" | "small";
};

export default function Separator({ size = "large" }: SeparatorProps) {
  return <div className={`${styles.separator} ${styles[size]}`} />;
}
