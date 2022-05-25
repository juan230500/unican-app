import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { FaArrowDown, FaArrowUp, FaPlus, FaTrash } from "react-icons/fa";
import ReactMarkdown from "react-markdown";
import { toast } from "react-toastify";
import Button from "../../../Components/UI/Button/Button";
import { BASE_URL } from "../../../utils/constants";
import classes from "./AboutAdmin.module.css";

const AboutAdmin = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    get();
  }, []);

  const get = async () => {
    const res = await axios.get(BASE_URL + "about");
    setItems(res.data);
    res.status === 200
      ? toast.success("Actualización existosa")
      : toast.error("Actualización no realizada");
  };

  const swap = (i, n) => {
    console.log(i, n);
    if (i + n < 0 || i + n > items.length - 1) return;
    const newItems = [...items];
    [newItems[i], newItems[i + n]] = [newItems[i + n], newItems[i]];
    setItems(newItems);
  };

  const save = async () => {
    const res = await axios.post(BASE_URL + "about", items, {
      headers: { Authorization: props.auth },
    });
    res.status === 200
      ? toast.success("Guardado existoso")
      : toast.error("Guardado no realizado");
  };

  const add = () => {
    const newItems = [...items];
    newItems.push({ name: "" });
    setItems(newItems);
  };

  const addImage = async (img, i) => {
    const formData = new FormData();
    formData.append("newImage", img);
    const toastId = toast.info(`La imagen ${img.name} se está cargando ...`, {
      autoClose: false,
    });
    console.log(items[i]);

    // await axios.post(BASE_URL + "about/img/", formData, {
    //   headers: { Authorization: props.auth },
    // });
    toast.dismiss(toastId);
    toast.success(`La imagen ${img.name} se ha cargado correctamente`);
    get();
  };

  const del = (i) => {
    if (items.length < 2) {
      toast.warning("Se debe dejar al menos un about");
      return;
    }
    const newItems = [...items];
    newItems.splice(i, 1);
    setItems(newItems);
  };

  const edit = (i, key, value) => {
    console.log(value);
    const newItems = [...items];
    newItems[i][key] = value;
    setItems(newItems);
  };

  return (
    <div>
      <h1>Nuestra empresa</h1>
      <div className={classes.Btns}>
        <Button onClick={get}>Actualizar</Button>
        <Button onClick={save}>Guardar</Button>
      </div>

      <div className={classes.Container}>
        {items.map((el, i) => (
          <div className={classes.About}>
            <div style={{ flex: 1 }}>
              <h3 className={classes.Title}>
                Texto{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.markdownguide.org/"
                >
                  Formato markdown
                </a>
              </h3>

              <textarea
                onChange={(e) => edit(i, "text", e.target.value)}
                value={el.text}
              ></textarea>
              <h3 className={classes.Title}>
                Icono{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://react-icons.github.io/react-icons/icons?name=fa"
                >
                  Lista de íconos disponibles
                </a>
              </h3>
              <input
                onChange={(e) => edit(i, "icon", e.target.value)}
                value={el.icon}
              ></input>
              <h3 className={classes.Title}>Tipo</h3>
              <select
                value={el.level}
                onChange={(e) => edit(i, "level", e.target.value)}
              >
                <option value="1">Bloque (Ej. Historia)</option>
                <option value="2">Sección (Ej. Valores)</option>
              </select>
              <h3 className={classes.Title}>Especial</h3>
              <select
                value={el.special}
                onChange={(e) => edit(i, "special", e.target.value)}
              >
                <option value="">Ninguno</option>
                <option value="green">Piensa Verde</option>
                <option value="certify">Certificados</option>
              </select>
              <label style={{ cursor: "pointer" }} htmlFor={"upload-photo" + i}>
                <h3>Subir una imagen</h3>
              </label>
              <input
                style={{ display: "none" }}
                type="file"
                onChange={(e) => addImage(e.target.files[0], i)}
                id={"upload-photo" + i}
              />
              <div>
                <FaTrash onClick={() => del(i)} color="red" />
                <FaArrowUp onClick={() => swap(i, -1)} />
                <FaArrowDown onClick={() => swap(i, 1)} />
              </div>
            </div>
            <div style={{ flex: 2 }}>
              <h3 className={classes.Title}>Vista previa</h3>
              <div className={classes.Deco}>
                <ReactMarkdown>{el.text}</ReactMarkdown>
              </div>
            </div>
          </div>
        ))}
        <div className={classes.About}>
          <FaPlus onClick={add}></FaPlus>
        </div>
      </div>
    </div>
  );
};

export default AboutAdmin;
