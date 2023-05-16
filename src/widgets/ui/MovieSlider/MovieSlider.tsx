import { FC } from "react";
import { Slider } from "@/shared/ui/Slider/Slider";
import { MovieCard } from "@/entities";
import { useGetMoviesQuery } from "@/app-fsd/model/movie/movie.api";
import { TMovieQueryParams } from "@/app-fsd/model/movie/movie.types";
import { emptyContent } from "./lib/emptyContent";
import { breakpoints } from "./lib/breakpoints";

interface Props {
  params: TMovieQueryParams;
  sliderTitle?: string;
}

export const MovieSlider: FC<Props> = ({ params, sliderTitle }) => {
  const { data, isLoading } = useGetMoviesQuery(params);

  let movies;
  if (data && data.length > 0) {
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
  } else {
    movies = emptyContent;
  }

  return (
    <Slider
      disabled={isLoading}
      title={sliderTitle}
      breakpoints={breakpoints}
      spaceBetween={24}
    >
      {movies && movies.map((el, ind) => <MovieCard key={ind} {...el} />)}
    </Slider>
  );
};
