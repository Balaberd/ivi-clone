import { FC, ReactElement } from "react";
import cn from "classnames";
import styles from "./MovieCardContent.module.scss";
import { Rating } from "./Rating/Rating";

interface Props {
  actions?: ReactElement[];
  rating: number;
  years: string;
  genre: string;
  country: string;
  durations: string;
  className?: string;
}

export const MovieCardContent: FC<Props> = ({
  rating,
  years,
  genre,
  country,
  durations,
  className,
  actions,
}) => (
  <div className={cn(styles.movieCardContent, className)}>
    <div className={styles.actionBlock}>{actions}</div>
    <div className={styles.movieInfo}>
      <Rating rating={rating} />
      <div className={styles.description}>
        <span className={styles.info}>{`${years}, ${country}, ${genre}`}</span>
        <span className={styles.duration}>{durations}</span>
      </div>
    </div>
  </div>
);
