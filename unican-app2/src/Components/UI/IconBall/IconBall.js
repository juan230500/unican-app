import React from "react";
import classes from "./IconBall.module.css";

const IconBall = (props) => {
  return <div className={classes.IconBall}>{props.children}</div>;
};

export default IconBall;
