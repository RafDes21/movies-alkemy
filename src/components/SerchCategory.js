import React, { useState } from "react";
import { BiDownArrow } from "react-icons/bi";
import "../css/serchCategory.css";

export const SerchCategory = ({ title, cat, get }) => {
  const [open, setOpen] = useState(false);

  const addOpen = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div className="categories d-flex gap-5 align-items-center">
        <span className="categories-title">{title}</span>
        <span onClick={addOpen} className="categories-search">
          Géneros <BiDownArrow />
        </span>
        <ul className="categories-list" style={{ height: open ? "220px" : "" }}>
          {cat.map((cat, index) => (
            <li onClick={addOpen} key={index}>
              <span onClick={() => get(cat.id)}>{cat.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
