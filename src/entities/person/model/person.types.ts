import { IGenre, ICountry } from "@/entities/movie/model/movie.types";

export interface IPersonMovies {
  id: number;
  avatars: string;
  name: string;
  original_name: string;
  rating: number;
  years: string;
  durations: string;
  country: ICountry;
  genre: IGenre;
}

export interface IPersonValue {
  id: number;
  avatar: string;
  full_name: string;
  full_name_EN: string;
  description: string;
  description_EN: string;
  DOB: string;
  movies: IPersonMovies[];
}

export interface IPerson {
  person: IPersonValue;
  movies: IPersonMovies[];
}
