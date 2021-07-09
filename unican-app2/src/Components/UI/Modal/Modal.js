import React from "react";
import classes from "./Modal.module.css";

const Modal = (props) => {
    return (
        <div
            onClick={props.onClose}
            className={classes.Modal}
            style={{ top: props.show ? "0" : "100%" }}
        >
            {props.children}
        </div>
    );
};

export default Modal;
