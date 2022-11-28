import { useEffect, useRef } from "react";
import { Navigate } from "react-router-dom";
import Slider from "../components/Slider";
import { MdOutlineArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";
import "../css/listado.css";

// redux
import { useSelector, useDispatch } from "react-redux";
import { addPopulars, addTheatress, addChildrens, addComedy, addtop } from "../features/thunks/listThunks";
import { Cards } from "../components/Cards";

const Listado = () => {


  const dispatch = useDispatch();
  const listPopular = useSelector((state) => state.list.popular);
  const listTheatres = useSelector((state) => state.list.theatres);
  const listChildrens = useSelector((state) => state.list.childrens);
  const listComedies = useSelector((state) => state.list.comedies)
  const listTops = useSelector((state) => state.list.top)

  const slider = useRef("");
  const slider1 = useRef("");
  const slider2 = useRef("");
  const slider3 = useRef("");
  const slider4 = useRef("");
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    dispatch(addPopulars());
    dispatch(addTheatress());
    dispatch(addChildrens());
    dispatch(addComedy())
    dispatch(addtop())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const previus = (name) => {
    const childrenItems = name.current.children.length - 1;
    const childrenItems1 = name.current.children.length - 2;
    const item = name.current.children[childrenItems];
    const item1 = name.current.children[childrenItems1];
    name.current.insertBefore(item, name.current.firstChild);
    name.current.insertBefore(item1, name.current.firstChild);
    name.current.style.transition = "none";

    const long = item.offsetWidth + item1.offsetWidth;
    name.current.style.marginLeft = `-${long}px`;

    setTimeout(() => {
      name.current.style.transition = `1000ms ease-out all`;
      name.current.style.marginLeft = "0";
      name.current.style.paddingLeft = "0px";
    }, 30);
  };
  const next = (name) => {

    const childrenItems = name.current.children[0];
    const childrenItems1 = name.current.children[1];
    const long = childrenItems.offsetWidth + childrenItems1.offsetWidth;
    name.current.style.transition = `1000ms ease-out all`;
    name.current.style.marginLeft = `-${long}px`;
    name.current.style.paddingLeft = "0px";
    const transition = async () => {
      name.current.style.transition = "none";
      name.current.style.marginLeft = "0";
      await name.current.appendChild(childrenItems);
      await name.current.appendChild(childrenItems1);
    };

    name.current.addEventListener("transitionend", transition);
  };

  return (
    <div className="listado">
      {!token && <Navigate to="/" />}
      <Slider />
      <div className="list-groups">
        <div className="section">
          <h3>Popular</h3>
          <div ref={slider} className="contain-cards">
            {listPopular.map((item, index) => (
              <Cards key={index} name={item.title} img={item.backdrop_path} />
            ))}
          </div>

          <MdArrowBackIosNew
            onClick={() => previus(slider)}
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
            onClick={() => previus(slider1)}
            className="arrow arrow-left"
          />
          <MdOutlineArrowForwardIos
            onClick={() => next(slider1)}
            className="arrow arrow-right"
          />
        </div>
        <div className="section">
          <h3>Children</h3>
          <div ref={slider2} className="contain-cards">
            {listChildrens.map((item, index) => (
              <Cards key={index} name={item.title} img={item.backdrop_path} />
            ))}
          </div>

          <MdArrowBackIosNew
            onClick={() => previus(slider2)}
            className=" arrow arrow-left"
          />
          <MdOutlineArrowForwardIos
            onClick={() => next(slider2)}
            className="arrow arrow-right"
          />
        </div>
        <div className="section">
          <h3>Comedies</h3>
          <div ref={slider3} className="contain-cards">
            {listComedies.map((item, index) => (
              <Cards key={index} name={item.title} img={item.backdrop_path} />
            ))}
          </div>

          <MdArrowBackIosNew
            onClick={() => previus(slider3)}
            className=" arrow arrow-left"
         
          />
          <MdOutlineArrowForwardIos
            onClick={() => next(slider3)}
            className="arrow arrow-right"
          />
        </div>
        <div className="section">
          <h3>Best Movies of 2022</h3>
          <div ref={slider4} className="contain-cards">
            {listTops.map((item, index) => (
              <Cards key={index} name={item.title} img={item.backdrop_path} />
            ))}
          </div>

          <MdArrowBackIosNew
            onClick={() => previus(slider4)}
            className=" arrow arrow-left"
       
          />
          <MdOutlineArrowForwardIos
            onClick={() => next(slider4)}
            className="arrow arrow-right"
          />
        </div>
      </div>
    </div>
  );
};

export default Listado;
