import "react-confirm-alert/src/react-confirm-alert.css";
import { confirmAlert } from "react-confirm-alert";

export const customConfirm = (message, callBack) => {
  confirmAlert({
    title: "Por favor confirmar",
    message,
    buttons: [
      {
        label: "Sí",
        onClick: callBack,
      },
      {
        label: "No",
        onClick: () => false,
      },
    ],
  });
};

export const BASE_URL = "http://localhost:4000/";
//"http://54.196.37.43/api/"
//"https://unicancr.com/api/"
//"http://localhost:4000/"

export const CATEGORIES = ["Cubetas", "Bidón", "Canastas", "Cajas"];

export const COLORS_TAGS = {
  rojo: "red",
  azul: "blue",
  blanco: "white",
  natural: "#ECEAE4",
  amarillo: "yellow",
  verde: "green",
  café: "brown",
};
