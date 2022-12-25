import React from "react";
import { useSelector } from "react-redux";
import "../css/favorites.css";

export const Favoritos = () => {
  const favorites = useSelector((state) => state.favorites.favorites);

  return (
    <div className="favorite">
      {favorites.length === 0 ? (
        <div className="d-flex justify-content-center align-items-center h-100">
          vacío
        </div>
      ) : (
        <>
          {favorites.map((item, index) => (
            <div key={index} className="d-flex gap-3 my-3 align-items-center">
              <img
                src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                alt={item.original_title || item.name}
              />
              {item.original_title && <span>{item.original_title}</span>}
              {item.name && <span>{item.name}</span>}
            </div>
          ))}
        </>
      )}
    </div>
  );
};
