import React from "react";
import classes from "./Category.module.css";

const Category = (props) => {
  return (
    <div
      className={classes.Category}
      style={{ backgroundImage: `url("${props.img}")` }}
      onClick={props.onClick}
    >
      <div className={classes.Text}>
        <h2>{props.title}</h2>
      </div>
    </div>
  );
};

export default Category;
