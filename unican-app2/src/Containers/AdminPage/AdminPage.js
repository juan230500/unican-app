import React, { useEffect, useState } from "react";
import Button from "../../Components/UI/Button/Button";
import classes from "./AdminPage.module.css";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";
import AuthForm from "./AuthForm/AuthForm";
import ProductList from "./ProductList/ProductList";
import ProductDetail from "./ProductDetail/ProductDetail";
import { FaSync } from "react-icons/fa";

const FILTERED_DATA = {
  title: { label: "Título", type: "String" },
  category: { label: "Categoría", type: "String" },
  imgs: { label: "Links de imágenes", type: ["Image"] },
  info: {
    label: "Características",
    type: [
      {
        name: { label: "Característica", type: "String" },
        description: { label: "Descripción", type: "String" },
        options: { label: "Opciones", type: ["String"] },
      },
    ],
  },
};

const AdminPage = () => {
  const [verified, setVerified] = useState(false);
  const [items, setItems] = useState([]);
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    getProducts();
  }, []);

  const openNewProduct = async () => {
    const newDetail = {};
    Object.keys(FILTERED_DATA).forEach(
      (el) => (newDetail[el] = Array.isArray(FILTERED_DATA[el].type) ? [] : "")
    );
    setDetail(newDetail);
  };

  const getProducts = async () => {
    const result = await axios.get(BASE_URL + "products");
    setItems(result.data);
  };

  const createProduct = async () => {
    if (window.confirm("¿Está seguro de crear el producto?")) {
      const result = await axios.post(BASE_URL + "products", detail);
      result.status === 200
        ? alert("Creación existosa")
        : alert("Creación no realizada");
      setDetail(null);
      getProducts();
    }
  };

  const modifyProduct = async () => {
    if (window.confirm("¿Está seguro de modificar el producto?")) {
      const result = await axios.put(
        BASE_URL + "products/" + detail._id,
        detail
      );
      result.status === 200
        ? alert("Modificación existosa")
        : alert("Modificación no realizada");
      setDetail(null);
      getProducts();
    }
  };

  const deleteProduct = async () => {
    if (window.confirm("¿Está seguro de eliminar el producto?")) {
      const result = await axios.delete(
        BASE_URL + "products/" + detail._id,
        detail
      );
      result.status === 200
        ? alert("Eliminación existosa")
        : alert("Eliminación no realizada");
      setDetail(null);
      getProducts();
    }
  };

  return (
    <div className={classes.Admin}>
      {verified ? (
        <div className={classes.Data}>
          <h1>Administrador de productos</h1>
          {!detail && (
            <div className={classes.Row}>
              <Button onClick={getProducts}>
                <FaSync />
              </Button>
              <Button onClick={openNewProduct}>Nuevo Producto</Button>
            </div>
          )}
          {detail ? (
            <ProductDetail
              FILTERED_DATA={FILTERED_DATA}
              detail={detail}
              setDetail={setDetail}
              modifyProduct={modifyProduct}
              createProduct={createProduct}
              deleteProduct={deleteProduct}
            />
          ) : (
            <ProductList items={items} setDetail={setDetail} />
          )}
        </div>
      ) : (
        <AuthForm setVerified={setVerified} />
      )}
    </div>
  );
};

export default AdminPage;
