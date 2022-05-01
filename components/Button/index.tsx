import styles from "./button.module.css";

type ButtonProps = {
  label: string;
  size?: "large" | "medium";
  theme?: "dark" | "light";
  expand?: boolean;
};

export default function Button({
  label,
  size = "medium",
  theme = "dark",
  expand = false,
}: ButtonProps) {
  return (
    <button
      className={`${styles.button} ${styles[size]} ${styles[theme]} ${
        expand ? styles.expand : 0
      }`}
    >
      {label}
    </button>
  );
}
