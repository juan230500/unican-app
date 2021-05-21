import React from "react";
//import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = (props) => {
  const navStyles = [classes.Nav];
  if (props.transparent) navStyles.push(classes.Transparent);
  console.log(navStyles);
  return (
    <nav className={navStyles.join(" ")}>
      <h1 className={classes.Home} to="/home">
        Unican
      </h1>
      <div className={classes.Group}>
        <div className={classes.LinkContainer}>
          <Link to="/catalog">Catálogo</Link>
        </div>
        <div className={classes.LinkContainer}>
          <Link to="/about">Nuestra empresa</Link>
        </div>
      </div>
      <div className={classes.LinkButton}>
        <Link to="/contact">Contacto</Link>
      </div>
    </nav>
  );
};

export default Navbar;
