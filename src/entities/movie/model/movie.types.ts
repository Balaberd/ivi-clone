import { TCountryId, TGenreId } from "@/entities/filter/const/filteres";

export type TMovieQueryParams = {
  limit?: number;
  genre?: Array<TGenreId>;
  country?: Array<TCountryId>;
  rating?: number | null;
  year?: number | null;
};

export type TPerson = {
  id: number;
  // name: string;
  avatar: string;
  full_name: string;
  full_name_EN: string;
  description: string;
  description_EN: string;
  DOB: string;
};

export interface ICountry {
  id: TCountryId;
  value: string;
  value_EN: string;
}

export interface IGenre {
  id: TGenreId;
  value: string;
  value_EN: string;
}

export interface IMovie {
  id: number;
  avatars: string;
  name: string;
  original_name: string;
  rating: number;
  years: string;
  durations: string;
  description: string;
  description_EN: string;
  ageLimit: number;
  count_rating: number;
  actors: TPerson[];
  director: TPerson;
  genre: IGenre;
  country: ICountry;
  posts?: Array<any>;
}

// OLD VERSION SAVE
// export interface IMovie {
//   id: number;
//   avatars: string;
//   name: string;
//   original_name: string;
//   rating: number;
//   years: string;
//   durations: string;
//   country: TCountry;
//   genre: TGenre;
//   promo?: string;
//   text: string;
//   director_id: number;
//   director: TPerson[];
//   actors: TPerson[];
//   ageLimit: TAgeLimit;
// }
