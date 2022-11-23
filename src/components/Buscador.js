import React from "react";
import { useNavigate } from "react-router-dom";
import { HiOutlineSearch } from "react-icons/hi";
import "../css/buscador.css";

const Buscador = () => {
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    const keyword = e.currentTarget.keyword.value.trim();

    if (keyword.length === 0) {
      alert("Tienes que escribir una palabra clave");
    } else if (keyword.length < 4) {
      alert("Tienes que escribir más de 4 carácteres");
    } else {
      e.currentTarget.keyword.value = "";
      navigate(`/resultados/?keyword=${keyword}`);
    }
  };
  return (
    <div className="serch">
      <form onSubmit={submitHandler} className="d-flex align-item-center">
        <label>
          <input
            type="text"
            name="keyword"
            autoComplete="off"
            autoFocus="off"
            placeholder="películas..."
          />
        </label>
          <button type="submit">
            <HiOutlineSearch className="serch-icon" />
          </button>
      </form>
    </div>
  );
};

export default Buscador;
