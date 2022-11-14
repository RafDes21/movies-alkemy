import React from "react";

import { useNavigate } from "react-router-dom";

const Buscador = () => {
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    const keyword = e.currentTarget.keyword.value.trim();

    if (keyword.length === 0) {
     alert("Tienes que escribir una palabra clave")
    } else if (keyword.length < 4) {
      alert("Tienes que escribir más de 4 carácteres")
    } else {
        e.currentTarget.keyword.value = ''
      navigate(`/resultados/?keyword=${keyword}`);
     
    }
  };
  return (
    <div>
      <form onSubmit={submitHandler} className="d-flex align-item-center">
        <label className="form-label mb-0 mx-2">
          <input
            className="form-control"
            type="text"
            name="keyword"
            placeholder="Escribe una palabra clave..."
          />
        </label>
        <button className="btn btn-success " type="submit">
          Buscar
        </button>
      </form>
    </div>
  );
};

export default Buscador;
