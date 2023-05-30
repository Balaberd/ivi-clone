import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./PersonMovieItem.module.scss";

interface Props {
  id: number;
  avatar: string;
  title: string;
  rating: number;
  year: string;
}

export const PersonMovieItem: FC<Props> = ({
  id,
  avatar,
  title,
  rating,
  year,
}) => (
  <Link href={`/movies/${id}`} className={styles.moviesListItem}>
    <Image
      width={80}
      height={123}
      className={styles.avatar}
      src={`https://${avatar}`}
      alt="постер к фильму"
    />
    <div className={styles.descriptionBlock}>
      <div className={styles.infoBlock}>
        <span>{year}</span>
        <span>{title}</span>
        <span className={styles.subtitle}>{`Рейтинг: ${rating}`}</span>
      </div>
      <button className={styles.button}>Подробнее</button>
    </div>
  </Link>
);
