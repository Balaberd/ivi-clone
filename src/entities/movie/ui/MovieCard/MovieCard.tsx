import { FC } from "react";
import cn from "classnames";
import { Poster } from "@/shared";
import Link from "next/link";
import { Card } from "@/shared/ui/Card/Card";
import styles from "./MovieCard.module.scss";
import { MovieCardContent } from "./MovieCardContent/MovieCardContent";

interface Props {
  id: number;
  imageUrl: string;
  rating: number;
  years: string;
  genre: string;
  country: string;
  title: string;
  durations: string;
}

export const MovieCard: FC<Props> = ({ id, imageUrl, title, ...props }) => (
  <Link className={styles.movieCard} href={`/movies/${id}`}>
    <Card title={title} subtitle={"Беслпатно"}>
      <Poster
        classNames={cn(styles.poster)}
        imageUrl={`https://${imageUrl}`}
        title={title}
      >
        <MovieCardContent className={styles.movieProperties} {...props} />
      </Poster>
    </Card>
  </Link>
);
