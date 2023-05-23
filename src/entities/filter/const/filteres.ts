export type TGenreId =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21;

export type TCountryId =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22;

type TGenreValue = {
  id: TGenreId;
  title: string;
};

type TCountryValue = {
  id: TCountryId;
  title: string;
};

interface IFilterCollection {
  genres: {
    // eslint-disable-next-line no-unused-vars
    [key in TGenreId]: TGenreValue;
  };
  countries: {
    // eslint-disable-next-line no-unused-vars
    [key in TCountryId]: TCountryValue;
  };
}

export const FILTER_COLLECTION: IFilterCollection = {
  genres: {
    1: { id: 1, title: "Драмы" },
    2: { id: 2, title: "Криминал" },
    3: { id: 3, title: "Мультфильмы" },
    4: { id: 4, title: "Фантастика" },
    5: { id: 5, title: "Боевики" },
    6: { id: 6, title: "Комедии" },
    7: { id: 7, title: "Фэнтези" },
    8: { id: 8, title: "Детективы" },
    9: { id: 9, title: "Триллеры" },
    10: { id: 10, title: "Биография" },
    11: { id: 11, title: "Мелодрамы" },
    12: { id: 12, title: "Вестерны" },
    13: { id: 13, title: "Музыкальные" },
    14: { id: 14, title: "Исторические" },
    15: { id: 15, title: "Приключения" },
    16: { id: 16, title: "Аниме" },
    17: { id: 17, title: "Ужасы" },
    18: { id: 18, title: "Мюзиклы" },
    19: { id: 19, title: "Военные" },
    20: { id: 20, title: "Спортивные" },
    21: { id: 21, title: "Семейные" },
  },
  countries: {
    1: { id: 1, title: "Россия" },
    2: { id: 2, title: "США" },
    3: { id: 3, title: "Италия" },
    4: { id: 4, title: "Франция" },
    5: { id: 5, title: "Великобритания" },
    6: { id: 6, title: "СССР" },
    7: { id: 7, title: "Новая Зеландия" },
    8: { id: 8, title: "Германия" },
    9: { id: 9, title: "Турция" },
    10: { id: 10, title: "Япония" },
    11: { id: 11, title: "Корея Южная" },
    12: { id: 12, title: "Австралия" },
    13: { id: 13, title: "Гонконг" },
    14: { id: 14, title: "Украина" },
    15: { id: 15, title: "Дания" },
    16: { id: 16, title: "Канада" },
    17: { id: 17, title: "Швеция" },
    18: { id: 18, title: "Ирландия" },
    19: { id: 19, title: "ЮАР" },
    20: { id: 20, title: "Беларусь" },
    21: { id: 21, title: "Бельгия" },
    22: { id: 22, title: "Испания" },
  },
};
