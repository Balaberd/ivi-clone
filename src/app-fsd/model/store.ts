import { configureStore } from "@reduxjs/toolkit";
import { movieApi } from "./movie.api";

export const store = configureStore({
  reducer: { [movieApi.reducerPath]: movieApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApi.middleware),
});

export type TypeRootState = ReturnType<typeof store.getState>;

// setupListeners(store.dispatch);
