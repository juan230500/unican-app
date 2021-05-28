import React from "react";
import classes from "./ItemDetail.module.css";

const ItemDetail = (props) => {
  const style = {
    "--img": `url("${props.img}")`,
  };
  console.log(props.detail);
  return (
    <div
      onClick={props.onClose}
      className={classes.ItemDetail}
      style={{ ...style, top: props.detail ? "50%" : "150%" }}
    >
      <div onClick={(e) => e.stopPropagation()} className={classes.Card}>
        <h1>{props.detail?.title}</h1>
        {props.detail?.info?.map((el) => (
          <div className={classes.ListItem}>
            <h3>{el.name}</h3>
            {el.description}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemDetail;
