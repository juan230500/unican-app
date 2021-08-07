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

export const COLORS = {
  black: "#111111",
  grey: "#cccccc",
  white: "#eeeeee",
  primmary: "#042B4A",
};

export const LAYOUT = {
  marginHorizontal: "64px",
};

export const BASE_URL =
  "http://54.210.95.90:4000/" || "http://192.168.100.111:4000/";

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
