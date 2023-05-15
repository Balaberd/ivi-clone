export type TGenre =
  | "favorite"
  | "sport"
  | "biography"
  | "western"
  | "crime"
  | "military"
  | "horror"
  | "detective"
  | "family"
  | "fantasy"
  | "fantastic"
  | "melodramas"
  | "foreign"
  | "adventures"
  | "thriller"
  | "comedy"
  | "drama";

export interface IMoviePromo {
  id: number;
  name: string;
  original_name: string;
  text: string;
  promo: string;
}

export interface IMovieCollection {
  id: number;
  avatars: string;
  name: string;
  original_name: string;
  rating?: number;
  years: string;
  durations: string;
  country: string;
  genre: string;
}
