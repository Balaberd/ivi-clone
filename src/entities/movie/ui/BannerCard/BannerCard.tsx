import { FC } from "react";
import cn from "classnames";
import { Poster } from "@/shared";
import Link from "next/link";
import styles from "./BannerCard.module.scss";

interface Props {
  id: number;
  name: string;
  text: string;
  promo?: string;
  className?: string;
}

export const BannerCard: FC<Props> = ({ id, className, promo, name, text }) => (
  <Link href={`/movies/${id}`}>
    <Poster
      classNames={cn(styles.poster, className)}
      imageUrl={promo || ""}
      title={name}
    >
      <div className={styles.content}>
        <h4 className={styles.title}>{name}</h4>
        <p className={styles.description}>{text}</p>
        <div className={styles.button}>Смотреть бесплатно</div>
      </div>
    </Poster>
  </Link>
);
