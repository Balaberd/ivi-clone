import { FC } from "react";
import Image from "next/image";
import { TopMovieCard } from "@/entities/movie/ui/TopMovieCard/TopMovieCard";
import { Slider } from "@/shared/ui/Slider/Slider";
import { useGetTopMoviesQuery } from "@/app-fsd/model/movie/movie.api";
import { breakpoints } from "./lib/breakpoints";

export const TopMovieSlider: FC = () => {
  const { data } = useGetTopMoviesQuery({ limit: 10 });

  let movies;
  if (data) {
    movies = data.map(({ id, avatars, name }) => ({
      id,
      title: name,
      imageUrl: avatars,
    }));
  }

  const title = (
    <>
      <Image
        src="https://solea-parent.dfs.ivi.ru/picture/bypass/top10.svg"
        alt="top-10 logo"
        width={116}
        height={28}
      />
      за неделю
    </>
  );
  return (
    <Slider title={title} breakpoints={breakpoints} spaceBetween={24}>
      {movies &&
        movies.map((el, ind) => (
          <TopMovieCard ratingInTop={ind + 1} key={ind} {...el} />
        ))}
    </Slider>
  );
};
