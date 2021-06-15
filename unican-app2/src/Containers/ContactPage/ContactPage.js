import React from "react";
import classes from "./ContactPage.module.css";
import mail from "../../assets/mail.svg";
import Input from "../../Components/UI/Input/Input";
import Button from "../../Components/UI/Button/Button";

const ContactPage = () => {
  return (
    <div className={classes.Contact}>
      <div className={classes.Row}>
        <div className={classes.Column}>
          <img src={mail} alt="mail"></img>
        </div>
        <form className={classes.Column}>
          <h1>Contacto</h1>
          <Input placeholder="Tu correo"></Input>
          <Input type="textarea" placeholder="Tu mensaje"></Input>
          <Button>Enviar</Button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
