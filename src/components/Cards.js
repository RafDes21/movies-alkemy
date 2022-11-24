import React from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { BiLike } from "react-icons/bi";
import { AiFillPlayCircle } from "react-icons/ai";
import { IoIosAddCircleOutline } from "react-icons/io";
import "../css/cards.css";

export const Cards = ({ img, name }) => {
  return (
    <div className="cards">
      <img src={`https://image.tmdb.org/t/p/w500/${img}`} alt={name} />
      <div className="cards-body">
        <div className="cards-icons">
          <div className="cards-icons__one">
            <IoIosAddCircleOutline />
            <AiFillPlayCircle />
            <BiLike />
          </div>
          <IoIosArrowDropdownCircle />
        </div>
        <div className="cards-text">
          <span className="cards-text__one">Nuevo</span>
          <span className="cards-text__two">7+</span>
          <span>2h</span>
          <span className="cards-text__two">hd</span>
        </div>
        <div className="cards-generos">generos</div>
      </div>
    </div>
  );
};
