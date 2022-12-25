import React from "react";
import "../css/card.css";
import { useDispatch } from "react-redux";
import { favorites } from "../features/thunks/favoriteThunks";

const Card = ({ name, img, id,cate, description }) => {
  const dispatch = useDispatch();
  const adFavorite = (id, cate) => {
    dispatch(favorites(id, cate));
  };

  return (
    <div className="card" onClick={() => adFavorite(id, cate)}>
      <div className="card-img">
        <img src={`https://image.tmdb.org/t/p/w500/${img}`} alt={name} />
      </div>
      {/* <div className="card-body">
        <h5 className="text-center">{name}</h5>
      </div> */}
    </div>
  );
};

export default Card;
