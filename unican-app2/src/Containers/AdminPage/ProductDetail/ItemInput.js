import React from "react";

const ItemInput = (props) => {
  const chooseSingleInput = (value, setter, type) => {
    if (type === "String")
      return (
        <input value={value} onChange={(e) => setter(e.target.value)}></input>
      );
    if (type === "Image")
      return (
        <div style={{ display: "flex" }}>
          <input value={value} onChange={(e) => setter(e.target.value)}></input>
          <img style={{ height: 100 }} src={value} alt={value}></img>
        </div>
      );
  };

  const chooseInput = (type) => {
    if (Array.isArray(type))
      return props.value.map((el, i) => (
        <ItemInput
          delete={() =>
            window.confirm("¿Seguro que desea eliminar este item?") &&
            props.setter(props.value.filter((_, index) => index !== i))
          }
          value={el}
          setter={(val) => {
            props.value[i] = val;
            props.setter(props.value);
          }}
          schema={{ label: i + ") [ELIMINAR]", type: type[0] }}
        />
      ));
    else if (typeof type === "object") {
      return Object.keys(type).map((id) => (
        <ItemInput
          value={props.value[id]}
          setter={(val) => props.setter({ ...props.value, [id]: val })}
          schema={type[id]}
        />
      ));
    } else return chooseSingleInput(props.value, props.setter, type);
  };

  const addValue = (type) => {
    let newValue;
    console.log(type);
    if (typeof type === "object") {
      newValue = {};
      Object.keys(type).forEach(
        (k) => (newValue[k] = Array.isArray(type[k].type) ? [] : "")
      );
    } else {
      newValue = "";
    }
    console.log([...props.value, newValue]);
    props.setter([...props.value, newValue]);
  };

  return (
    <div style={{ marginLeft: 24 }}>
      <strong
        style={{ cursor: props.delete ? "pointer" : "" }}
        onClick={props.delete}
      >
        {props.schema.label}
      </strong>
      {chooseInput(props.schema.type)}
      {Array.isArray(props.schema.type) && (
        <button
          style={{ marginLeft: 24 }}
          onClick={() => addValue(props.schema.type[0])}
        >
          Agregar
        </button>
      )}
    </div>
  );
};

export default ItemInput;
