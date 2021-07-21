import React, { useEffect, useState } from "react";
import classes from "./Product.module.css";
import { SyncLoader } from "react-spinners";

const Category = (props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const imageLoader = new Image();
    imageLoader.src = props.imgs[0].link;
    imageLoader.onload = () => setLoading(false);
  }, [props.imgs]);

  return (
    <div
      onClick={props.onClick}
      className={[classes.Container, props.className].join(" ")}
      style={{ ...props.style, "--initial-top": Math.random() * 1000 + "px" }}
    >
      <div className={classes.SubContainer}>
        <h1 className={classes.Title}>{props.title}</h1>
      </div>

      {loading ? (
        <div className={classes.ImageLoading}>
          <SyncLoader></SyncLoader>
        </div>
      ) : (
        <img src={props.imgs[0].link} alt="producto"></img>
      )}
    </div>
  );
};

export default Category;
