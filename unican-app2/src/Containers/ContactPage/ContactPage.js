import React, { useEffect, useState } from "react";
import classes from "./ContactPage.module.css";
import maps from "../../assets/maps.png";
import Input from "../../Components/UI/Input/Input";
import Button from "../../Components/UI/Button/Button";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [emailTo, setEmailTo] = useState("");

  const get = async () => {
    const res = await axios.get(BASE_URL + "contact");
    setEmailTo(res.data.email);
  };

  useEffect(() => {
    get();
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();
    if (email === "" || number === "" || message === "" || name === "") {
      toast.error(
        "No podemos enviar tu mensaje hasta que todos los campos estén llenos"
      );
      return;
    }
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(email).toLowerCase())) {
      toast.error("El email ingresado no es válido");
      return;
    }
    if (number.length < 8) {
      toast.error("El número de teléfono debe contener al menos 8 dígitos");
      return;
    }

    toast.info("Su mensaje se está enviando ...");
    console.log({ email, number, message, name, emailTo });
    const response = await emailjs.send(
      "service_xnpmyw9",
      "template_qv5bnci",
      { email, number, message, name, emailTo },
      "user_UtSFLEkq4Af17dvGTQisN"
    );
    if (response.status === 200)
      toast.success("¡Su mensaje se ha enviado correctamente!");
    else
      toast.error(
        "Hubo un error al enviar su mensaje, verifique su conexión a internet"
      );
  };

  return (
    <div className={classes.Contact}>
      <div className={classes.Row}>
        <div className={classes.Column}>
          <img
            onClick={() =>
              window.open(
                "https://www.google.com/maps/place/Industria+Unican/@9.9499067,-84.0793944,17z/data=!3m1!4b1!4m5!3m4!1s0x8fa0e499d42b72c1:0xd21ebc998928cc9e!8m2!3d9.9499014!4d-84.0772057"
              )
            }
            src={maps}
            alt="maps"
          ></img>
        </div>
        <form className={classes.Column}>
          <h1>Contacto</h1>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Tu nombre"
          ></Input>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Tu correo"
          ></Input>
          <Input
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="Tu teléfono"
          ></Input>
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            type="textarea"
            placeholder="Tu mensaje"
          ></Input>
          <Button onClick={sendEmail}>Enviar</Button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
