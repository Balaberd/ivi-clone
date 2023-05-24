import { TCountryId, TGenreId } from "@/entities/filter/const/filteres";

export type TMovieQueryParams = {
  limit?: number;
  genre?: Array<TGenreId>;
  country?: Array<TCountryId>;
  rating?: number | null;
  year?: number | null;
};

type TPerson = {
  id: number;
  name: string;
};

interface TCountry {
  id: TCountryId;
  value: string;
}

interface TGenre {
  id: TGenreId;
  value: string;
}

type TAgeLimit = 6 | 12 | 16 | 18;

export interface IMovie {
  id: number;
  avatars: string;
  name: string;
  original_name: string;
  rating: number;
  years: string;
  durations: string;
  country: TCountry;
  genre: TGenre;
  promo?: string;
  text: string;
  director_id: number;
  director: TPerson[];
  actors: TPerson[];
  ageLimit: TAgeLimit;
}
