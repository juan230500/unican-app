import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Filters from "../../Components/Catalog/Filters/Filters";
import ItemDetail from "../../Components/Catalog/ItemDetail/ItemDetail";
import Products from "../../Components/Catalog/Products/Products";
import classes from "./CatalogPage.module.css";
import productsJson from "../../assets/products.json";

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
    axios
      .get("http://192.168.100.111:3000/products")
      .then((response) => setProducts(response.data))
      .catch((e) => {
        console.log(e);
        setProducts(productsJson);
      });
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
