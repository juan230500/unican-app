import React from "react";
import AboutText from "../../Components/About/AboutText/AboutText";
import Index from "../../Components/About/Index/Index";
import classes from "./AboutPage.module.css";

const AboutPage = () => {
  return (
    <div className={classes.About}>
      <Index />
      <AboutText></AboutText>
    </div>
  );
};

export default AboutPage;
