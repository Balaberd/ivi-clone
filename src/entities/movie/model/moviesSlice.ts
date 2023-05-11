import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  banner: [
    {
      id: 1,
      title: "Нюрнберг1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo sed fugit distinctio cupiditate dolorum illum, eaque neque!",
      imageUrl:
        "thumbs.dfs.ivi.ru/storage5/contents/f/6/e9a5c19056bd6b9826c35733be0a5a.jpg/1216x524/?q=85",
    },
    {
      id: 2,
      title: "Нюрнберг2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo sed fugit distinctio cupiditate dolorum illum, eaque neque!",
      imageUrl:
        "thumbs.dfs.ivi.ru/storage5/contents/f/6/e9a5c19056bd6b9826c35733be0a5a.jpg/1216x524/?q=85",
    },
    {
      id: 3,
      title: "Нюрнберг3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo sed fugit distinctio cupiditate dolorum illum, eaque neque!",
      imageUrl:
        "thumbs.dfs.ivi.ru/storage5/contents/f/6/e9a5c19056bd6b9826c35733be0a5a.jpg/1216x524/?q=85",
    },
  ],
  selections: {
    top: [
      {
        id: 11,
        imageUrl:
          "avatars.mds.yandex.net/get-kinopoisk-image/6201401/022a58e3-5b9b-411b-bfb3-09fedb700401/72x108",
        title: "Один дома",
        rating: 8.3,
        years: "1990",
        durations: "103 мин",
        country: "США",
        genre: "комедия",
      },
      {
        id: 11,
        imageUrl:
          "avatars.mds.yandex.net/get-kinopoisk-image/6201401/022a58e3-5b9b-411b-bfb3-09fedb700401/72x108",
        title: "Один дома",
        rating: 8.3,
        years: "1990",
        durations: "103 мин",
        country: "США",
        genre: "комедия",
      },
      {
        id: 11,
        imageUrl:
          "avatars.mds.yandex.net/get-kinopoisk-image/6201401/022a58e3-5b9b-411b-bfb3-09fedb700401/72x108",
        title: "Один дома",
        rating: 8.3,
        years: "1990",
        durations: "103 мин",
        country: "США",
        genre: "комедия",
      },
    ],
  },
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    getBannerMovies(state, action) {
      console.log(
        "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! REDUX !!!!!!!!!!!!!!!!!!!!!!!!!!"
      );
      state.banner = action.payload;
    },
    getSliderMovies(state, action) {
      state.selections.top = action.payload;
    },
  },
});

export const { getBannerMovies, getSliderMovies } = moviesSlice.actions;

export default moviesSlice.reducer;
