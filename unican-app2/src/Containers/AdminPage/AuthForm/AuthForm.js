import axios from "axios";
import React, { useState } from "react";
import Button from "../../../Components/UI/Button/Button";
import Input from "../../../Components/UI/Input/Input";
import { BASE_URL } from "../../../utils/constants";
import classes from "./AuthForm.module.css";

import { toast } from "react-toastify";

const AuthForm = (props) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const verify = async (e) => {
    e.preventDefault();
    try {
      await axios.post(BASE_URL + "admin/login/", null, {
        headers: { Authorization: "Basic " + btoa(`${user}:${password}`) },
      });
      props.setAuth("Basic " + btoa(`${user}:${password}`));
      toast.info("¡Bienvenido al administrador de productos!");
    } catch (error) {
      console.log("aaa");
      toast.error("Nombre o contraseña inválido");
      return;
    }
  };

  return (
    <form className={classes.Container}>
      <h2>Introduzca sus credenciales de administrador</h2>
      <Input
        value={user}
        onChange={(e) => setUser(e.target.value)}
        placeholder="usuario"
      />
      <Input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="contraseña"
      />
      <Button onClick={(e) => verify(e)}>Confirmar</Button>
    </form>
  );
};

export default AuthForm;
