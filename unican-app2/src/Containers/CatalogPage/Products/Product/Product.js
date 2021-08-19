import React, { useEffect, useState } from "react";
import classes from "./Product.module.css";
import { SyncLoader } from "react-spinners";

const Category = (props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const imageLoader = new Image();
    imageLoader.src = props.imgs[props.imgs.length - 1]?.link || "";
    imageLoader.onload = () => setLoading(false);
  }, [props.imgs]);

  return (
    <div
      onClick={props.onClick}
      className={classes.Container}
      style={{ ...props.style, "--initial-top": Math.random() * 1000 + "px" }}
    >
      <div className={classes.SubContainer}>
        <h3>{props.title}</h3>
      </div>
      {loading ? (
        <div className={classes.ImageLoading}>
          <SyncLoader></SyncLoader>
        </div>
      ) : (
        <div className={classes.ImageContainer}>
          <img
            src={props.imgs[props.imgs.length - 1]?.link || ""}
            alt="producto"
          ></img>
        </div>
      )}
    </div>
  );
};

export default Category;
