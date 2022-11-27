import React, { useEffect, useRef } from "react";
import "../css/slider.css";

const Slider = () => {
  const next = useRef("");

  const automatic = async () => {
    const element = await next.current.children[0];
    next.current.style.transition = `5000ms ease-out all`;
     const size = next.current.children[0].offsetWidth;
    next.current.style.transform = `translateX(-${size}px)`;
    const transition = () => {
      next.current.style.transition = "none";
      next.current.style.transform = "translateX(0)";
      next.current.appendChild(element);
    };

    next.current.addEventListener("transitionend", transition);
  };

  useEffect(() => {
    const clearInter = setInterval(() => {
      automatic();
    }, 10000);
    return ()=>clearInterval(clearInter);
  }, []);

  return (
    <div className="container-slider">
      <div ref={next} className="slider">
        <div className="slider-item">
          <img
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/884914B678C400E41469370CCDA9930F02BCB15357F0AD6D8D132F383880ADB8/scale?width=1200&aspectRatio=1.78&format=jpeg"
            alt="hombreArana"
          />
        </div>
        <div className="slider-item">
          <img
            src="https://occ.a.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdPoM5Xssk0lMF-zJm_6l9YLoVRaKmxyVqHRwo9JFkwphxKmK4trjmsMVtkK7zy3Rdrp3LqhVbCfNUutOsFwhcFgeoXL30H9Po0b.jpg?r=9a4"
            alt="jumanji"
          />
        </div>
        <div className="slider-item">
          <img
            src="https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2021/06/La-franquicia-de-Rapidos-y-Furiosos-podria-terminar-en-un-musical.jpg?fit=1280%2C720&quality=80&ssl=1"
            alt="rapidosYfuriosos"
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
