import { FC } from "react";
import { Slider } from "@/shared/ui/Slider/Slider";
import { MovieCard } from "@/entities";
import { useGetMovieCollectionQuery } from "@/app-fsd/model/movie.api";
import { TGenre } from "@/app-fsd/model/movie.types";

const breakpoints = {
  1280: { slidesPerView: 7, slidesPerGroup: 6 },
  1096: { slidesPerView: 6, slidesPerGroup: 5 },
  930: { slidesPerView: 5, slidesPerGroup: 4 },
  745: { slidesPerView: 4, slidesPerGroup: 3 },
  0: { slidesPerView: 3, slidesPerGroup: 2 },
};

interface Props {
  genre: TGenre;
}

const GENRE_TRANSLETE_MAP = {
  sport: "Спорт",
  biography: "Биорграфии",
  western: "Вестерны",
  crime: "Криминал",
  military: "Военные",
  horror: "Ужасы",
  detective: "Детективы",
  family: "Семейные",
  fantasy: "Фэнтези",
  fantastic: "Фантастика",
  melodramas: "Мелодрамы",
  foreign: "Зарубежные",
  adventures: "Приключенческие",
  thriller: "Триллеры",
  comedy: "Комедии",
  drama: "Драмы",
};

export const MovieSlider: FC<Props> = ({ genre }) => {
  const { data, isLoading } = useGetMovieCollectionQuery(genre);

  let movies;
  if (!isLoading) {
    movies = new Array(10).fill({
      id: "",
      rating: 0,
      years: "",
      genre: "",
      country: "",
      title: "",
      durations: "",
    });
  }

  if (data) {
    movies = data.map(
      ({ id, avatars, name, rating, years, durations, country, genre }) => ({
        id,
        imageUrl: avatars,
        rating,
        years,
        genre,
        country,
        title: name,
        durations,
      })
    );
  }

  return (
    <Slider
      title={GENRE_TRANSLETE_MAP[genre]}
      breakpoints={breakpoints}
      spaceBetween={24}
    >
      {movies && movies.map((el, ind) => <MovieCard key={ind} {...el} />)}
    </Slider>
  );
};
