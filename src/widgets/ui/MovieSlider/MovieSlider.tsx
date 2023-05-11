import { FC } from "react";
import { Slider } from "@/shared/ui/Slider/Slider";
import { MovieCard } from "@/entities";
import { useGetMovieSliderQuery } from "@/app-fsd/model/movie.api";

const breakpoints = {
  1280: { slidesPerView: 7, slidesPerGroup: 6 },
  1096: { slidesPerView: 6, slidesPerGroup: 5 },
  930: { slidesPerView: 5, slidesPerGroup: 4 },
  745: { slidesPerView: 4, slidesPerGroup: 3 },
  0: { slidesPerView: 3, slidesPerGroup: 2 },
};

export const MovieSlider: FC = () => {
  const { data } = useGetMovieSliderQuery(5);

  let movies;
  if (data) {
    movies = data.map(
      ({ id, avatars, rating, years, genre, country, name, durations }) => ({
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
    <Slider breakpoints={breakpoints} spaceBetween={24}>
      {movies && movies.map((el, ind) => <MovieCard key={ind} {...el} />)}
    </Slider>
  );
};
