import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { BASE_URL } from "../../../utils/constants";
import classes from "./Header.module.css";

const Header = () => {
  const [index, setIndex] = useState(0);
  const intervalId = useRef();
  const [homeData, setHomeData] = useState({
    title: "",
    subtitle: "",
    imgs: [],
    vids: [],
  });

  const get = async () => {
    const res = await axios.get(BASE_URL + "home");
    res.data && setHomeData(res.data);
  };

  useEffect(() => get(), []);

  useEffect(() => {
    intervalId.current = setTimeout(
      () => setIndex((i) => (i > homeData.imgs.length - 2 ? 0 : i + 1)),
      4500
    );
    return () => clearTimeout(intervalId.current);
  }, [homeData.imgs, index]);

  //Su mejor Socio Comercial
  //En soluciones de empaques plásticos de Inyección Alta

  return (
    <div className={classes.Header}>
      <div className={classes.Column}>
        <h1>{homeData.title}</h1>
        <p>{homeData.title}</p>
      </div>
      <div className={classes.ColumnRight}>
        {homeData.imgs.map((_, i) => (
          <div
            onClick={() => setIndex(i)}
            className={[classes.Ball, i === index ? classes.Active : ""].join(
              " "
            )}
          ></div>
        ))}
      </div>
      <div className={classes.Album}>
        {homeData.imgs.map((el, i) => (
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
