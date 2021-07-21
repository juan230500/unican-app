import axios from "axios";
import React from "react";
import { FaPlus, FaTrash } from "react-icons/fa";
import { BASE_URL, customConfirm } from "../../../../utils/constants";
import classes from "./ImgsInput.module.css";

import { toast } from "react-toastify";

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
      toast.success(`La imagen ${imgName} se ha eliminada correctamente`);
      props.reload();
    });
  };

  return (
    <div>
      <strong>{props.label}</strong>
      <div className={classes.Container}>
        {props.value.map((el) => (
          <div className={classes.ImageItem}>
            <strong>Archivo: </strong>
            {el.name}
            <img className={classes.Image} src={el.link} alt="img"></img>
            <FaTrash
              style={{ cursor: "pointer", color: "red", marginLeft: "auto" }}
              onClick={() => deleteImage(el.name)}
            ></FaTrash>
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
