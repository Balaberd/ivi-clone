import { FC } from "react";
import cn from "classnames";
import Link from "next/link";
import Image from "next/image";
import { Poster } from "../../../../shared/ui/Poster/Poster";
import styles from "./TopMovieCard.module.scss";

interface Props {
  id: number;
  title: string;
  imageUrl: string;
  className?: string;
  ratingInTop: number;
}

export const TopMovieCard: FC<Props> = ({
  id,
  className,
  imageUrl,
  title,
  ratingInTop,
}) => (
  <Link href={`/movies/${id}`}>
    <Poster
      classNames={cn(styles.poster, className)}
      imageUrl={imageUrl}
      title={title}
    >
      <div className={styles.content}>
        <h4 className={styles.title}>{title}</h4>
      </div>
    </Poster>
    <div className={styles.imageWrapper}>
      <Image
        className={styles.number}
        src={`https://solea-parent.dfs.ivi.ru/picture/bypass/number${ratingInTop}.svg`}
        alt="num"
        fill
      />
    </div>
  </Link>
);
