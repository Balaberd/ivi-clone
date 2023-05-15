import { FC } from "react";
import { RatingLine } from "@/shared";
import styles from "./Rating.module.scss";

interface Props {
  rating: number;
}

export const Rating: FC<Props> = ({ rating }) => {
  const formatedRatingValue = `${rating || 0}`.split(".");
  if (formatedRatingValue.length === 1) {
    formatedRatingValue[1] = "0";
  }
  return (
    <div className={styles.rating}>
      <div className={styles.numbers}>
        <span className={styles.numbers__firstNum}>
          {formatedRatingValue[0]}
        </span>
        <span className={styles.numbers__secondNum}>
          {`,${formatedRatingValue[1]}`}
        </span>
      </div>
      рейтинг
      <RatingLine rating={rating} className={styles.ratingLine} />
    </div>
  );
};
