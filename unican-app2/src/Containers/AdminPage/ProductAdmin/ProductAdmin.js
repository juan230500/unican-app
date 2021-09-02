import React, { useEffect, useState } from "react";
import Button from "../../../Components/UI/Button/Button";
import classes from "./ProductAdmin.module.css";
import axios from "axios";
import { BASE_URL, customConfirm } from "../../../utils/constants";
import ProductList from "./ProductList/ProductList";
import ProductDetail from "./ProductDetail/ProductDetail";
import { FaSync } from "react-icons/fa";
import { toast } from "react-toastify";

const ProductAdmin = (props) => {
  const [items, setItems] = useState([]);
  const [options, setOptions] = useState([]);
  const [detail, setDetail] = useState(null);

  const getProducts = async () => {
    const result = await axios.get(BASE_URL + "products");
    setItems(result.data);

    const result2 = await axios.get(BASE_URL + "categories");
    setOptions(result2.data.map((el) => el.name));

    return result.data;
  };

  const onReload = async () => {
    const data = await getProducts();
    const currentItem = data.find((el) => el._id === detail._id);
    setDetail(currentItem);
  };

  useEffect(() => {
    getProducts(false);
  }, []);

  const newProduct = () => {
    setDetail({ title: "", category: "", info: [], imgs: [] });
  };

  const createProduct = async () => {
    customConfirm("¿Está seguro de crear el producto?", async () => {
      const result = await axios.post(BASE_URL + "products", detail, {
        headers: { Authorization: props.auth },
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
          headers: { Authorization: props.auth },
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
        headers: { Authorization: props.auth },
      });
      result.status === 200
        ? toast.success("Eliminación existosa")
        : toast.error("Eliminación no realizada");
      setDetail(null);
      getProducts();
    });
  };

  return (
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
          auth={props.auth}
          detail={detail}
          setDetail={setDetail}
          modifyProduct={modifyProduct}
          createProduct={createProduct}
          deleteProduct={deleteProduct}
          reload={onReload}
          options={options}
        />
      ) : (
        <ProductList items={items} setDetail={setDetail} />
      )}
    </div>
  );
};

export default ProductAdmin;
