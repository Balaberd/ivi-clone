import { FC } from "react";
import cn from "classnames";
import { Poster } from "@/shared";
import Link from "next/link";
import { Card } from "@/shared/ui/Card/Card";
import styles from "./MovieCard.module.scss";
import { MovieCardContent } from "./MovieCardContent/MovieCardContent";
import { IMovie } from "../../model/movie.types";

export const MovieCard: FC<IMovie> = ({
  id,
  avatars,
  name,
  genre,
  country,
  ...props
}) => (
  <Link className={styles.movieCard} href={`/movies/${id}`}>
    <Card title={name} subtitle={"Беслпатно"}>
      <Poster classNames={cn(styles.poster)} imageUrl={avatars} title={name}>
        <MovieCardContent
          genre={genre.value}
          country={country.value}
          className={styles.movieProperties}
          {...props}
        />
      </Poster>
    </Card>
  </Link>
);
