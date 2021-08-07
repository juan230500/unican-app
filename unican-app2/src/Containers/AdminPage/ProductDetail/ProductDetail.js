import React, { useState } from "react";
import classes from "./ProductDetail.module.css";
import Button from "../../../Components/UI/Button/Button";
import BasicInput from "./BasicInput";
import InfoInput from "./InfoInput/InfoInput";
import ImgsInput from "./ImgsInput/ImgsInput";
import { customConfirm } from "../../../utils/constants";

const ProductDetail = (props) => {
  const [changed, setChanged] = useState(false);

  const onChange = (value, key) => {
    const newDetail = { ...props.detail };
    newDetail[key] = value;
    props.setDetail(newDetail);
    setChanged(true);
  };

  const onSwap = (i, j, key) => {
    const newDetail = { ...props.detail };
    console.log(i, j, key);
    if (
      i < 0 ||
      j < 0 ||
      newDetail[key].length < i ||
      newDetail[key].length < j
    )
      return;
    [newDetail[key][i], newDetail[key][j]] = [
      newDetail[key][j],
      newDetail[key][i],
    ];
    console.log(newDetail[key]);
    props.setDetail(newDetail);
  };

  return (
    <div className={classes.Detail}>
      <div className={classes.Row}>
        <Button
          onClick={() => {
            !changed
              ? props.setDetail()
              : customConfirm(
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
        <div style={{ height: changed ? 32 : 0 }} className={classes.Alert}>
          <strong>Hay cambios sin guardar</strong>
        </div>
        <BasicInput
          value={props.detail.title}
          label="Nombre del producto"
          onChange={(v) => onChange(v, "title")}
        ></BasicInput>
        <BasicInput
          value={props.detail.category}
          label="Categoría del producto"
          options={["Cubetas", "Canastas", "Cajas", "Bidón"]}
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
          onSwap={(i, j) => onSwap(i, j, "imgs")}
          label="Imágenes del producto"
          reload={props.reload}
        ></ImgsInput>
      </div>
    </div>
  );
};

export default ProductDetail;
