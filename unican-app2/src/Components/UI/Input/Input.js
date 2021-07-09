import classes from "./Input.module.css";
import React from "react";

const Input = (props) => {
  return props.type === "textarea" ? (
    <textarea style={{ resize: "vertical" }} rows="7" className={classes.Input} {...props}></textarea>
  ) : (
    <input className={classes.Input} {...props}></input>
  );
};

export default Input;
