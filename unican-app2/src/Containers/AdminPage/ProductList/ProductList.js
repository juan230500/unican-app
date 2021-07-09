import React from "react";
import { FaEdit } from "react-icons/fa";
import classes from "./ProductList.module.css";

const ProductList = (props) => {
  return (
    <div className={classes.ProductList}>
      {props.items.map((el) => (
        <div className={classes.Item} onClick={() => props.setDetail(el)}>
          <h5>
            <FaEdit></FaEdit>
            {el.title}
          </h5>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
