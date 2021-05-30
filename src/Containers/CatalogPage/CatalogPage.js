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
import axios from "axios";

const CatalogPage = () => {
  const [nameFilter, setNameFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [detail, setDetail] = useState(null);
  const [products, setProducts] = useState([]);
  const location = useLocation();

  useEffect(() => {
    setCategoryFilter(location.search.slice(1));
  }, [location.search]);

  const getProducts = async () => {
    const response = await axios.get("http://192.168.100.111:3000/products");
    console.log(response.data);
    setProducts(response.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

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
          products={products}
          nameFilter={nameFilter}
          categoryFilter={categoryFilter}
          setDetail={setDetail}
        />
      </div>
    </div>
  );
};

export default CatalogPage;
