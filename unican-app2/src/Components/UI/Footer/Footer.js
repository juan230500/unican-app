import React from "react";
import classes from "./Footer.module.css";
import logo from "../../../assets/logo.png";
import FooterItem from "./FooterItem/FooterItem";
import {
  FaWaze,
  FaMapPin,
  FaDirections,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className={classes.Container}>
      <div className={classes.Info}>
        <div className={classes.Column}>
          <img src={logo} alt="logo"></img>
        </div>
        <div className={classes.Column}>
          <FooterItem text={"Cinco Esquinas de Tibás, San José- Costa Rica"}>
            <FaMapPin />
          </FooterItem>
          <FooterItem
            text={`Del puente Túnel,150 metros norte, 100 metros este y 50 metros
            norte, detrás del Plantel Los Caribeños, Contiguo a la línea del
            tren.`}
          >
            <FaDirections />
          </FooterItem>
          <FooterItem text={"Waze: Industrias Unican"}>
            <FaWaze />
          </FooterItem>
          <FooterItem text={"Teléfono: (506) 2257 74 90"}>
            <FaPhone />
          </FooterItem>
          <FooterItem text={"Correo: unican@envasescomeca.com"}>
            <FaEnvelope />
          </FooterItem>
        </div>
      </div>
      <div className={classes.Bar}></div>
      <p>© 2021 Industria UNICAN</p>
    </div>
  );
};

export default Footer;
