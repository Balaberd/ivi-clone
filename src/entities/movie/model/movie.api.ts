import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IMovie, TMovieQueryParams } from "./movie.types";
import { getQueryParam } from "./lib/helpers/useGetQueryParam";

export const movieApi = createApi({
  reducerPath: "api/movie",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/movies",
  }),
  endpoints: (build) => ({
    getMoviesPromo: build.query<IMovie[], TMovieQueryParams>({
      query: () => "promo",
    }),
    getTopMovies: build.query<IMovie[], TMovieQueryParams>({
      query: () => "/weeklyTop",
    }),
    getMovies: build.query<IMovie[], TMovieQueryParams>({
      query: (params) => `/${getQueryParam(params)}`,
    }),
    getFilm: build.query<IMovie, number>({
      query: (id) => `/film/${id}`,
    }),
  }),
});

export const {
  useGetMoviesPromoQuery,
  useGetTopMoviesQuery,
  useGetMoviesQuery,
  useGetFilmQuery,
} = movieApi;
