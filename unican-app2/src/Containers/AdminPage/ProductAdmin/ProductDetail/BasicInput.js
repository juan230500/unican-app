import React from "react";

const BasicInput = (props) => {
  return (
    <div>
      <strong>{props.label}</strong>
      {props.options ? (
        <select
          value={props.value}
          onChange={(e) => props.onChange(e.target.value)}
        >
          {props.options.map((el) => (
            <option value={el}>{el}</option>
          ))}
        </select>
      ) : (
        <input
          value={props.value}
          onChange={(e) => props.onChange(e.target.value)}
        ></input>
      )}
    </div>
  );
};

export default BasicInput;
