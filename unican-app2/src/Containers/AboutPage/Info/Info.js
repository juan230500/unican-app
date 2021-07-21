import React from "react";
import { FaAngleRight } from "react-icons/fa";
import classes from "./Info.module.css";
import cert1 from "../../../assets/about/Certificado ISO 50001 UNICAN.jpg";

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
      {props.certify && (
        <div>
          <img
            style={{ height: 420, maxWidth: "100%" }}
            src={cert1}
            alt={cert1}
          ></img>
        </div>
      )}
    </div>
  );
};

export default Info;
