import React, { useState } from "react";
import Filters from "../../Components/Catalog/Filters/Filters";
import Products from "../../Components/Catalog/Products/Products";
import classes from "./CatalogPage.module.css";

const CatalogPage = () => {
  const [nameFilter, setNameFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  return (
    <div className={classes.Container}>
      <h1>Nuestros productos</h1>
      <div className={classes.Row}>
        <Filters
          setNameFilter={setNameFilter}
          setCategoryFilter={setCategoryFilter}
          categoryFilter={categoryFilter}
        />
        <Products nameFilter={nameFilter} categoryFilter={categoryFilter} />
      </div>
    </div>
  );
};

export default CatalogPage;
