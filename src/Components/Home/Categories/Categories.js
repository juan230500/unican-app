import React from "react";
import classes from "./Categories.module.css";
import Item from "../../UI/Item/Item";
import imgCubeta from "../../../assets/Cubeta.jpg";
import imgBidon from "../../../assets/Bidon.jpg";
import imgCanasta from "../../../assets/Canasta.jpg";

import { useHistory } from "react-router-dom";

const ALTURA = 360;

const Categories = () => {
  const history = useHistory();

  return (
    <div className={classes.Container}>
      <h1 className={classes.Title}>Nuestros productos</h1>
      <div className={classes.Row}>
        <Item
          style={{ height: ALTURA }}
          onClick={() => history.push("/catalog?Canastas")}
          title="Canastas"
          img={imgCanasta}
        ></Item>
        <Item
          style={{ height: ALTURA }}
          onClick={() => history.push("/catalog?Bidones")}
          title="Bidones"
          img={imgBidon}
        ></Item>
        <Item
          style={{ height: ALTURA }}
          onClick={() => history.push("/catalog?Cubetas")}
          title="Cubetas"
          img={imgCubeta}
        ></Item>
      </div>
    </div>
  );
};

export default Categories;
