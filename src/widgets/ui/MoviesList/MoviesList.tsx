import { useGetMoviesQuery } from "@/app-fsd/model/movie/movie.api";
import { FC } from "react";
import { MovieCard } from "@/entities";
import styles from "./MoviesList.module.scss";

export const MoviesList: FC = () => {
  const { data } = useGetMoviesQuery({ limit: 10 });

  return (
    <div className={styles.moviesList}>
      {data && data.map((el, ind) => <MovieCard key={ind} {...el} />)}
    </div>
  );
};
