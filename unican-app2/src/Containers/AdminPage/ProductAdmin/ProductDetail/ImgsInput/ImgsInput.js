import axios from "axios";
import React from "react";
import { FaAngleLeft, FaAngleRight, FaPlus, FaTrash } from "react-icons/fa";
import { BASE_URL, customConfirm } from "../../../../../utils/constants";
import classes from "./ImgsInput.module.css";

import { toast } from "react-toastify";
import Button from "../../../../../Components/UI/Button/Button";

const ImgsInput = (props) => {
  const uploadImage = async (img) => {
    const formData = new FormData();
    formData.append("newImage", img);
    const toastId = toast.info(`La imagen ${img.name} se está cargando ...`, {
      autoClose: false,
    });
    await axios.post(BASE_URL + "products/img/" + props.id, formData, {
      headers: { Authorization: props.auth },
    });
    toast.dismiss(toastId);
    toast.success(`La imagen ${img.name} se ha cargado correctamente`);
    props.reload();
  };

  const deleteImage = async (imgName) => {
    customConfirm("¿Seguro que desea eliminar esta imagen?", async () => {
      const toastId = toast.error(
        `La imagen ${imgName} se está eliminando ...`,
        {
          autoClose: false,
        }
      );
      await axios.delete(
        BASE_URL + "products/img/" + props.id + "?imgName=" + imgName,
        {
          headers: { Authorization: props.auth },
        }
      );
      toast.dismiss(toastId);
      toast.success(`La imagen ${imgName} se ha eliminado correctamente`);
      props.reload();
    });
  };

  return (
    <div>
      <strong>{props.label}</strong>
      <div className={classes.Container}>
        {props.value.map((el, i) => (
          <div
            className={classes.ImageItem}
            style={{ borderWidth: i === props.value.length - 1 ? 5 : 1 }}
          >
            {i === props.value.length - 1 ? (
              <div className={classes.Portada}>Imagen de portada</div>
            ) : null}
            <strong>Archivo:</strong>
            {el.name}
            <img className={classes.Image} src={el.link} alt="img"></img>
            <div>
              <Button onClick={() => props.onSwap(i, i - 1)}>
                <FaAngleLeft />
              </Button>
              <Button onClick={() => props.onSwap(i, i + 1)}>
                <FaAngleRight />
              </Button>
              <Button>
                <FaTrash
                  style={{
                    color: "red",
                  }}
                  onClick={() => deleteImage(el.name)}
                ></FaTrash>
              </Button>
            </div>
          </div>
        ))}
        <div className={classes.ImageItem}>
          <label style={{ cursor: "pointer" }} for="upload-photo">
            <FaPlus></FaPlus>
          </label>
          <input
            style={{ display: "none" }}
            type="file"
            onChange={(e) => uploadImage(e.target.files[0])}
            id="upload-photo"
          />
        </div>
      </div>
    </div>
  );
};

export default ImgsInput;
