import React from "react";
import classes from "./ProductDetail.module.css";
import Button from "../../../Components/UI/Button/Button";
import BasicInput from "./BasicInput";
import InfoInput from "./InfoInput/InfoInput";
import ImgsInput from "./ImgsInput/ImgsInput";
import { customConfirm } from "../../../utils/constants";

const ProductDetail = (props) => {
  const onChange = (value, key) => {
    const newDetail = { ...props.detail };
    newDetail[key] = value;
    props.setDetail(newDetail);
  };

  return (
    <div className={classes.Detail}>
      <div className={classes.Row}>
        <Button
          onClick={() => {
            customConfirm(
              "¿Está seguro de salir sin guardar los cambios?",
              props.setDetail
            );
          }}
        >
          Cerrar
        </Button>
        <Button
          onClick={props.detail._id ? props.modifyProduct : props.createProduct}
        >
          Guardar cambios
        </Button>
        {props.detail._id && (
          <Button onClick={props.deleteProduct}>Eliminar producto</Button>
        )}
      </div>
      <div className={classes.Container}>
        <BasicInput
          value={props.detail.title}
          label="Nombre del producto"
          onChange={(v) => onChange(v, "title")}
        ></BasicInput>
        <BasicInput
          value={props.detail.category}
          label="Categoría del producto"
          onChange={(v) => onChange(v, "category")}
        ></BasicInput>
        <InfoInput
          value={props.detail.info}
          label="Atributos del producto"
          onChange={(v) => onChange(v, "info")}
        ></InfoInput>
        <ImgsInput
          auth={props.auth}
          id={props.detail._id}
          value={props.detail.imgs}
          label="Imágenes del producto"
          reload={props.reload}
        ></ImgsInput>
      </div>
    </div>
  );
};

export default ProductDetail;
