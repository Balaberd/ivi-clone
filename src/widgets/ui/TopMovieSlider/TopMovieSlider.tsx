import { FC } from "react";
import Image from "next/image";
import { TopMovieCard } from "@/entities/movie/ui/TopMovieCard/TopMovieCard";
import { Slider } from "@/shared/ui/Slider/Slider";
import { useGetFavoriteMoviesQuery } from "@/app-fsd/model/movie.api";

// const MOCK = {
//   id: 123,
//   imageUrl:
//     "https://thumbs.dfs.ivi.ru/storage4/contents/2/d/e1c28af058ab48874c683e1b18dc72.jpg/304x620//?q=85",
//   title: "Заголовок",
// };

// const MOCKS = new Array(10).fill(MOCK);

const breakpoints = {
  1160: { slidesPerView: 5, slidesPerGroup: 4 },
  880: { slidesPerView: 4, slidesPerGroup: 3 },
  600: { slidesPerView: 3, slidesPerGroup: 2 },
  0: { slidesPerView: 2, slidesPerGroup: 1 },
};

export const TopMovieSlider: FC = () => {
  const { data } = useGetFavoriteMoviesQuery(10);

  let movies;
  if (data) {
    movies = data.map(({ id, avatars, name }) => ({
      id,
      title: name,
      imageUrl: avatars,
    }));
  }

  console.log(movies);

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
