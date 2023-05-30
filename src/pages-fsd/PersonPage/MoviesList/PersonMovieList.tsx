import { FC, useState } from "react";
import { IPersonMovies } from "@/entities/person/model/person.types";
import { plural } from "@/shared";
import cn from "classnames";
import styles from "./PersonMovieList.module.scss";
import { PersonMovieItem } from "./MoviesListItem/PersonMovieItem";

interface Props {
  moviesByDirector: IPersonMovies[];
  moviesByActor: IPersonMovies[];
}

export const PersonMovieList: FC<Props> = ({
  moviesByDirector,
  moviesByActor,
}) => {
  const [activeMoviesList, setActiveMoviesList] = useState<
    "all" | "director" | "actor"
  >("all");

  const allMovies = moviesByDirector.concat(moviesByActor);
  const moviesCount = allMovies.length;

  let showedList;
  switch (activeMoviesList) {
    case "actor":
      showedList = moviesByActor;
      break;
    case "director":
      showedList = moviesByDirector;
      break;
    default:
      showedList = allMovies;
  }

  const createOnChangeMActiveMovieListHandler =
    (value: "all" | "director" | "actor") => () => {
      setActiveMoviesList(value);
    };

  return (
    <div className={styles.moviesList} id={"movieListAnchor"}>
      <div className={styles.titleBlock}>
        <span className={styles.title}>Полная фильмография</span>
        <span className={styles.subtitle}>{`${moviesCount} ${plural(
          moviesCount,
          {
            one: "фильм",
            few: "фильма",
            many: "фильмов",
          }
        )}`}</span>
      </div>

      <div className={styles.controlBlock}>
        <button
          onClick={createOnChangeMActiveMovieListHandler("all")}
          className={cn(styles.button, {
            [styles.button_active]: activeMoviesList === "all",
          })}
        >
          Всё
        </button>
        <button
          onClick={createOnChangeMActiveMovieListHandler("director")}
          className={cn(styles.button, {
            [styles.button_active]: activeMoviesList === "director",
          })}
        >
          Режисёр
        </button>
        <button
          onClick={createOnChangeMActiveMovieListHandler("actor")}
          className={cn(styles.button, {
            [styles.button_active]: activeMoviesList === "actor",
          })}
        >
          Исполнитель
        </button>
      </div>

      <div className={styles.list}>
        {showedList.map((movie) => (
          <PersonMovieItem
            key={movie.id}
            id={movie.id}
            avatar={movie.avatars}
            title={movie.name}
            rating={movie.rating}
            year={movie.years}
          />
        ))}
      </div>
    </div>
  );
};
