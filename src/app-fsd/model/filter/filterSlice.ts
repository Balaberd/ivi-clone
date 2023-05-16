import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  genres: ["AAAAAAAA", "BBBBBBBB"],
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeFilter() {
      return initialState;
    },
  },
});

export const { changeFilter } = filterSlice.actions;
export default filterSlice.reducer;
