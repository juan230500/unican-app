import React, { useEffect, useRef, useState } from "react";
import classes from "./Header.module.css";

const Header = () => {
  const [index, setIndex] = useState(0);
  const [images, setImages] = useState([]);
  const intervalId = useRef();

  useEffect(() => getImages(), []);

  const getImages = async () => {
    function importAll(r) {
      return r
        .keys()
        .map(r)
        .map((el) => el.default);
    }
    const tmpImages = importAll(
      require.context("../../../assets/home", false, /\.(png|jpe?g|svg)$/)
    );
    setImages(tmpImages);
  };

  useEffect(() => {
    intervalId.current = setTimeout(() => {
      setIndex((i) => (i > images.length - 2 ? 0 : i + 1));
    }, 4500);
    return () => clearTimeout(intervalId.current);
  }, [images, index]);

  return (
    <div className={classes.Header}>
      <div className={classes.Column}>
        <h1>Su mejor Socio Comercial</h1>
        <p>En soluciones de empaques plásticos de Inyección Alta</p>
      </div>
      <div className={classes.ColumnRight}>
        {images.map((_, i) => (
          <div
            onClick={() => setIndex(i)}
            className={[classes.Ball, i === index ? classes.Active : ""].join(
              " "
            )}
          ></div>
        ))}
      </div>
      <div className={classes.Album}>
        {images.map((el, i) => (
          <img
            style={{
              left: i === index ? "0" : i >= index ? "99.9999%" : "-100%",
              opacity: i === index ? 1 : 0,
            }}
            src={el}
            alt={el}
          ></img>
        ))}
      </div>
    </div>
  );
};

export default Header;
