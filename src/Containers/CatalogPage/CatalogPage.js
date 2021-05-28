import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Filters from "../../Components/Catalog/Filters/Filters";
import ItemDetail from "../../Components/Catalog/ItemDetail/ItemDetail";
import Products from "../../Components/Catalog/Products/Products";
import classes from "./CatalogPage.module.css";

import img1 from "../../assets/products/Cubeta de 1 gl.jpg";
import img2 from "../../assets/products/Cubeta de 2.5 gl.jpg";
import img3 from "../../assets/products/Cubetas de 5 gl.jpg";
import img4 from "../../assets/products/Canasta California.jpg";
import img5 from "../../assets/products/Canasta Maria.jpg";
import img6 from "../../assets/products/Bidon 5 gl.jpg";

const PRODUCTS = [
  {
    title: "Cubeta galón",
    category: "Cubetas",
    img: img1,
    info: [
      { name: "Color", description: "Blanco, Azul o rojo" },
      { name: "Uso", description: "Industril o alimentos" },
      { name: "Asa", description: "Plástica o metálica" },
      { name: "Tapas", description: "Lisa, Con dispensador o Con tapón" },
    ],
  },
  { title: "Cubeta de 2.5 gl", category: "Cubetas", img: img2 },
  { title: "Cubeta de 5 gl", category: "Cubetas", img: img3 },
  { title: "Canasta California Semi Calada", category: "Canastas", img: img4 },
  { title: "Canasta Maria Calada", category: "Canastas", img: img5 },
  { title: "Bidón 5 gl", category: "Bidones", img: img6 },
];

const CatalogPage = () => {
  const [nameFilter, setNameFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [detail, setDetail] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setCategoryFilter(location.search.slice(1));
  }, [location.search]);

  return (
    <div className={classes.Container}>
      <ItemDetail onClose={() => setDetail(null)} detail={detail}></ItemDetail>
      <h1>Nuestros productos</h1>
      <div className={classes.Row}>
        <Filters
          setNameFilter={setNameFilter}
          setCategoryFilter={setCategoryFilter}
          categoryFilter={categoryFilter}
        />
        <Products
          products={PRODUCTS}
          nameFilter={nameFilter}
          categoryFilter={categoryFilter}
          setDetail={setDetail}
        />
      </div>
    </div>
  );
};

export default CatalogPage;
