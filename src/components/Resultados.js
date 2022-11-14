import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";


export const Resultados = () => {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");

  //state para la movie
  const [movie, setMovie] = useState([]);

  const keywordSearch = async () => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=e7e16089afd28414ef3120b577232770&language=en-US&page=1&include_adult=false?&query=${keyword}`;
    const res = await axios.get(url);
    const moviesQuery = res.data.results;

    if (moviesQuery.length === 0) {
      alert("Tu busqueda no arrojo resultados")
    }
    setMovie(moviesQuery);
  };

  useEffect(() => {
    try {
      keywordSearch();
      return;
    } catch (error) {
      console.log(error);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);
  return (
    <>
      <div>vas a buscar: {keyword}</div>
      {movie.length === 0 ? (
        <h1>no hubo resultados</h1>
      ) : (
        movie.map((movie, index) => <h1 key={index}>{movie.title}</h1>)
      )}
    </>
  );
};
