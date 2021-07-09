import React, { useState } from "react";
import classes from "./ContactPage.module.css";
import mail from "../../assets/mail.svg";
import Input from "../../Components/UI/Input/Input";
import Button from "../../Components/UI/Button/Button";
import emailjs from 'emailjs-com';

const ContactPage = () => {
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    if (email === "" || number === "" || message === "") {
      alert("No podemos enviar tu mensaje hasta que todos los campos estén llenos");
      return;
    }
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(email).toLowerCase())) {
      alert("El email ingresado no es válido");
      return;
    }
    if (number.length < 8) {
      alert("El número de teléfono debe contener al menos 8 dígitos");
      return;
    }

    const response = await emailjs.send("service_xnpmyw9",
      "template_qv5bnci",
      { email, number, message },
      "user_UtSFLEkq4Af17dvGTQisN");
    if (response.status === 200)
      alert("¡Su mensaje se ha enviado correctamente!");
    else
      alert("Hubo un error al enviar su mensaje, verifique su conexión a internet");

  }

  return (
    <div className={classes.Contact}>
      <div className={classes.Row}>
        <div className={classes.Column}>
          <img src={mail} alt="mail"></img>
        </div>
        <form className={classes.Column}>
          <h1>Contacto</h1>
          <Input value={email} onChange={e => setEmail(e.target.value)} placeholder="Tu correo"></Input>
          <Input value={number} onChange={e => setNumber(e.target.value)} placeholder="Tu teléfono"></Input>
          <Input value={message} onChange={e => setMessage(e.target.value)} type="textarea" placeholder="Tu mensaje"></Input>
          <Button onClick={sendEmail}>Enviar</Button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
