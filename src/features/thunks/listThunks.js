import axios from "axios";
import {
  addPopular,
  addTheatres,
  addChildren,
  addComedies,
  addTops,
} from "../slices/listSlice";

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

// children
export const addChildrens = () => {
  return async (dispatch) => {
    const api =
      "https://api.themoviedb.org/3/discover/movie?api_key=e7e16089afd28414ef3120b577232770&certification_country=US&certification.lte=G&sort_by=popularity.desc";

    const res = await axios.get(api);
    dispatch(addChildren(res.data.results));
  };
};


// comedies
export const addComedy = () => {
  return async (dispatch) => {
    const api =
      "https://api.themoviedb.org/3/discover/movie?api_key=e7e16089afd28414ef3120b577232770&with_genres=35&with_cast=23659&sort_by=revenue.desc";

    const res = await axios.get(api);
    dispatch(addComedies(res.data.results));
  };
};
// tops
export const addtop = () => {
  return async (dispatch) => {
    const api =
      "https://api.themoviedb.org/3/discover/movie?api_key=e7e16089afd28414ef3120b577232770&primary_release_year=2020&sort_by=popularity.desc";

    const res = await axios.get(api);
    dispatch(addTops(res.data.results));
  };
};