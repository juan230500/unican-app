import React, { useState } from "react";
import classes from "./ItemDetail.module.css";

const ItemDetail = (props) => {
  const [imgIndex, setImgIndex] = useState(-1);

  return (
    <div onClick={(e) => e.stopPropagation()} className={classes.Card}>
      <div className={classes.Info}>
        <div className={classes.Column}>
          <h1>{props.detail?.title}</h1>
          {props.detail?.info?.map((el) => (
            <div className={classes.ListItem}>
              <h3>{el.name}</h3>
              {el.description}
              <ul>
                {el.options?.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className={classes.Focus}>
          {imgIndex < 0 ? (
            <h1>Seleccione una imagen para ver el detalle</h1>
          ) : (
            <img alt="product" src={props.detail?.imgs[imgIndex].link}></img>
          )}
        </div>
        <div className={classes.ImgColumn}>
          {props.detail?.imgs.map((el, i) => (
            <img
              onClick={() => setImgIndex(i)}
              alt="product"
              src={el.link}
            ></img>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
