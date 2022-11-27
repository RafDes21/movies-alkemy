import { useEffect, useRef } from "react";
import { Navigate } from "react-router-dom";
import Slider from "../components/Slider";
import { MdOutlineArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";
import "../css/listado.css";

// redux
import { useSelector, useDispatch } from "react-redux";
import { addPopulars, addTheatress } from "../features/thunks/listThunks";
import { Cards } from "../components/Cards";

const Listado = () => {
  const dispatch = useDispatch();
  const listPopular = useSelector((state) => state.list.popular);
  const listTheatres = useSelector((state) => state.list.theatres);
  const slider = useRef("");
  const slider1 = useRef("");
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    dispatch(addPopulars());
    dispatch(addTheatress());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const next = (name) => {
    // const item = name.current.children[0];
    // name.current.style.transition = `500ms ease-out all`;
    // const size = name.current.children[0].offsetWidth;
    // name.current.style.transform = `translateX(-${size}px)`;
   
    // const transition = () => {
    //   name.current.style.transition = "none";
    //   name.current.style.transform = "translateX(0)";
    //   name.current.appendChild(item);
    // };

    // name.current.addEventListener("transitionend", transition);
  };

  return (
    <div className="listado">
      {!token && <Navigate to="/" />}
      <Slider />
      <div className="list-groups">
        <div className="section">
          <h3>Popular</h3>
          <div ref={slider} className="contain-cards" style={{transform:'translateX(-300px)', zIndex:"2", position:"relative"}}>
            {listPopular.map((item, index) => (
              <Cards key={index} name={item.title} img={item.backdrop_path} />
            ))}
          </div>

          <MdArrowBackIosNew
            // onClick={() => previus(slider)}
            className=" arrow arrow-left"
          />
          <MdOutlineArrowForwardIos
            onClick={() => next(slider)}
            className="arrow arrow-right"
          />
        </div>
        <div className="section">
          <h3>Theatres</h3>
          <div ref={slider1} className="contain-cards">
            {listTheatres.map((item, index) => (
              <Cards key={index} name={item.title} img={item.backdrop_path} />
            ))}
          </div>

          <MdArrowBackIosNew
            // onClick={() => previus(slider)}
            className="arrow arrow-left"
          />
          <MdOutlineArrowForwardIos
            onClick={() => next(slider1)}
            className="arrow arrow-right"
          />
        </div>
      </div>
    </div>
  );
};

export default Listado;
