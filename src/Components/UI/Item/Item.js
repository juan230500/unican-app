import React from "react";
import classes from "./Item.module.css";

const Category = (props) => {
  const style = {
    "--img": `url("${props.img}")`,
  };
  return (
    <div className={classes.Container} style={{ ...style, ...props.style }}>
      <div className={classes.SubContainer}>
        <h1 className={classes.Title}>{props.title}</h1>
      </div>
    </div>
  );
};

export default Category;
