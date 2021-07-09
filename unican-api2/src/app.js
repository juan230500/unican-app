const express = require("express");
var mongoose = require("mongoose");
var cors = require("cors");
var auth = require("basic-auth");

const initialize = require("./initialize");
const products = require("./products");

const app = express();
const port = 4000;

mongoose.connect(
  "mongodb+srv://juan230500:alvarado123@cluster0.wtk5m.mongodb.net/unican",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(express.json());

app.use(cors());

app.use("/products", products);

app.post("/reset", (req, res) => {
  console.log("RESET");
  initialize();
  res.json({ status: "ok" });
});

app.use("/admin", (req, res, next) => {
  console.log("[ADMIN]");
  var user = auth(req);
  console.log(user);
  if (user && user.name === "unican" && user.pass === "unican123") next();
  else {
    res.json({ status: "unauthorized" });
  }
});

app.post("/admin/login", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
