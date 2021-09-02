import React from "react";
import { FaPlus, FaTrash } from "react-icons/fa";
import { customConfirm } from "../../../../../utils/constants";
import classes from "./InfoInput.module.css";

const InfoInput = (props) => {
  const modifyListValue = (i, v, key) => {
    const newList = [...props.value];
    newList[i][key] = v;
    props.onChange(newList);
  };

  const deleteListValue = (i) => {
    customConfirm("¿Seguro que desea borrar el item?", () => {
      const newList = [...props.value];
      newList.splice(i, 1);
      props.onChange(newList);
    });
  };

  const newListValue = () => {
    const newList = [...props.value];
    newList.push({ name: "", description: "", options: [] });
    props.onChange(newList);
  };

  let inputs = props.value.map((el, i) => (
    <div className={classes.ListItem}>
      <h4>Atributo {i + 1}</h4>
      <input
        value={el.name}
        onChange={(e) => modifyListValue(i, e.target.value, "name")}
      ></input>
      <h4>Descripción {i + 1}</h4>
      <input
        value={el.description}
        onChange={(e) => modifyListValue(i, e.target.value, "description")}
      ></input>
      <FaTrash
        style={{ cursor: "pointer", marginLeft: "auto" }}
        onClick={() => deleteListValue(i)}
      />
    </div>
  ));

  return (
    <div>
      <strong>{props.label}</strong>
      <div className={classes.Container}>
        {inputs}
        <div className={classes.ListItem}>
          <FaPlus onClick={newListValue} style={{ cursor: "pointer" }} />
        </div>
      </div>
    </div>
  );
};

export default InfoInput;
