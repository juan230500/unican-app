import React from "react";
import { FaAngleRight } from "react-icons/fa";
import classes from "./Info.module.css";

const Info = (props) => {
  return (
    <div
      style={{ ...props.style }}
      onClick={props.onExpand}
      className={[classes.Info, props.expanded ? classes.Expanded : null].join(
        " "
      )}
    >
      <h2>
        <FaAngleRight /> {props.title}
      </h2>
      {props.showText && <p>{props.text}</p>}
    </div>
  );
};

export default Info;
