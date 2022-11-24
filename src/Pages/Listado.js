import axios from "axios";

import { useEffect, useRef, useState } from "react";
import { Link, Navigate } from "react-router-dom";

import { BsHeartFill } from "react-icons/bs";
import Slider from "../components/Slider";
import { MdOutlineArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";
import "../css/listado.css";

// redux
import { useSelector, useDispatch } from "react-redux";
import { addPopulars, addTheatress } from "../features/thunks/listThunks";
import { Cards } from "../components/Cards";

const Listado = (props) => {
  const dispatch = useDispatch();
  const listPopular = useSelector((state) => state.list.popular);
  const listTheatres = useSelector((state) => state.list.theatres);
  const slider = useRef("");
  const slider1 = useRef("");
  const ar = listPopular.length;
  console.log(ar);

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
    dispatch(addPopulars());
    dispatch(addTheatress());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setMovies]);

  const previus = (name) => {
    const item = name.current.children.length;
    const latest = name.current.children[item - 1];
    name.current.insertBefore(latest, name.current.firstChild);
    name.current.style.transition = "none";

    const size = name.current.children[0].offsetWidth;
    name.current.style.transform = `translateX(-${size}px)`;

    setTimeout(() => {
      name.current.style.transition = `500ms ease-out all`;
      name.current.style.transform = `translateX(0)`;
    }, 30);
  };
  const next = (name) => {
    const item = name.current.children[0];
    console.log(item);
    name.current.style.transition = `500ms ease-out all`;
    const size = name.current.children[0].offsetWidth;
    name.current.style.transform = `translateX(-${size}px)`;
    const transition = () => {
      name.current.style.transition = "none";
      name.current.style.transform = "translateX(0)";
      name.current.appendChild(item);
    };

    name.current.addEventListener("transitionend", transition);
  };

  return (
    <div className="listado">
      {!token && <Navigate to="/" />}
      <Slider />
      <div className="container list-groups">
        <div className="section">
          <h3>Popular</h3>
          <div ref={slider} className="contain-cards">
            {listPopular.map((item, index) => (
              <Cards key={index} name={item.title} img={item.backdrop_path} />
            ))}
          </div>

          <MdArrowBackIosNew
            onClick={() => previus(slider)}
            className="arrow arrow-left"
          />
          <MdOutlineArrowForwardIos
            onClick={() => next(slider)}
            className="arrow arrow-right"
          />
        </div>
        <div className="section">
          <h3>Theatres</h3>
          <div ref={slider1} className="contain-cards">
            {listTheatres.map((item, index) => (
              <Cards key={index} name={item.title} img={item.backdrop_path} />
            ))}
          </div>
          <MdArrowBackIosNew
            onClick={() => previus(slider1)}
            className="arrow arrow-left"
          />
          <MdOutlineArrowForwardIos
            onClick={() => next(slider1)}
            className="arrow arrow-right"
          />
        </div>
      </div>

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
    </div>
  );
};

export default Listado;
