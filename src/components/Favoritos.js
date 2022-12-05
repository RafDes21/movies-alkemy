import React from "react";
import { BsHeartFill } from "react-icons/bs";

export const Favoritos = (props) => {
  return (
    <div className="container mt-5">
      <div className="row">
        {props.favoritos.length > 0 ? (
          props.favoritos.map((favorito, index) => (
            <div className="col-6 col-sm-6 col-md-4 col-lg-3 my-5 d-flex justify-content-center py-5" key={index}>
              <div className="card">
                <img
                  className="card-img-top"
                  src={favorito.imgURL}
                  alt={favorito.title}
                />
                <div className="card-body">
                  <h1>{favorito.title.substring(0, 10)}...</h1>
                  <p>{favorito.overview.substring(0, 100)}...</p>
                  {/* <Link
                    to={`/detalles/${movie.id}`}
                    className="btn btn-primary"
                  >
                    Click
                  </Link> */}
                </div>
                <button
                  className="favorite-btn"
                  onClick={props.addRemoveFavorite}
                  data-movie-id={favorito.id}
                >
                  <BsHeartFill />
                </button>
              </div>
            </div>
          ))
        ) : (
          <h1>no tienes favoritos</h1>
        )}
      </div>
    </div>
  );
};
