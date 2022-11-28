import { addCategory, allCategories, addMovie, addMovies } from "../slices/movieSlice";
import axios from "axios";

// category
export const addCategorys = (id) => {
  return async (dispatch) => {
    const apiFavorite = `https://api.themoviedb.org/3/discover/movie?api_key=e7e16089afd28414ef3120b577232770&page=1&with_genres=${id}&sort_by=popularity.desc`;

    const res = await axios.get(apiFavorite);

    dispatch(addCategory(res.data.results));
  };
};

//id movie
export const allCategorie = () => {
  return async (dispatch) => {
    const apiCategories = `https://api.themoviedb.org/3/genre/movie/list?api_key=e7e16089afd28414ef3120b577232770&language=en-US`;
    const res = await axios.get(apiCategories);

    dispatch(allCategories(res.data.genres));
  };
};

// movie
export const allMovie = (id) => {
  return async (dispatch) => {
    const ran = Math.round(Math.random() * 19);

    const api = `https://api.themoviedb.org/3/genre/movie/list?api_key=e7e16089afd28414ef3120b577232770&language=en-US`;
    const res = await axios.get(api);

    const category = `https://api.themoviedb.org/3/discover/movie?api_key=e7e16089afd28414ef3120b577232770&page=1&with_genres=${res.data.genres[ran].id}&sort_by=popularity.desc`;
    const result = await axios.get(category);

    dispatch(addMovie(result.data.results[ran]));
  };
};

//movies popular

// popular
export const adMovies = () => {
  return async (dispatch) => {
    const api =
      "https://api.themoviedb.org/3/discover/movie?api_key=e7e16089afd28414ef3120b577232770&page=2&sort_by=popularity.desc";

    const res = await axios.get(api);
    dispatch(addMovies(res.data.results));
  };
};
