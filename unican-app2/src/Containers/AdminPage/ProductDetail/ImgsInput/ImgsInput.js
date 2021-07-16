import axios from "axios";
import React, { useState } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";
import { SyncLoader } from "react-spinners";
import { BASE_URL, customConfirm } from "../../../../utils/constants";
import classes from "./ImgsInput.module.css";

import { toast } from "react-toastify";

const ImgsInput = (props) => {
  const [loading, setLoading] = useState(false);

  const uploadImage = async (img) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("newImage", img);
    await axios.post(BASE_URL + "products/img/" + props.id, formData, {
      headers: { Authorization: props.auth },
    });
    toast.success("Imagen subida con éxito");
    props.reload();
    setLoading(false);
  };

  const deleteImage = async (imgName) => {
    customConfirm("¿Seguro que desea eliminar esta imagen?", async () => {
      setLoading(true);
      await axios.delete(
        BASE_URL + "products/img/" + props.id + "?imgName=" + imgName,
        {
          headers: { Authorization: props.auth },
        }
      );
      toast.success("Imagen eliminada con éxito");
      props.reload();
      setLoading(false);
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
        {loading ? (
          <SyncLoader></SyncLoader>
        ) : (
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
        )}
      </div>
    </div>
  );
};

export default ImgsInput;
