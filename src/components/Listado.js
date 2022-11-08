import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Listado = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("item");
    console.log(token);

    if (token === null) {
      navigate("/");
    }
  }, [navigate]);
  return <div>Listado</div>;
};

export default Listado;
