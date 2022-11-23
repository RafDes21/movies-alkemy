import React, { useEffect, useState } from "react";
import { addCategorys, allCategorie } from "../features/thunks/movieThunks";
import { useSelector, useDispatch } from "react-redux";
import { BiDownArrow } from "react-icons/bi";
import "../css/movies.css";
import Card from "../components/Card";

export const Movies = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.movies.category);
  const category = useSelector((state) => state.movies.allCategories);
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    dispatch(allCategorie());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addOpen = () => {
    setOpen(!open);
  };
  const addId = (id) => {
    dispatch(addCategorys(id));
  };

  return (
    <>
      {token ? (
        <div className="movies">
          <div className="container">
            <div className="categories d-flex gap-5 align-items-center">
              <span className="categories-title">Películas</span>
              <span onClick={addOpen} className="categories-search">
                Géneros <BiDownArrow />
              </span>
              <ul
                className="categories-list"
                style={{ height: open ? "220px" : "" }}
              >
                {category.map((cat, index) => (
                  <li onClick={addOpen} key={index}>
                    <span onClick={() => addId(cat.id)}>{cat.name}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="movie-list row">
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
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
