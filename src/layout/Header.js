import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdFavorite } from "react-icons/md";
import logo from "../assets/lodupli.png";
import { useNavigate } from "react-router-dom";
import "../css/header.css";

//components
import Buscador from "../components/Buscador";
import { SignOff } from "../components/SignOff";

export const Header = (favoritos) => {
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
                  Inicio
                </Link>
              </li>
              <li>
                <Link className="nav-link" to={"/movies"}>
                  Películas
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
            <div className="d-flex gap-5 align-items-center">
              <Buscador />
              <span>
                <MdFavorite /> {favoritos.props.length}
              </span>
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
