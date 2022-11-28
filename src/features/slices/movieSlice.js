import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    category: [],
    allCategories:[],
    movie:[]
  },
  reducers: {
    addMovies: (state, action) => {
      state.movies = action.payload
    },
    addCategory: (state, action) => {
      state.category = action.payload
    },
    allCategories: (state, action ) => {
      state.allCategories = action.payload
    },
    addMovie: (state, action) => {
      state.movie = action.payload
    }
  },
});

export const {addMovies, addCategory, allCategories, addMovie} =movieSlice.actions
export default movieSlice.reducer;
