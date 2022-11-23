import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    category: [],
    allCategories:[]
  },
  reducers: {
    addMovies: () => {},
    addCategory: (state, action) => {
      state.category = action.payload
    },
    allCategories: (state, action ) => {
      state.allCategories = action.payload
    }
  },
});

export const {addMovies, addCategory, allCategories} =movieSlice.actions
export default movieSlice.reducer;
