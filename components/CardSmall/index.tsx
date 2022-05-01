import Image from "next/image";
import styles from "./card-small.module.css";

export default function CardSmall({ img, alt }: { img: string; alt: string }) {
  return (
    <div className={styles.container}>
      <Image layout="fill" objectFit="cover" src={img} alt={alt} />
    </div>
  );
}
