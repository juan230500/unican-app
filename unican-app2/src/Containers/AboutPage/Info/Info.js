import React, { useEffect, useState } from "react";
import classes from "./Info.module.css";
import * as Icons from "react-icons/fa";
import cert1 from "../../../assets/about/Certificado ISO 50001 UNICAN.jpg";
import cert2 from "../../../assets/about/Certificado ISO 2015_page-0001.jpg";

const Info = (props) => {
  const [focus, setFocus] = useState(false);

  useEffect(() => {
    setInterval(() => {
      Math.random() > 0.8 && props.focus ? setFocus(true) : setFocus(false);
    }, 2000);
  }, [props.focus]);

  const Icon = props.icon ? Icons[props.icon] : null;

  return (
    <div
      style={{ ...props.style, "--randTime": Math.random() * 2 + "s" }}
      onClick={props.onExpand}
      className={[
        classes.Info,
        props.expanded && classes.Expanded,
        focus && classes.Focus,
      ].join(" ")}
    >
      <div style={{ margin: "auto" }}>
        <h2>{props.title}</h2>
        {Icon && <Icon />}
        {props.showText && <p>{props.text}</p>}
        {props.certify && props.showText && (
          <div>
            <img
              onClick={(e) => {
                e.stopPropagation();
                window.open(cert1);
              }}
              src={cert1}
              alt={cert1}
            ></img>
            <img
              onClick={(e) => {
                e.stopPropagation();
                window.open(cert2);
              }}
              src={cert2}
              alt={cert2}
            ></img>
          </div>
        )}
      </div>
    </div>
  );
};

export default Info;
