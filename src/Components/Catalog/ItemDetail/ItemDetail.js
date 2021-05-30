import React from "react";
import classes from "./ItemDetail.module.css";

const ItemDetail = (props) => {
  const imageList = props.detail
    ? [props.detail?.img, ...props.detail?.extraImgs]
    : [];
  return (
    <div
      onClick={props.onClose}
      className={classes.ItemDetail}
      style={{ top: props.detail ? "0" : "100%" }}
    >
      <div onClick={(e) => e.stopPropagation()} className={classes.Card}>
        <div className={classes.Column}>
          <h1>{props.detail?.title}</h1>
          {props.detail?.info?.map((el) => (
            <div className={classes.ListItem}>
              <h3>{el.name}</h3>
              {el.description}
            </div>
          ))}
        </div>
        <div className={classes.ImgItem}>
          <img src={props.detail?.img}></img>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
