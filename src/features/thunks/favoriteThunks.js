import axios from "axios";
import { addFavorites } from "../slices/favoriteSlice";

export const favorites = (id, cate) => {
  if (cate === "movie") {
    return async (dispatch) => {
      const api = `https://api.themoviedb.org/3/movie/${id}?api_key=e7e16089afd28414ef3120b577232770&language=en-US`;
      const result = await axios(api);
      dispatch(addFavorites(result.data));
    };
  }
  if (cate === "serie") {
    return async (dispatch) => {
      const api = `https://api.themoviedb.org/3/tv/${id}?api_key=e7e16089afd28414ef3120b577232770&language=en-US`;
      const result = await axios(api);
      dispatch(addFavorites(result.data));
    };
  }
};
