import React from "react";
import swal from "@sweetalert/with-react";
import { useNavigate } from "react-router-dom";

const Buscador = () => {
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    const keyword = e.currentTarget.keyword.value.trim();

    if (keyword.length === 0) {
      swal(<h3>Tienes que escribir una palabra clave</h3>);
    } else if (keyword.length < 4) {
      swal(<h3>Tienes que escribir más de 4 carácteres</h3>);
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
