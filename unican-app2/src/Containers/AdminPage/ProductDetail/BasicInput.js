import React from "react";

const BasicInput = (props) => {
  return (
    <div>
      <strong>{props.label}</strong>
      <input
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
      ></input>
    </div>
  );
};

export default BasicInput;
