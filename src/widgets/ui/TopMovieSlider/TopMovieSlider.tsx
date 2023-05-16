import { FC } from "react";
import Image from "next/image";
import { TopMovieCard } from "@/entities/movie/ui/TopMovieCard/TopMovieCard";
import { Slider } from "@/shared/ui/Slider/Slider";
import { useGetTopMoviesQuery } from "@/app-fsd/model/movie/movie.api";
import { breakpoints } from "./lib/breakpoints";

export const TopMovieSlider: FC = () => {
  const { data } = useGetTopMoviesQuery({ limit: 10 });

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
      {data &&
        data.map((el, ind) => (
          <TopMovieCard ratingInTop={ind + 1} key={ind} {...el} />
        ))}
    </Slider>
  );
};
