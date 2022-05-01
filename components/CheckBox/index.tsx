import Image from "next/image";
import styles from "./checkbox.module.css";

// TODO: MOBILE FIRST

export default function CheckBox({
  selected,
  label,
  size = 23,
  onClick = () => {},
}: {
  selected: boolean;
  label: string;
  size?: number;
  onClick?: () => void;
}) {
  return (
    <button onClick={onClick} className={styles.container}>
      <div>
        <Image
          src="/checkbox-box.svg"
          alt="checbox-box"
          width={size}
          height={size}
        />
        {selected && (
          <div className={styles.check}>
            <Image
              src="/checkbox-check.svg"
              alt="checbox-check"
              width={size - 4}
              height={size - 4}
            />
          </div>
        )}
      </div>
      <span className={styles.label}>{label}</span>
    </button>
  );
}
