import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from "./Categories.module.css";
import imgCubeta from "../../../assets/Cubeta.jpg";
import imgBidon from "../../../assets/Bidon.jpg";
import imgCanasta from "../../../assets/Canasta.jpg";

import { useHistory } from "react-router-dom";
import Category from "./Category/Category";
import Slider from "react-slick";

const Categories = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 1000,
    autoplay: true,
    draggable: true,
    pauseOnHover: true,
  };
  const history = useHistory();
  return (
    <div className={classes.Container}>
      <h1 className={classes.Title}>Nuestros productos</h1>
      <Slider {...settings} arrows>
        <Category
          onClick={() => history.push("/catalog?Canastas")}
          title="Canastas"
          img={imgCanasta}
        ></Category>
        <Category
          onClick={() => history.push("/catalog?Bidones")}
          title="Bidones"
          img={imgBidon}
        ></Category>
        <Category
          onClick={() => history.push("/catalog?Cubetas")}
          title="Cubetas"
          img={imgCubeta}
        ></Category>
        <Category
          onClick={() => history.push("/catalog?Canastas")}
          title="Canastas"
          img={imgCanasta}
        ></Category>
        <Category
          onClick={() => history.push("/catalog?Bidones")}
          title="Bidones"
          img={imgBidon}
        ></Category>
        <Category
          onClick={() => history.push("/catalog?Cubetas")}
          title="Cubetas"
          img={imgCubeta}
        ></Category>
      </Slider>
    </div>
  );
};

export default Categories;
