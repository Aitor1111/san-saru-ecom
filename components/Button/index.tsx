import styles from "./button.module.css";

type ButtonProps = {
  label: string;
  onClick?: () => void;
  size?: "large" | "medium";
  theme?: "dark" | "light";
  expand?: boolean;
};

export default function Button({
  label,
  onClick = () => {},
  size = "medium",
  theme = "dark",
  expand = false,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${styles[size]} ${styles[theme]} ${
        expand ? styles.expand : 0
      }`}
    >
      {label}
    </button>
  );
}
