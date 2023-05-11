import { FC } from "react";
import Image from "next/image";
import cn from "classnames";
import styles from "./GanreCard.module.scss";

interface Props {
  className: string;
}

export const GanreCard: FC<Props> = ({ className }) => (
  <div className={cn(styles.ganreCard, className)}>
    <div className={styles.imageWrapper}>
      <Image />
    </div>
    <span className={styles.title}></span>
  </div>
);
