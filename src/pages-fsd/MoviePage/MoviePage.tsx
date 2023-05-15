import React, { FC, ReactElement } from "react";

interface IMoviePage {
  trailerUrl?: string;
  title: string;
  year: string | number;
  length: string | number;
  ageRating: string | number;
  country: string;
  genres: string;
  rating: string;
  actors: ReactElement | string;
  description?: string;
  reviews?: string[];
}

export const MoviePage: FC<IMoviePage> = () => <div></div>;
