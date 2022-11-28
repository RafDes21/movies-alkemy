import React from "react";
import '../css/card.css'

const Card = ({ name, img, description }) => {
  return (
    <div className="card">
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
        
