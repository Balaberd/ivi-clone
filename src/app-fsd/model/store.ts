import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { filterSlice } from "@/entities";
import { movieApi } from "../../entities/movie/model/movie.api";

const rootReducer = combineReducers({
  filter: filterSlice.reducer,
  [movieApi.reducerPath]: movieApi.reducer,
});

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(movieApi.middleware),
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
