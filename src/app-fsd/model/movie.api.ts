import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IMovieBySlider } from "./movie.types";

export const movieApi = createApi({
  reducerPath: "api/products",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/movies/",
  }),
  endpoints: (build) => ({
    getBannerData: build.query<IMovieBySlider[], number>({
      query: () => "carousel",
    }),
    getMovieSlider: build.query<IMovieBySlider[], number>({
      query: () => "rec",
    }),
  }),
});

export const { useGetBannerDataQuery, useGetMovieSliderQuery } = movieApi;
