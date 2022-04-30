import styles from "./button.module.css";

type ButtonProps = {
  label: string;
  size?: "large" | "medium";
  theme?: "dark" | "light";
};

export default function Button({
  label,
  size = "medium",
  theme = "dark",
}: ButtonProps) {
  return (
    <button className={`${styles.button} ${styles[size]} ${styles[theme]}`}>
      {label}
    </button>
  );
}
