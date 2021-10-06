import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaAngleLeft,
  FaAngleRight,
  FaPlus,
  FaTrash,
} from "react-icons/fa";
import { toast } from "react-toastify";
import Button from "../../../Components/UI/Button/Button";
import { BASE_URL, customConfirm } from "../../../utils/constants";
import classes from "./HomeAdmin.module.css";

const HomeAdmin = (props) => {
  const [homeData, setHomeData] = useState({
    title: "",
    subtitle: "",
    imgs: [],
    vids: [],
  });

  useEffect(() => {
    get();
  }, []);

  const get = async () => {
    const res = await axios.get(BASE_URL + "home");
    res.data && setHomeData(res.data);
    res.status === 200
      ? toast.success("Actualización existosa")
      : toast.error("Actualización no realizada");
  };

  const save = async () => {
    const res = await axios.post(BASE_URL + "home", homeData, {
      headers: { Authorization: props.auth },
    });
    res.status === 200
      ? toast.success("Guardado existoso")
      : toast.error("Guardado no realizado");
  };

  const add = async (img) => {
    const formData = new FormData();
    formData.append("newImage", img);
    const toastId = toast.info(`La imagen ${img.name} se está cargando ...`, {
      autoClose: false,
    });

    await axios.post(BASE_URL + "home/img/", formData, {
      headers: { Authorization: props.auth },
    });
    toast.dismiss(toastId);
    toast.success(`La imagen ${img.name} se ha cargado correctamente`);
    get();
  };

  const del = (i) => {
    const imgName = decodeURI(homeData.imgs[i].split("/").at(-1));
    customConfirm("¿Seguro que desea eliminar esta imagen?", async () => {
      const toastId = toast.error(
        `La imagen ${imgName} se está eliminando ...`,
        {
          autoClose: false,
        }
      );
      await axios.delete(BASE_URL + "home/img/" + i + "?imgName=" + imgName, {
        headers: { Authorization: props.auth },
      });
      toast.dismiss(toastId);
      toast.success(`La imagen ${imgName} se ha eliminado correctamente`);
      get();
    });
  };

  const addVideo = async (img) => {
    const formData = new FormData();
    formData.append("newImage", img);
    const toastId = toast.info(`El video ${img.name} se está cargando ...`, {
      autoClose: false,
    });

    await axios.post(BASE_URL + "home/vid/", formData, {
      headers: { Authorization: props.auth },
    });
    toast.dismiss(toastId);
    toast.success(`El video ${img.name} se ha cargado correctamente`);
    get();
  };

  const delVideo = (i) => {
    const imgName = decodeURI(homeData.vids[i].split("/").at(-1));
    customConfirm("¿Seguro que desea eliminar esta video?", async () => {
      const toastId = toast.error(
        `El video ${imgName} se está eliminando ...`,
        {
          autoClose: false,
        }
      );
      await axios.delete(BASE_URL + "home/vid/" + i + "?imgName=" + imgName, {
        headers: { Authorization: props.auth },
      });
      toast.dismiss(toastId);
      toast.success(`El video ${imgName} se ha eliminado correctamente`);
      get();
    });
  };

  const swap = (i, n) => {
    if (i + n < 0 || i + n > homeData.imgs.length - 1) return;
    const newHomeData = { ...homeData };
    const newItems = [...newHomeData.imgs];
    [newItems[i], newItems[i + n]] = [newItems[i + n], newItems[i]];
    newHomeData.imgs = newItems;
    setHomeData(newHomeData);
  };

  const swapVideo = async (i, n) => {
    if (i + n < 0 || i + n > homeData.vids.length - 1) return;
    console.log(i, n);
    const newHomeData = { ...homeData };
    const newItems = [...newHomeData.vids];
    [newItems[i], newItems[i + n]] = [newItems[i + n], newItems[i]];
    newHomeData.vids = newItems;
    setHomeData(newHomeData);
  };

  const swapFull = (i, left) => {
    const newHomeData = { ...homeData };
    const newItems = [...newHomeData.imgs];
    const el = newItems.splice(i, 1)[0];
    left ? newItems.unshift(el) : newItems.push(el);
    newHomeData.imgs = newItems;
    console.log(newHomeData);
    setHomeData(newHomeData);
  };

  const edit = (key, value) => {
    const newHomeData = { ...homeData };
    newHomeData[key] = value;
    setHomeData(newHomeData);
  };

  const Clip = ({ url }) => {
    return (
      <video key={url} controls loop muted>
        <source src={url} />
      </video>
    );
  };

  return (
    <div>
      <h1>Inicio</h1>
      <div className={classes.Btns}>
        <Button onClick={get}>Actualizar</Button>
        <Button onClick={save}>Guardar</Button>
      </div>

      <div className={classes.Container}>
        <div className={classes.Category}>
          <label>Título: </label>
          <input
            onChange={(e) => edit("title", e.target.value)}
            value={homeData.title}
          ></input>
        </div>
        <div className={classes.Category}>
          <label>Sub Título: </label>
          <input
            onChange={(e) => edit("subtitle", e.target.value)}
            value={homeData.subtitle}
          ></input>
        </div>
      </div>
      <h2>Imágenes de inicio</h2>
      <div className={classes.Container}>
        {homeData.imgs.map((el, i) => (
          <div key={i} className={classes.Item}>
            <img src={el} alt="test" />
            <FaAngleDoubleLeft onClick={() => swapFull(i, true)} />
            <FaAngleLeft onClick={() => swap(i, -1)} />
            <FaTrash onClick={() => del(i)} />
            <FaAngleRight onClick={() => swap(i, 1)} />
            <FaAngleDoubleRight onClick={() => swapFull(i, false)} />
          </div>
        ))}
        <div className={classes.Item}>
          <label style={{ cursor: "pointer" }} htmlFor="upload-photo">
            <FaPlus></FaPlus>
          </label>
          <input
            style={{ display: "none" }}
            type="file"
            onChange={(e) => add(e.target.files[0])}
            id="upload-photo"
          />
        </div>
      </div>
      <h2>Videos de inicio</h2>
      <div className={classes.Container}>
        {homeData.vids.map((el, i) => (
          <div key={i} className={classes.Item}>
            <Clip url={el}></Clip>
            <FaAngleLeft onClick={() => swapVideo(i, -1)} />
            <FaTrash onClick={() => delVideo(i)} />
            <FaAngleRight onClick={() => swapVideo(i, 1)} />
          </div>
        ))}
        <div className={classes.Item}>
          <label style={{ cursor: "pointer" }} htmlFor="upload-video">
            <FaPlus></FaPlus>
          </label>
          <input
            style={{ display: "none" }}
            type="file"
            onChange={(e) => addVideo(e.target.files[0])}
            id="upload-video"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeAdmin;
