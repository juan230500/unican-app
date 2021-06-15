import React, { useState } from "react";
import Input from "../../Components/UI/Input/Input";
import Button from "../../Components/UI/Button/Button";
import classes from "./AdminPage.module.css";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";

const FILTERED_DATA = {
  title: "Título",
  img: "Link de la imagen principal",
  category: "Categoría",
  //info: "Descripción",
};

const AdminPage = () => {
  const [verified, setVerified] = useState(false);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [items, setItems] = useState([]);
  const [detail, setDetail] = useState(null);

  const verify = async (e) => {
    e.preventDefault();
    const result = await axios.post(BASE_URL + "admin/login/", null, {
      headers: { Authorization: "Basic " + btoa(`${user}:${password}`) },
    });
    if (result.data.status !== "ok") {
      alert("Nombre o contraseña inválido");
      return;
    }
    setVerified(true);
  };

  const openNewProduct = async () => {
    const newDetail = {};
    Object.keys(FILTERED_DATA).forEach((el) => (newDetail[el] = ""));
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

  const filterDetail = (key) => {
    if (Object.keys(FILTERED_DATA).includes(key)) return true;
    return false;
  };

  return (
    <div className={classes.Admin}>
      {verified ? (
        <div className={classes.Data}>
          <h1>Administrador de productos</h1>

          {detail ? (
            <div className={classes.Detail}>
              {Object.keys(detail)
                .filter(filterDetail)
                .map((el, i) => (
                  <div key={i}>
                    <strong>{el}</strong>
                    <input
                      value={detail[el]}
                      onChange={(e) =>
                        setDetail({ ...detail, [el]: e.target.value })
                      }
                    ></input>
                  </div>
                ))}
              <div className={classes.Row}>
                <Button onClick={() => setDetail()}>Cerrar</Button>
                <Button onClick={detail._id ? modifyProduct : createProduct}>
                  Guardar cambios
                </Button>
                {detail._id && (
                  <Button onClick={deleteProduct}>Eliminar</Button>
                )}
              </div>
            </div>
          ) : (
            [
              <div className={classes.Row}>
                <Button onClick={getProducts}>Refrescar</Button>
                <Button onClick={openNewProduct}>Nuevo Producto</Button>
              </div>,
              items.map((el) => (
                <div className={classes.Item} onClick={() => setDetail(el)}>
                  {el.title}
                </div>
              )),
            ]
          )}
        </div>
      ) : (
        <form className={classes.Container}>
          <h2>Introduzca sus credenciales de administrador</h2>
          <Input
            value={user}
            onChange={(e) => setUser(e.target.value)}
            placeholder="usuario"
          />
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="contraseña"
          />
          <Button onClick={(e) => verify(e)}>Confirmar</Button>
        </form>
      )}
    </div>
  );
};

export default AdminPage;
