import React, { useEffect, useRef, useState } from "react";
import classes from "./Header.module.css";

const Header = (props) => {
  const [index, setIndex] = useState(0);
  const intervalId = useRef();

  useEffect(() => {
    intervalId.current = setTimeout(
      () => setIndex((i) => (i > props.homeData.imgs.length - 2 ? 0 : i + 1)),
      4500
    );
    return () => clearTimeout(intervalId.current);
  }, [props.homeData.imgs, index]);

  //Su mejor Socio Comercial
  //En soluciones de empaques plásticos de Inyección Alta

  return (
    <div className={classes.Header}>
      <div className={classes.Column}>
        <h1>{props.homeData.title}</h1>
        <p>{props.homeData.subtitle}</p>
      </div>
      <div className={classes.ColumnRight}>
        {props.homeData.imgs.map((_, i) => (
          <div
            onClick={() => setIndex(i)}
            className={[classes.Ball, i === index ? classes.Active : ""].join(
              " "
            )}
          ></div>
        ))}
      </div>
      <div className={classes.Album}>
        {props.homeData.imgs.map((el, i) => (
          <div
            className={classes.ImgContainer}
            style={{
              left: i === index ? "0" : i >= index ? "99.9999%" : "-100%",
              opacity: i === index ? 1 : 0,
            }}
          >
            <img
              className={classes.Img}
              style={{ objectPosition: 4 > i && i > 1 ? "bottom" : "center" }}
              src={el}
              alt={el}
            ></img>
            <img
              className={[classes.Img, classes.BgImg].join(" ")}
              src={el}
              alt={el}
            ></img>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
