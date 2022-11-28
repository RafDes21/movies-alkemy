import React, { useEffect } from "react";
import {
  addCategorys,
  allCategorie,
  allMovie,
  adMovies,
} from "../features/thunks/movieThunks";
import { useSelector, useDispatch } from "react-redux";

import "../css/movies.css";
import Card from "../components/Card";
import { Head } from "../components/Head";
import { SerchCategory } from "../components/SerchCategory";

export const Movies = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.movies.category);
  const category = useSelector((state) => state.movies.allCategories);
  const movie = useSelector((state) => state.movies.movie);
  const movies = useSelector((state) => state.movies.movies);
  // console.log(category);

  const token = sessionStorage.getItem("token");

  useEffect(() => {
    dispatch(allCategorie());
    dispatch(allMovie());
    dispatch(adMovies());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const getId = (id) => {
    dispatch(addCategorys(id));
  };
  //  console.log(addId());
  // const addId = (id) => {
  // };
  const title = "Movies";
  return (
    <div className="movieContainer">
      {token ? (
        <div className="movies">
          <Head
            img={movie.backdrop_path}
            name={movie.title}
            description={movie.overview}
          />
          <SerchCategory title={title} cat={category} get={getId} />
          <div className="container">
            <div className="movie-list row">
              {categories.length === 0 ? (
                <>
                  {movies.map((item, index) => (
                    <div className="col-md-2 my-5">
                      <Card
                        key={index}
                        name={item.title}
                        img={item.poster_path}
                        description={item.overview}
                      />
                    </div>
                  ))}
                </>
              ) : (
                <>
                  {categories.map((item, index) => (
                    <div className="col-md-2 my-5">
                      <Card
                        key={index}
                        name={item.title}
                        img={item.poster_path}
                        description={item.overview}
                      />
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
