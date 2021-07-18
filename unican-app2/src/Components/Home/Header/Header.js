import React, { useEffect, useState } from "react";
import classes from "./Header.module.css";

const Header = () => {
  const [index, setIndex] = useState(0);
  const [images, setImages] = useState([]);

  useEffect(() => getImages(), []);

  const getImages = async () => {
    function importAll(r) {
      return r
        .keys()
        .map(r)
        .map((el) => el.default);
    }
    setImages(
      importAll(
        require.context("../../../assets/home", false, /\.(png|jpe?g|svg)$/)
      )
    );
  };

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => i + 1);
    }, 6000);
    return () => clearInterval(id);
  }, [images]);

  return (
    <div className={classes.Header}>
      <div className={classes.Column}>
        <h1>Industria de plásticos número 1 de centroamérica</h1>
        <p>
          Nuestra visión es ser el mayor proveedor de contenedores plásticos
          para 2024
        </p>
      </div>
      <div className={classes.Album}>
        {images.map((el, i) => (
          <img
            style={{
              left:
                i === index % images.length
                  ? "0"
                  : i >= index % images.length
                  ? "99.999%"
                  : "-100%",
            }}
            src={el}
            alt=""
          ></img>
        ))}
      </div>
    </div>
  );
};

export default Header;
