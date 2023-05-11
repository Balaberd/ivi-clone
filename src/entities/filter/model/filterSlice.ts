import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ganres: [],
  countries: [],
  years: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeFilter() {},
    resetFilteres() {
      return initialState;
    },
  },
});

export const { changeFilter, resetFilteres } = filterSlice.actions;

export default filterSlice.reducer;
