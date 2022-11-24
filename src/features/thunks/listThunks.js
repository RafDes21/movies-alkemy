import axios from "axios";
import { addPopular, addTheatres } from "../slices/listSlice";

// popular
export const addPopulars = () => {
  return async (dispatch) => {
    const api =
      "https://api.themoviedb.org/3/discover/movie?api_key=e7e16089afd28414ef3120b577232770&sort_by=popularity.desc";

    const res = await axios.get(api);
    dispatch(addPopular(res.data.results));
  };
};

// theatres
export const addTheatress = () => {
    return async (dispatch) => {
      const api =
        "https://api.themoviedb.org/3/discover/movie?api_key=e7e16089afd28414ef3120b577232770&primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22";
  
      const res = await axios.get(api);
      dispatch(addTheatres(res.data.results));
    };
  };
  
