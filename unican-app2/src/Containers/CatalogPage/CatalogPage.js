import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import classes from "./CatalogPage.module.css";
import productsJson from "../../assets/products.json";

import { BASE_URL } from "../../utils/constants";
import Filters from "./Filters/Filters";
import ItemDetail from "./ItemDetail/ItemDetail";
import Modal from "../../Components/UI/Modal/Modal";
import Products from "./Products/Products";

const CatalogPage = () => {
  const [nameFilter, setNameFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState(null);
  const [detail, setDetail] = useState(null);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const location = useLocation();

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

    const result2 = await axios.get(BASE_URL + "categories");
    setCategories(result2.data.map((el) => el.name));
  };

  useEffect(() => {
    getProducts();
  }, []);

  const filterProducts = (products) => {
    const filtered = products
      .filter((el) => el.title.toLowerCase().includes(nameFilter.toLowerCase()))
      .filter((el) => !categoryFilter || el.category === categoryFilter);
    return filtered;
  };

  return (
    <div className={classes.Container}>
      <Modal onClose={() => setDetail(null)} show={detail}>
        {detail && (
          <ItemDetail
            onClose={() => setDetail(null)}
            detail={detail}
          ></ItemDetail>
        )}
      </Modal>
      <h1>Nuestros productos</h1>
      <Filters
        setNameFilter={setNameFilter}
        setCategoryFilter={setCategoryFilter}
        categoryFilter={categoryFilter}
        categories={categories}
      />
      <Products
        categories={categories}
        products={filterProducts(products)}
        setDetail={setDetail}
      />
    </div>
  );
};

export default CatalogPage;
