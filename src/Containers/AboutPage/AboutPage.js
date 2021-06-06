import React from "react";
import AboutText from "../../Components/About/AboutText/AboutText";
import classes from "./AboutPage.module.css";

const AboutPage = () => {
  return (
    <div className={classes.About}>
      <div className={classes.Index}>
        <a href="#Historia">Historia</a>
        <a href="#¿Quiénes somos?">¿Quiénes somos?</a>
        <a href="#Misión">Misión</a>
        <a href="#Visión">Visión</a>
        <a href="#Valores">Valores</a>
        <a href="#Compromiso">Compromiso</a>
        <a href="#Desarrollo Humano">Desarrollo Humano</a>
        <a href="#Rentabilidad">Rentabilidad</a>
        <a href="#Respeto">Respeto</a>
        <a href="#Satisfacción al Cliente">Satisfacción al Cliente</a>
      </div>
      <AboutText></AboutText>
    </div>
  );
};

export default AboutPage;
