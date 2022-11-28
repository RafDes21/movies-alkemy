import { addSeries, aSerie, idCategory, categorySeries} from "../slices/serieSilce";
import axios from "axios";



// category serie
export const categories = (id) => {
  return async (dispatch) => {
    const apiFavorite = `https://api.themoviedb.org/3/discover/tv?api_key=e7e16089afd28414ef3120b577232770&page=1&with_genres=${id}&sort_by=popularity.desc`;

    const res = await axios.get(apiFavorite);

    dispatch(categorySeries(res.data.results));
  };
};

//id serie
export const idCategories = () => {
  return async (dispatch) => {
    const apiCategories = `https://api.themoviedb.org/3/genre/tv/list?api_key=e7e16089afd28414ef3120b577232770&language=en-US`;
    const res = await axios.get(apiCategories);

    dispatch(idCategory(res.data.genres));
  };
};


// list of series
export const addSerie = () => {
  return async (dispatch) => {
    const apiFavorite = `https://api.themoviedb.org/3/tv/popular?api_key=e7e16089afd28414ef3120b577232770&language=en-US&page=1`;

    const res = await axios.get(apiFavorite);

    dispatch(addSeries(res.data.results));
  };
};

// a serie
export const aSeries = (id) => {
  return async (dispatch) => {
    const ran = Math.round(Math.random() * 20);

    const api = `https://api.themoviedb.org/3/tv/popular?api_key=e7e16089afd28414ef3120b577232770&language=en-US&page=1`;
    const result = await axios.get(api);

    const item = result.data.results[ran];

    const apiFavorite = `https://api.themoviedb.org/3/tv/${item.id}?api_key=e7e16089afd28414ef3120b577232770&language=en-US`;

    const res = await axios.get(apiFavorite);

    dispatch(aSerie(res.data));
  };
};
