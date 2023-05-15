import { FC, useRef } from "react";
import cn from "classnames";
import styles from "./GenreCard.module.scss";

interface Props {
  title: string;
  iconClassName: string;
}

export const GenreCard: FC<Props> = ({ title, iconClassName }) => {
  const ref = useRef(null);

  return (
    <div className={cn(styles.genreCard)}>
      <div ref={ref} className={cn(styles.imageWrapper, iconClassName)}></div>
      <span className={styles.title}>{title}</span>
    </div>
  );
};
