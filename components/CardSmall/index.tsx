import Image from "next/image";
import styles from "./card-small.module.css";

type CardSmallProps = {
  img: string;
  alt: string;
};

export default function CardSmall({ img, alt }: CardSmallProps) {
  return (
    <div className={styles.container}>
      <Image layout="fill" objectFit="cover" src={img} alt={alt} />
    </div>
  );
}
