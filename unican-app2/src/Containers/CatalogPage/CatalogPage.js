import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Filters from "../../Components/Catalog/Filters/Filters";
import ItemDetail from "../../Components/Catalog/ItemDetail/ItemDetail";
import Modal from "../../Components/UI/Modal/Modal";
import Products from "../../Components/Catalog/Products/Products";
import classes from "./CatalogPage.module.css";
import productsJson from "../../assets/products.json";

import axios from "axios";
import { BASE_URL } from "../../utils/constants";

const CatalogPage = () => {
  const [nameFilter, setNameFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState(null);
  const [detail, setDetail] = useState(null);
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    setCategoryFilter(location.search.slice(1));
  }, [location.search]);

  const getProducts = async () => {
    axios
      .get(BASE_URL + "products/")
      .then((response) => setProducts(response.data))
      .catch((e) => {
        console.log(e);
        setProducts(productsJson);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    detail ? history.push("/catalog/detail") : history.push("/catalog");
  }, [detail, history]);

  useEffect(() => {
    location.pathname === "/catalog" && setDetail();
  }, [location.pathname]);

  const filterProducts = (products) => {
    const filtered = products
      .filter((el) => el.title.toLowerCase().includes(nameFilter.toLowerCase()))
      .filter((el) => !categoryFilter || el.category === categoryFilter);
    return filtered;
  };

  return (
    <div className={classes.Container}>
      <Modal onClose={() => setDetail(null)} show={detail}>
        {detail && <ItemDetail detail={detail}></ItemDetail>}
      </Modal>
      <h1>Nuestros productos</h1>
      <Filters
        setNameFilter={setNameFilter}
        setCategoryFilter={setCategoryFilter}
        categoryFilter={categoryFilter}
      />
      <Products products={filterProducts(products)} setDetail={setDetail} />
    </div>
  );
};

export default CatalogPage;
