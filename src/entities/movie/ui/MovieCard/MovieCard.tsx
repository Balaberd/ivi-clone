import { FC } from "react";
import cn from "classnames";
import { Poster } from "@/shared";
import Link from "next/link";
import { Card } from "@/shared/ui/Card/Card";
import styles from "./MovieCard.module.scss";
import { MovieCardContent } from "./MovieCardContent/MovieCardContent";

interface Props {
  id: number;
  avatars: string;
  rating: number;
  years: string;
  genre: string;
  country: string;
  name: string;
  durations: string;
}

export const MovieCard: FC<Props> = ({ id, avatars, name, ...props }) => (
  <Link className={styles.movieCard} href={`/movies/${id}`}>
    <Card title={name} subtitle={"Беслпатно"}>
      <Poster
        classNames={cn(styles.poster)}
        imageUrl={`https://${avatars}`}
        title={name}
      >
        <MovieCardContent className={styles.movieProperties} {...props} />
      </Poster>
    </Card>
  </Link>
);
