import React from "react";
import "../css/head.css";

export const Head = ({ index, img, name, description }) => {
  return (
    <div className="head">
      <div className="description">
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
      <img src={`https://www.themoviedb.org/t/p/w500/${img}`} alt={name} />
    </div>
  );
};

