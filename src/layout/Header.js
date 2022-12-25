import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdFavorite } from "react-icons/md";
import logo from "../assets/lodupli.png";
import { useNavigate } from "react-router-dom";
import "../css/header.css";

//components
import Buscador from "../components/Buscador";
import { SignOff } from "../components/SignOff";
import { Favoritos } from "../components/Favoritos";

import { useSelector } from "react-redux";

export const Header = (favoritos) => {
  const favorites = useSelector((state) => state.favorites.favorites);
  const [favorite, setFavorite] = useState(false);
  const [dinamic, setdinamic] = useState(false);
  const token = sessionStorage.getItem("token");
  const navigate = useNavigate();

  window.addEventListener("scroll", () => {
    const ejeY = window.scrollY;
    if (ejeY > 30) {
      return setdinamic(true);
    } else {
      setdinamic(false);
    }
  });

  const show = () => {
    setFavorite(!favorite);
  };

  return (
    <header
      className="header d-flex align-items-center"
      style={{ background: dinamic ? "#141414" : "" }}
    >
      <nav className="container d-flex justify-content-between align-items-center">
        <img className="logo" src={logo} alt="logoIsra" />
        {token ? (
          <div className="d-flex">
            <ul>
              <li>
                <Link className="nav-link" to={"/listado"}>
                  Home
                </Link>
              </li>
              <li>
                <Link className="nav-link" to={"/series"}>
                  Series
                </Link>
              </li>
              <li>
                <Link className="nav-link" to={"/movies"}>
                  Películas
                </Link>
              </li>
            </ul>
            <div className="d-flex gap-3 align-items-center">
              <div className="mobile">
                <Buscador />
              </div>
              <span className="header-favorite" onClick={show}>
                <MdFavorite /> {favorites.length}
              </span>

              <div
                className="header-favorites__list"
                style={{ height: favorite ? "200px" : "" }}
              >
                <Favoritos />
              </div>
            </div>
            <SignOff navigate={navigate} />
          </div>
        ) : (
          <></>
        )}
      </nav>
    </header>
  );
};
