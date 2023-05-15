import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IMovieCollection, IMoviePromo, TGenre } from "./movie.types";

export const movieApi = createApi({
  reducerPath: "api/products",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/movies/",
  }),
  endpoints: (build) => ({
    getMoviesPromo: build.query<IMoviePromo[], number>({
      query: () => "promo",
    }),
    getMovieCollection: build.query<IMovieCollection[], number>({
      query: (genre: TGenre) => `collection/genre/${genre}`,
    }),
    getFavoriteMovies: build.query<IMovieCollection[], number>({
      query: () => "collection/rec",
    }),
  }),
});

export const {
  useGetMoviesPromoQuery,
  useGetMovieCollectionQuery,
  useGetFavoriteMoviesQuery,
} = movieApi;
