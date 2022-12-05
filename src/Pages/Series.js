import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../components/Card";
import {
  addSerie,
  aSeries,
  idCategories,
  categories,
} from "../features/thunks/serieThunks";
import "../css/series.css";
import { Head } from "../components/Head";
import { SerchCategory } from "../components/SerchCategory";

const Series = () => {
  const dispatch = useDispatch();
  const listSeries = useSelector((state) => state.series.series);
  const category = useSelector((state) => state.series.categories);
  const listCategories = useSelector((state) => state.series.idSeries);
  console.log(listCategories);
  const ser = useSelector((state) => state.series.serie);
  console.log(ser);
  useEffect(() => {
    dispatch(addSerie());
    dispatch(aSeries());
    dispatch(idCategories());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getId = (id) => {
    dispatch(categories(id));
  };

  const title = "Series";
  return (
    <div className="containerSeries">
      <Head
        key={ser.id}
        img={ser.backdrop_path}
        name={ser.name}
        description={ser.overview}
      />
      <SerchCategory title={title} cat={listCategories} get={getId} />
      <div className=" container series">
        <div className="row">
          {category.length === 0 ? (
            <>
              {listSeries.map((serie, index) => (
                <div className="col-6 col-sm-6 col-md-4 col-lg-3 my-5 d-flex justify-content-center">
                  <Card key={index} name={serie.name} img={serie.poster_path} />
                </div>
              ))}
            </>
          ) : (
            <>
              {category.map((item, index) => (
                <div className="col-6 col-sm-6 col-md-4 col-lg-3 my-5 d-flex justify-content-center">
                  <Card
                    key={index}
                    name={item.title}
                    img={item.poster_path}
                    description={item.overview}
                  />
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Series;
