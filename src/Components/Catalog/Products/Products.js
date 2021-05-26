import React, { useState } from "react";
import Item from "../../UI/Item/Item";
import classes from "./Products.module.css";
import img1 from "../../../assets/products/Cubeta de 1 gl.jpg";
import img2 from "../../../assets/products/Cubeta de 2.5 gl.jpg";
import img3 from "../../../assets/products/Cubetas de 5 gl.jpg";
import img4 from "../../../assets/products/Canasta California.jpg";
import img5 from "../../../assets/products/Canasta Maria.jpg";
import img6 from "../../../assets/products/Bidon 5 gl.jpg";

const PRODUCTS = [
  { title: "Cubeta galón", category: "Cubetas", img: img1 },
  { title: "Cubeta de 2.5 gl", category: "Cubetas", img: img2 },
  { title: "Cubeta de 5 gl", category: "Cubetas", img: img3 },
  { title: "Canasta California Semi Calada", category: "Canastas", img: img4 },
  { title: "Canasta Maria Calada", category: "Canastas", img: img5 },
  { title: "Bidón 5 gl", category: "Bidones", img: img6 },
];

const Products = (props) => {
  const [items] = useState(PRODUCTS);
  const productItems = items
    .filter((el) =>
      el.title.toLowerCase().includes(props.nameFilter.toLowerCase())
    )
    .filter(
      (el) => !props.categoryFilter || el.category === props.categoryFilter
    )
    .map((el, i) => <Item key={i} style={{ flex: "32% 0 0" }} {...el}></Item>);

  return <div className={classes.Container}>{productItems}</div>;
};

export default Products;
