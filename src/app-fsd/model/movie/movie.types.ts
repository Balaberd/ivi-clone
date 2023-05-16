export type TMovieQueryParams = {
  limit?: number;
  genre?: number;
  country?: number;
  rating?: number;
};

type TPerson = {
  id: number;
  name: string;
};

interface TCountry {
  id: number;
  value: string;
}

interface TGenre {
  id: number;
  value: string;
}

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
}
