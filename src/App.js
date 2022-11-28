import React, {useEffect, useState} from "react";
import { Routes, Route } from "react-router-dom";

//components
import Listado from "./Pages/Listado";
import Login from "./components/Login";
import { Layout } from "./layout/Layout";
import Detalles from "./components/Detalles";
import { Resultados } from "./components/Resultados";
import { Favoritos } from "./components/Favoritos";

//styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/app.css";
import Perfil from "./components/Perfil";
import { Movies } from "./Pages/Movies";
import Series from "./Pages/Series";

function App() {

  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    const fvs = localStorage.getItem("favs");

    if (fvs !== null) {
      const fvsArray = JSON.parse(fvs);
      setFavoritos(fvsArray);
     
    }
  }, []);


  const addRemoveFavorite = (e) => {
    const favMovies = localStorage.getItem("favs");

    let tempMoviesInFavs;

    if (favMovies === null) {
      tempMoviesInFavs = [];
    } else {
      tempMoviesInFavs = JSON.parse(favMovies);
    }
    const btn = e.currentTarget;
    const parents = btn.parentElement;
    console.log(parents);
    const imgURL = parents.querySelector("img").getAttribute("src");
    const title = parents.querySelector("h1").innerText;
    const overview = parents.querySelector("p").innerText;

    const movieData = {
      imgURL,
      title,
      overview,
      id: btn.dataset.movieId,
    };
    let movieIsInArray = tempMoviesInFavs.find((oneMovie) => {
      return oneMovie.id === movieData.id;
    });
    if (!movieIsInArray) {
      tempMoviesInFavs.push(movieData);
      localStorage.setItem("favs", JSON.stringify(tempMoviesInFavs));
      setFavoritos(tempMoviesInFavs);
      console.log("agregado");
    } else {
      let movieLeft = tempMoviesInFavs.filter((oneMovie) => {
        return oneMovie.id !== movieData.id;
      });

      localStorage.setItem("favs", JSON.stringify(movieLeft));
      setFavoritos(movieLeft);
      console.log("eliminado");
    }
  };
  return (
    <>
      <Routes>
          <Route path="/perfiles" element={<Perfil/>} />
        <Route path="/" element={<Layout favoritos = {favoritos} />}>
          <Route index element={<Login />} />
          <Route path="/movies" element={<Movies/>}/>
          <Route path="/series" element={<Series/>}/>
          <Route path="/listado" element={<Listado addRemoveFavorite={addRemoveFavorite} />}/>
          <Route path="/resultados" element={<Resultados />} />
          <Route path="/favoritos" element={<Favoritos favoritos = {favoritos} addRemoveFavorite = {addRemoveFavorite} />} />
          {/* <Route path="contacto" element={<Contacto/>}/> */}
          <Route path="/detalles/:id" element={<Detalles />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
