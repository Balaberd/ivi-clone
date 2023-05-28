import { FC } from "react";
import { RatingIcon, formatNumber, plural } from "@/shared";
import styles from "./RatingBlock.module.scss";

interface Props {
  rating: number;
  ratingCount: number;
}

export const RatingBlock: FC<Props> = ({ rating, ratingCount }) => (
  <div className={styles.ratingBlock}>
    <div className={styles.left}>
      <div className={styles.ratingIconWrapper}>
        <RatingIcon rating={rating} />
      </div>

      <div className={styles.description}>
        <span className={styles.description__title}>Рейтинг иви</span>
        <span className={styles.description__firstRow}>Интересный сюжет</span>
        <span className={styles.description__second}>
          {`${formatNumber(ratingCount)} ${plural(ratingCount, {
            one: "оценка",
            few: "оценок",
            many: "оценок",
          })}`}
        </span>
      </div>
    </div>

    <div className={styles.right}>
      <button className={styles.button}>Оценить</button>
    </div>
  </div>
);
