import { FC } from "react";
import cn from "classnames";
import { Poster } from "@/shared";
import Link from "next/link";
import styles from "./BannerCard.module.scss";

interface Props {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  className?: string;
  isLoading?: boolean;
}

export const BannerCard: FC<Props> = ({
  id,
  className,
  imageUrl,
  title,
  description,
}) => (
  <Link href={`/movies/${id}`}>
    <Poster
      classNames={cn(styles.poster, className)}
      imageUrl={`https://${imageUrl}`}
      title={title}
    >
      <div className={styles.content}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.description}>{description}</p>
        <div className={styles.button}>Смотреть бесплатно</div>
      </div>
    </Poster>
  </Link>
);
