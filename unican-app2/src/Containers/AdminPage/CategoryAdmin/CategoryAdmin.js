import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaPencilAlt,
  FaPlus,
  FaTrash,
} from "react-icons/fa";
import { toast } from "react-toastify";
import Button from "../../../Components/UI/Button/Button";
import { BASE_URL } from "../../../utils/constants";
import classes from "./CategoryAdmin.module.css";

const CategoryAdmin = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    get();
  }, []);

  const get = async () => {
    const res = await axios.get(BASE_URL + "categories");
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
    const res = await axios.post(BASE_URL + "categories", items, {
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

  const del = (i) => {
    if (items.length < 2) {
      toast.warning("Se debe dejar al menos una categoría");
      return;
    }
    const newItems = [...items];
    newItems.splice(i, 1);
    setItems(newItems);
  };

  const edit = (i, value) => {
    const newItems = [...items];
    newItems[i].name = value;
    setItems(newItems);
  };

  return (
    <div>
      <h1>Categorías</h1>
      <div className={classes.Btns}>
        <Button onClick={get}>Actualizar</Button>
        <Button onClick={save}>Guardar</Button>
      </div>

      <div className={classes.Container}>
        {items.map((el, i) => (
          <div className={classes.Category}>
            <FaPencilAlt />
            <input
              onChange={(e) => edit(i, e.target.value)}
              value={el.name}
            ></input>
            <FaTrash onClick={() => del(i)} color="red" />
            <FaArrowLeft onClick={() => swap(i, -1)} />
            <FaArrowRight onClick={() => swap(i, 1)} />
          </div>
        ))}
        <div className={classes.Category}>
          <FaPlus onClick={add}></FaPlus>
        </div>
      </div>
    </div>
  );
};

export default CategoryAdmin;
