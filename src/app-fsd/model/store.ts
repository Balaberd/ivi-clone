import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { movieApi } from "./movie/movie.api";
import filter from "./filter/filterSlice";

const rootReducer = combineReducers({
  filter,
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
