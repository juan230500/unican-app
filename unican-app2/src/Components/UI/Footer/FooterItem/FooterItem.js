import React from "react";
import classes from "./FooterItem.module.css";

const FooterItem = (props) => {
  return (
    <div className={classes.Container}>
      <p>
        <span>{props.children}</span> <span>{props.text}</span>
      </p>
    </div>
  );
};

export default FooterItem;
