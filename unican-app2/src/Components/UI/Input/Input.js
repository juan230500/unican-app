import classes from "./Input.module.css";
import React from "react";

const Input = (props) => {
  return <input className={classes.Input} {...props}></input>;
};

export default Input;
