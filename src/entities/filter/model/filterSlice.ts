import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TCountryId, TGenreId } from "../const/filteres";

type TFilter = {
  genre: Array<TGenreId>;
  country: Array<TCountryId>;
  year: number | null;
  rating: number | null;
};

const initialState: TFilter = {
  genre: [],
  country: [],
  year: null,
  rating: null,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    // eslint-disable-next-line consistent-return
    toggleGenreFilter(state: TFilter, action: PayloadAction<TGenreId>) {
      if (state.genre.includes(action.payload)) {
        return {
          ...state,
          genre: state.genre.filter((id) => id !== action.payload),
        };
      }
      state.genre.push(action.payload);
    },
    // eslint-disable-next-line consistent-return
    toggleCountryFilter(state: TFilter, action: PayloadAction<TCountryId>) {
      if (state.country.includes(action.payload)) {
        return {
          ...state,
          country: state.country.filter((id) => id !== action.payload),
        };
      }
      state.country.push(action.payload);
    },
    toggleYearFilter(state: TFilter, action: PayloadAction<number | null>) {
      if (state.year === action.payload) {
        // eslint-disable-next-line no-param-reassign
        state.year = null;
      } else {
        // eslint-disable-next-line no-param-reassign
        state.year = action.payload;
      }
    },
    toggleRatingFilter(state: TFilter, action: PayloadAction<number | null>) {
      if (state.rating === action.payload) {
        // eslint-disable-next-line no-param-reassign
        state.rating = null;
      } else {
        // eslint-disable-next-line no-param-reassign
        state.rating = action.payload;
      }
    },
    resetFilter() {
      return initialState;
    },
  },
});

export const {
  toggleGenreFilter,
  toggleCountryFilter,
  toggleYearFilter,
  toggleRatingFilter,
  resetFilter,
} = filterSlice.actions;
export default filterSlice.reducer;
