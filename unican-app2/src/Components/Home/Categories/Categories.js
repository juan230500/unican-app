import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from "./Categories.module.css";
import imgCubeta from "../../../assets/Cubeta.jpg";
import imgBidon from "../../../assets/Bidon.jpg";
import imgCanasta from "../../../assets/Canasta.jpg";
import imgCaja from "../../../assets/Caja.jpeg";

import { useHistory } from "react-router-dom";
import Category from "./Category/Category";

const Categories = () => {
  const history = useHistory();
  return (
    <div className={classes.Container}>
      <h1 className={classes.Title}>Nuestros productos</h1>
      <div className={classes.Row}>
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
          onClick={() => history.push("/catalog?Bidón")}
          title="Bidón"
          img={imgBidon}
        ></Category>
        <Category
          onClick={() => history.push("/catalog?Cajas")}
          title="Cajas"
          img={imgCaja}
        ></Category>
      </div>
    </div>
  );
};

export default Categories;
