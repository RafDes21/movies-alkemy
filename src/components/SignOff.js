import React, { useState } from "react";
import { useSelector } from "react-redux";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";
import "../css/signOff.css";

export const SignOff = ({ navigate }) => {
  const [open, setOpen] = useState(false);
  const profile = useSelector((state) => state.profile.profileOne);

  const cerrarSesion = () => {
    sessionStorage.clear();
    setOpen(!open);
    navigate("/");
  };

  const sesion = () => {
    setOpen(!open);
  };

  return (
    <div className="signOff">
      <div onClick={sesion} className="signOff-header">
        <img src={profile.img} alt={profile.name} />
        <BiDownArrow className="icon" style={{transform: open? 'rotate(180deg)':""}} />
      </div>
      <div className="signOff-body" style={{ height: open ? "auto" : "" }}>
        <div className="d-flex justify-content-center">
          <BiUpArrow className="icon-up" />
        </div>
        <div className="signOff_children">
          <h5 className="p-2">Hola {profile.name}</h5>
          <button onClick={cerrarSesion}>Cerrar sesión</button>
        </div>
      </div>
    </div>
  );
};
