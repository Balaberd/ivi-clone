import { FC } from "react";
import { Slider } from "@/shared/ui/Slider/Slider";
import { MovieCard } from "@/entities";
import { useGetMoviesQuery } from "@/entities/movie/model/movie.api";
import { TMovieQueryParams } from "@/entities/movie/model/movie.types";
import { breakpoints } from "./lib/breakpoints";

interface Props {
  params: TMovieQueryParams;
  sliderTitle?: string;
}

export const MovieSlider: FC<Props> = ({ params, sliderTitle }) => {
  const { data } = useGetMoviesQuery(params);

  return (
    <Slider title={sliderTitle} breakpoints={breakpoints} spaceBetween={24}>
      {data && data.map((movie) => <MovieCard key={movie.id} {...movie} />)}
    </Slider>
  );
};
