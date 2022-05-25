import React, { useEffect, useState } from "react";
import classes from "./Info.module.css";
import * as Icons from "react-icons/fa";
import cert1 from "../../../assets/about/cert1.png";
import cert2 from "../../../assets/about/cert2.png";
import rec from "../../../assets/about/rec.jpg";
import green2 from "../../../assets/about/green.jpeg";
import ReactMarkdown from "react-markdown";

const Info = (props) => {
  const [focus, setFocus] = useState(false);

  useEffect(() => {
    setInterval(() => {
      Math.random() > 0.9 && props.focus ? setFocus(true) : setFocus(false);
    }, 2000);
  }, [props.focus]);

  const Icon = props.icon ? Icons[props.icon] : null;

  return (
    <div
      style={{
        ...props.style,
        "--randTime": Math.random() * 2 + "s",
      }}
      onClick={props.onExpand}
      className={[
        classes.Info,
        props.expanded && classes.Expanded,
        focus && classes.Focus,
        props.showText && classes.ShowText,
      ].join(" ")}
    >
      <div style={{ margin: "auto" }}>
        {props.special === "green" && (
          <div className={classes.Green2}>
            <img src={green2} alt={green2}></img>
          </div>
        )}
        <h2>{props.title}</h2>
        {Icon && <Icon />}
        <ReactMarkdown>{props.text}</ReactMarkdown>
        {props.special === "certify" && props.showText && (
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
        {props.special === "green" && (
          <div className={classes.Green}>
            <img src={rec} alt={rec}></img>
          </div>
        )}
      </div>
    </div>
  );
};

export default Info;
