import axios from "axios";

import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";

import { BsHeartFill } from "react-icons/bs";
import Slider from "../components/Slider";

const Listado = (props) => {
  const [movies, setMovies] = useState([]);
  const token = sessionStorage.getItem("token");

  

  const url =
    "https://api.themoviedb.org/3/discover/movie?api_key=e7e16089afd28414ef3120b577232770&page=1&sort_by=popularity.desc";

  const lista = async () => {
    try {
      const res = await axios.get(url);
      setMovies(res.data.results);
 
    } catch (error) {
      alert("hubo un error, intenta más tarde");
    }
  };
  useEffect(() => {
    lista();
  }, [setMovies]);

  return (
    <>
      {!token && <Navigate to="/" />}
      <Slider/>
      <div className="container mt-5">
        <div className="row mt-5">
          {movies.map((movie, index) => (
            <div
              className="col-md-4 col-lg-3 col-12 col-sm-6 py-4 mt-5"
              key={index}
            >
              <div className="card">
                <img
                  className="card-img-top"
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                />
                <div className="card-body">
                  <h1>{movie.title.substring(0, 10)}...</h1>
                  <p>{movie.overview.substring(0, 100)}...</p>
                  <Link
                    to={`/detalles/${movie.id}`}
                    className="btn btn-primary"
                  >
                    Click
                  </Link>
                </div>
                <button
                  className="favorite-btn"
                  onClick={props.addRemoveFavorite}
                  data-movie-id={movie.id}
                >
                  <BsHeartFill />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Listado;
