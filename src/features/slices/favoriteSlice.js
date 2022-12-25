import { createSlice } from "@reduxjs/toolkit";

const favorites = createSlice({
  name: "favorite",
  initialState: {
    favorites: [],
    series:[]
  },
  reducers: {
    addFavorites: (state, actions) => {
      state.favorites = [...state.favorites, actions.payload];
    },
  },
});

export const { addFavorites } = favorites.actions;
export default favorites.reducer;
