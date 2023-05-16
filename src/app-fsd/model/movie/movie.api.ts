import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IMovie, TMovieQueryParams } from "./movie.types";
import { getUrlParam } from "./lib/getUrlParam";

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
      query: () => "collection/rec",
    }),
    getMovies: build.query<IMovie[], TMovieQueryParams>({
      query: (params) => `/${getUrlParam(params)}`,
    }),
  }),
});

export const {
  useGetMoviesPromoQuery,
  useGetTopMoviesQuery,
  useGetMoviesQuery,
} = movieApi;
