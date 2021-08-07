import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { COLORS_TAGS } from "../../../utils/constants";
import classes from "./ItemDetail.module.css";

const ItemDetail = (props) => {
  const [imgIndex, setImgIndex] = useState(0);

  const addColor = (text) =>
    COLORS_TAGS[text.toLowerCase()] && (
      <div
        style={{
          backgroundColor: COLORS_TAGS[text.toLowerCase()],
        }}
        className={classes.Square}
      ></div>
    );

  return (
    <div onClick={(e) => e.stopPropagation()} className={classes.Card}>
      <div className={classes.Close} onClick={props.onClose}>
        <FaTimes />
      </div>
      <div className={classes.Info}>
        <div className={classes.Column}>
          <div>
            <h1>{props.detail?.title}</h1>
            {props.detail?.info?.map((el) => (
              <div className={classes.ListItem}>
                <strong>{el.name}</strong>
                {el.description.split("-").length > 1 ? (
                  <ul>
                    {el.description.split("-").map((item) => (
                      <li>
                        {addColor(item)}
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  [addColor(el.description), el.description]
                )}
              </div>
            ))}
          </div>
        </div>
        <div className={classes.Focus}>
          {imgIndex < 0 ? (
            <h1>Seleccione una imagen para ver el detalle</h1>
          ) : (
            <img alt="product" src={props.detail?.imgs[imgIndex].link}></img>
          )}
          <div className={classes.Row}>
            {props.detail?.imgs.map((el, i) =>
              i + 1 >= props.detail?.imgs.length ? null : (
                <div>
                  <img
                    onClick={() => setImgIndex(i)}
                    alt={el.name}
                    src={el.link}
                  ></img>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
