import { FC } from "react";
import { Slider } from "@/shared/ui/Slider/Slider";
import { MovieCard } from "@/entities";
import { useGetMoviesQuery } from "@/app-fsd/model/movie/movie.api";
import { TMovieQueryParams } from "@/app-fsd/model/movie/movie.types";
import { breakpoints } from "./lib/breakpoints";

interface Props {
  params: TMovieQueryParams;
  sliderTitle?: string;
}

export const MovieSlider: FC<Props> = ({ params, sliderTitle }) => {
  const { data } = useGetMoviesQuery(params);

  return (
    <Slider title={sliderTitle} breakpoints={breakpoints} spaceBetween={24}>
      {data && data.map((el, ind) => <MovieCard key={ind} {...el} />)}
    </Slider>
  );
};
