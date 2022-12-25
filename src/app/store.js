import { configureStore } from "@reduxjs/toolkit";
import stateReducer from "../features/slices/stateSlice";
import movieReducer from "../features/slices/movieSlice";
import listReducer from "../features/slices/listSlice";
import serieReducer from "../features/slices/serieSilce";
import favoriteSlice from "../features/slices/favoriteSlice";

export const store = configureStore({
  reducer: {
    profile: stateReducer,
    movies: movieReducer,
    list: listReducer,
    series: serieReducer,
    favorites: favoriteSlice,
  },
});
