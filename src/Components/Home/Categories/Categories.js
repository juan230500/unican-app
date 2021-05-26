import React from "react";
import classes from "./Categories.module.css";
import Category from "../../UI/Item/Item";
import imgCubeta from "../../../assets/Cubeta.jpg";
import imgBidon from "../../../assets/Bidon.jpg";
import imgCanasta from "../../../assets/Canasta.jpg";

const Categories = () => {
  return (
    <div className={classes.Container}>
      <h1 className={classes.Title}>Nuestros productos</h1>
      <div className={classes.Row}>
        <Category title="Canastas" img={imgCanasta}></Category>
        <Category title="Bidones" img={imgBidon}></Category>
        <Category title="Cubetas" img={imgCubeta}></Category>
      </div>
    </div>
  );
};

export default Categories;
