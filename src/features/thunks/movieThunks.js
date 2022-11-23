import { addCategory, allCategories } from "../slices/movieSlice";
import axios from "axios";

export const addCategorys = (id) => {
  return async (dispatch) => {
    const apiFavorite = `https://api.themoviedb.org/3/discover/movie?api_key=e7e16089afd28414ef3120b577232770&page=1&with_genres=${id}&sort_by=popularity.desc`;

    const res = await axios.get(apiFavorite);

    dispatch(addCategory(res.data.results));
  };
};

export const allCategorie = () => {
  return async (dispatch) => {
    const apiCategories = `https://api.themoviedb.org/3/genre/movie/list?api_key=e7e16089afd28414ef3120b577232770&language=en-US`;
    const res = await axios.get(apiCategories)
   
    dispatch(allCategories(res.data.genres))
  };
};
