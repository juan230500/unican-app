import axios from 'axios';
import React, { useState } from 'react'
import Button from '../../../Components/UI/Button/Button';
import Input from '../../../Components/UI/Input/Input';
import { BASE_URL } from '../../../utils/constants';
import classes from "./AuthForm.module.css";

const AuthForm = (props) => {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const verify = async (e) => {
        e.preventDefault();
        const result = await axios.post(BASE_URL + "admin/login/", null, {
            headers: { Authorization: "Basic " + btoa(`${user}:${password}`) },
        });
        if (result.data.status !== "ok") {
            alert("Nombre o contraseña inválido");
            return;
        }
        props.setVerified(true);
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
    )
}

export default AuthForm
