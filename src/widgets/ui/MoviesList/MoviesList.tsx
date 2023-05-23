import { useGetMoviesQuery } from "@/entities/movie/model/movie.api";
import { FC } from "react";
import { MovieCard } from "@/entities";
import { useAppSelector } from "@/app-fsd/model/hooks/redux";
import styles from "./MoviesList.module.scss";

export const MoviesList: FC = () => {
  const { filter } = useAppSelector((state) => state);
  const { data } = useGetMoviesQuery(filter);

  return (
    <div className={styles.moviesList}>
      {data && data.map((movie) => <MovieCard key={movie.id} {...movie} />)}
    </div>
  );
};
