import React from "react";
//import logo from "../../../assets/logo.png";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = (props) => {
  const navStyles = [classes.Nav];
  if (props.transparent) navStyles.push(classes.Transparent);
  return (
    <nav className={navStyles.join(" ")}>
      <NavLink
        className={classes.Home}
        activeClassName={classes.Active}
        to="/"
        exact
      >
        UNICAN
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
      </div>
      <NavLink
        to="/contact"
        className={classes.LinkButton}
        activeClassName={classes.Active}
      >
        Contacto
      </NavLink>
    </nav>
  );
};

export default Navbar;
