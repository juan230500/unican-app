import React from "react";
import logo from "../../../assets/logo.png";
import logoComeca from "../../../assets/LOGO-GRUPO-COMECA.png";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <nav className={classes.Nav}>
      <NavLink to="/" exact className={classes.ImgContainer}>
        <img alt="logo" src={logo}></img>
      </NavLink>
      <div className={classes.Group}>
        <NavLink
          className={classes.LinkContainer}
          activeClassName={classes.Active}
          to="/"
          exact
        >
          Inicio
        </NavLink>
        <NavLink
          className={classes.LinkContainer}
          activeClassName={classes.Active}
          to="/catalog"
        >
          Catálogo
        </NavLink>
        <NavLink
          className={classes.LinkContainer}
          activeClassName={classes.Active}
          to="/about"
        >
          Nuestra empresa
        </NavLink>
        <NavLink
          className={classes.LinkContainer}
          activeClassName={classes.Active}
          to="/contact"
        >
          Contacto
        </NavLink>
      </div>
      <a
        href="http://www.grupocomeca.com/"
        target="_blank"
        rel="noreferrer"
        className={classes.ImgContainer}
      >
        <img alt="logo" src={logoComeca}></img>
      </a>
    </nav>
  );
};

export default Navbar;
