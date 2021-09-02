import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { FaPencilAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import Button from "../../../Components/UI/Button/Button";
import { BASE_URL } from "../../../utils/constants";
import classes from "./ContactAdmin.module.css";

const ContactAdmin = (props) => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    get();
  }, []);

  const get = async () => {
    const res = await axios.get(BASE_URL + "contact");
    console.log(res.data);
    setEmail(res.data);
    res.status === 200
      ? toast.success("Actualización existosa")
      : toast.error("Actualización no realizada");
  };

  const save = async () => {
    const res = await axios.post(BASE_URL + "contact", email, {
      headers: { Authorization: props.auth },
    });
    console.log(res.data);
    res.status === 200
      ? toast.success("Guardado existoso")
      : toast.error("Guardado no realizado");
  };

  return (
    <div>
      <h1>Contacto</h1>
      <div className={classes.Btns}>
        <Button onClick={get}>Actualizar</Button>
        <Button onClick={save}>Guardar</Button>
      </div>

      <div className={classes.Container}>
        <div className={classes.Category}>
          <FaPencilAlt />
          <input
            onChange={(e) => setEmail({ email: e.target.value })}
            value={email.email}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default ContactAdmin;
