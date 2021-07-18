import React, { useEffect, useState } from "react";
import Button from "../../Components/UI/Button/Button";
import classes from "./AdminPage.module.css";
import axios from "axios";
import { BASE_URL, customConfirm } from "../../utils/constants";
import AuthForm from "./AuthForm/AuthForm";
import ProductList from "./ProductList/ProductList";
import ProductDetail from "./ProductDetail/ProductDetail";
import { FaSync } from "react-icons/fa";
import { toast } from "react-toastify";

const AdminPage = () => {
  const [auth, setAuth] = useState(null);
  const [items, setItems] = useState([]);
  const [detail, setDetail] = useState(null);

  const getProducts = async (reload = false) => {
    const result = await axios.get(BASE_URL + "products");
    if (reload) {
      const currentItem = result.data.find((el) => el._id === detail._id);
      setDetail(currentItem);
    }
    setItems(result.data);
  };

  useEffect(() => getProducts(), []);

  const newProduct = () => {
    setDetail({ title: "", category: "", info: [], imgs: [] });
  };

  const createProduct = async () => {
    customConfirm("¿Está seguro de crear el producto?", async () => {
      const result = await axios.post(BASE_URL + "products", detail, {
        headers: { Authorization: auth },
      });
      result.status === 200
        ? toast.success("Creación existosa")
        : toast.error("Creación no realizada");
      setDetail(null);
      getProducts();
    });
  };

  const modifyProduct = async () => {
    customConfirm("¿Está seguro de modificar el producto?", async () => {
      const result = await axios.put(
        BASE_URL + "products/" + detail._id,
        detail,
        {
          headers: { Authorization: auth },
        }
      );
      result.status === 200
        ? toast.success("Modificación existosa")
        : toast.error("Modificación no realizada");
      setDetail(null);
      getProducts();
    });
  };

  const deleteProduct = async () => {
    customConfirm("¿Está seguro de eliminar el producto?", async () => {
      const result = await axios.delete(BASE_URL + "products/" + detail._id, {
        headers: { Authorization: auth },
      });
      result.status === 200
        ? toast.success("Eliminación existosa")
        : toast.error("Eliminación no realizada");
      setDetail(null);
      getProducts();
    });
  };

  return (
    <div className={classes.Admin}>
      {!auth ? (
        <AuthForm setAuth={setAuth} />
      ) : (
        <div className={classes.Data}>
          <h1>{detail ? detail.title : "Administrador de productos"}</h1>
          {!detail && (
            <div className={classes.Row}>
              <Button onClick={() => getProducts()}>
                <FaSync />
              </Button>
              <Button onClick={newProduct}>Nuevo Producto</Button>
            </div>
          )}
          {detail ? (
            <ProductDetail
              auth={auth}
              detail={detail}
              setDetail={setDetail}
              modifyProduct={modifyProduct}
              createProduct={createProduct}
              deleteProduct={deleteProduct}
              reload={() => getProducts(true)}
            />
          ) : (
            <ProductList items={items} setDetail={setDetail} />
          )}
        </div>
      )}
    </div>
  );
};

export default AdminPage;
