import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import "../css/resultado.css";
import Card from "./Card";
import serch from '../assets/serch.png'
import tablet from "../assets/tablet.jpg"

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
    <div className="not">
    <div className="container results">
      <h2>
        Resultados de tu busqueda:
        {movie.length === 0 ? "no hay resultados" : keyword}
      </h2>
      <div className="row">
        {movie.length === 0 ? (
          <div className="sinResults">
            <img className="off" src={serch} alt='sin results'/>
            <h1>No se encontró lo que buscabas</h1>
            <img className="tablet" src={tablet} alt='tablet'/>
          </div>
        ) : (
          movie.map((movie, index) => (
            <div className="col-6 col-sm-6 col-md-4 col-lg-3 my-5 d-flex justify-content-center my-2">
              <Card key={index} name={movie.title} img={movie.poster_path} />
            </div>
          ))
        )}
      </div>
    </div>
    </div>
  );
};
