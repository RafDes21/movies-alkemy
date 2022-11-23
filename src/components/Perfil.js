import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import perfiles from "../perfiles.json";
import { useDispatch, useSelector } from "react-redux";
import { addProfiles, getProfile } from "../features/slices/stateSlice";
import "../css/browse.css";

const Perfil = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = sessionStorage.getItem("token");

  const profiles = useSelector((state) => state.profile.profiles);

  useEffect(() => {
    dispatch(addProfiles(perfiles));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addPerfil = (id) => {
    dispatch(getProfile(id));
    navigate("/listado");
  };

  return (
    <>
      {token ? (
        <div className="bg-dark browse">
          <div className="container">
            <h1 className="text-center text-white my-5">
              ¿Quién está viendo ahora?
            </h1>
            <div className="perfiles d-flex gap-3 justify-content-center">
              {profiles.map((perfil, index) => (
                <div onClick={() => addPerfil(perfil.id)} key={index}>
                  <div className="perfil">
                    <img src={perfil.img} alt={perfil.name} />
                  </div>
                  <h5>{perfil.name}</h5>
                </div>
              ))}
            </div>
            <button className="my-5 bg-dark">Administrar Perfiles</button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Perfil;
