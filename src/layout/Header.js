import React from "react";
import { Link } from "react-router-dom";
import { MdFavorite } from "react-icons/md";
import "../css/header.css";

//components
import Buscador from "../components/Buscador";

export const Header = (favoritos) => {
  console.log(favoritos.props.length);
  return (
    <header className="header d-flex align-items-center">
      <nav className="container d-flex justify-content-between align-items-center">
        <span>LOGO</span>
        <div className="d-flex gap-5 align-items-center">
          <ul>
            <li>
              <Link className="nav-link" to={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link" to={"/listado"}>
                Listado
              </Link>
            </li>

            <li>
              <Link className="nav-link" to={"/favoritos"}>
                Favoritos
              </Link>
            </li>
          </ul>
          <Buscador />
          <span>
            <MdFavorite /> {favoritos.props.length}
          </span>
        </div>
      </nav>
    </header>
  );
};
