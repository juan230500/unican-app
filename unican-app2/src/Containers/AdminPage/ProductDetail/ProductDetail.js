import React from "react";
import classes from "./ProductDetail.module.css";
import Button from "../../../Components/UI/Button/Button";
import ItemInput from "./ItemInput";

const ProductDetail = (props) => {
  return (
    <div className={classes.Detail}>
      <div className={classes.Row}>
        <Button
          onClick={() =>
            window.confirm(
              "¿Seguro que desea salir sin guardar los cambios?"
            ) && props.setDetail()
          }
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
      {Object.keys(props.FILTERED_DATA).map((id) => (
        <ItemInput
          value={props.detail[id]}
          setter={(val) => props.setDetail({ ...props.detail, [id]: val })}
          schema={props.FILTERED_DATA[id]}
        />
      ))}
    </div>
  );
};

export default ProductDetail;
