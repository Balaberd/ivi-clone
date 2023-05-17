import React, { FC } from "react";
import cn from "classnames";
import styles from "./Rating.module.scss";

interface IRating {
  rating?: number;
  classNames?: string;
}

export const Rating: FC<IRating> = ({ rating, classNames }) => (
  <div className={cn(styles.container, classNames)}>
    {rating && rating >= 7 && (
      <div>
        <div className={styles.wrapper}>
          <p className={cn(styles.rating, styles.green)}>{rating}</p>
        </div>
        <p className={styles.title}>Рейтинг Иви</p>
      </div>
    )}
    {rating && rating < 7 && rating > 5 && (
      <div>
        <div className={styles.wrapper}>
          <p className={cn(styles.rating, styles.yellow)}>{rating}</p>
        </div>
        <p className={styles.title}>Рейтинг Иви</p>
      </div>
    )}
    {rating && rating <= 5 && (
      <div>
        <div className={styles.wrapper}>
          <p className={cn(styles.rating, styles.red)}>{rating}</p>
        </div>
        <p className={styles.title}>Рейтинг Иви</p>
      </div>
    )}
  </div>
);
