import React from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.Header}>
      <div className={classes.Container}>
        <h1>Industria de plásticos número 1 de centroamérica</h1>
        <div className={classes.Bar}></div>
        <p>
          Nuestra visión es ser el mayor proveedor de contenedores plásticos
          para 2024
        </p>
      </div>
      <div className={classes.Block}></div>
    </div>
  );
};

export default Header;
