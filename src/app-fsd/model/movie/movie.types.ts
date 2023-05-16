type TPerson = {
  id: number;
  name: string;
};

export interface IMovie {
  id: number;
  avatars: string;
  name: string;
  original_name: string;
  rating: number;
  years: string;
  durations: string;
  country: string;
  genre: string;
  promo?: string;
  text: string;
  director_id: number;
  director: TPerson[];
  actors: TPerson[];
}

export type TMovieQueryParams = {
  limit?: number;
  genre?: string;
  country?: string;
  rating?: number;
};
