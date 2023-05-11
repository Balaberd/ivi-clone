import { FC } from "react";
import cn from "classnames";
import styles from "./RatingLine.module.scss";

export interface Props {
  rating: number;
  className?: string;
  maxRating?: number;
}

export const RatingLine: FC<Props> = ({
  rating,
  className,
  maxRating = 10,
}) => {
  if (rating > maxRating) {
    return null;
  }
  const ratingInPercent = `${Math.round((rating / maxRating) * 100)}%`;

  return (
    <div
      className={cn(styles.lineWrapper, className)}
      data-testid="custom-element"
    >
      <div
        className={styles.ratingLine}
        style={{ width: ratingInPercent }}
      ></div>
    </div>
  );
};
