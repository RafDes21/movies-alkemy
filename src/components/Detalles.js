import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Navigate, useParams } from "react-router-dom";


const Detalles = () => {
  const [movie, setMovie] = useState([]);
  const token = sessionStorage.getItem("token");
  const params = useParams();

  const item = async () => {
    try {
      const url = `https://api.themoviedb.org/3/movie/${params.id}?api_key=e7e16089afd28414ef3120b577232770&language=en-US`;
      const res = await axios.get(url);
      setMovie(res.data);
      console.log(res.data);
    } catch (error) {
     alert("pelicula no encontrada")
    }
  };
  useEffect(() => {
    item();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="container">
      {!token && <Navigate to={"/"} />}
      <h2>{movie.title}</h2>
      <div className="row">
        <div className="col-4">
          <img
          className="img-fluid"
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
        <div className="col-8">
          <h5>Fecha de Estreno: {movie.release_date}</h5>
          <p>{movie.overview}</p>
          <ul>
            { movie.genres?.map((genre, index) => (
              <li key={index}>{genre.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Detalles;
