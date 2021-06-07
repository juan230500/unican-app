import React from "react";
import logo from "../../../assets/logo.png";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <nav className={classes.Nav}>
      <NavLink className={classes.Home} to="/" exact>
        <img alt="logo" src={logo}></img>
      </NavLink>
      <div className={classes.Group}>
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
    </nav>
  );
};

export default Navbar;
