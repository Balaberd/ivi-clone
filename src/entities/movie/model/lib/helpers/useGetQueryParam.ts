import { TMovieQueryParams } from "../../movie.types";

export const getQueryParam = ({
  country = [],
  genre = [],
  year = null,
  rating = null,
}: TMovieQueryParams): string => {
  const countrySlice = country.length ? `&country=${country}` : "";
  const genreSlice = genre.length ? `&genre=${genre}` : "";
  const yearSlice = year ? `&years=${year}` : "";
  const ratingSlice = rating ? `&rating=${rating}` : "";
  return `?page=1${countrySlice}${genreSlice}${yearSlice}${ratingSlice}`;
};
