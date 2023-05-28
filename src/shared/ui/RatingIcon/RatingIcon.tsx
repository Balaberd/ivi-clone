import { FC } from "react";
import cn from "classnames";
import styles from "./RatingIcon.module.scss";

interface Props {
  className?: string;
  rating: number;
}

const getRatingQualityStyle = (rating: number) => {
  if (rating > 8) {
    return styles.ratingIcon_hight;
  }
  if (rating > 7) {
    return styles.ratingIcon_middle;
  }
  return styles.ratingIcon_low;
};

export const RatingIcon: FC<Props> = ({ className, rating }) => {
  const ratingStyle = getRatingQualityStyle(rating);

  return (
    <div className={cn(styles.ratingIcon, ratingStyle, className)}>
      {rating}
    </div>
  );
};
