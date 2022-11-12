import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import swal from "@sweetalert/with-react";
import { BsHeartFill } from "react-icons/bs";

const Listado = (props) => {
  const [movies, setMovies] = useState([]);
  const token = sessionStorage.getItem("token");

  console.log(props);

  const url =
    "https://api.themoviedb.org/3/discover/movie?api_key=e7e16089afd28414ef3120b577232770&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";

  const lista = async () => {
    try {
      const res = await axios.get(url);
      setMovies(res.data.results);
    } catch (error) {
      swal(<h3>hubo un error, intenta más tarde</h3>);
    }
  };
  useEffect(() => {
    lista();
  }, [setMovies]);

  return (
    <>
      {!token && <Navigate to="/" />}
      <div className="container mt-5">
        <div className="row mt-5">
          {movies.map((movie, index) => (
            <div className="col-md-4 col-lg-3 col-12 col-sm-6 py-4 mt-5" key={index}>
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
                <button className="favorite-btn" onClick={props.addRemoveFavorite} data-movie-id = {movie.id}>
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
