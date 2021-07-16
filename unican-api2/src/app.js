const express = require("express");
var mongoose = require("mongoose");
var cors = require("cors");
var auth = require("basic-auth");

const initialize = require("./initialize");
const products = require("./products");

const app = express();
const port = 4000;

mongoose.connect("mongodb://localhost:27017/unican", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());

app.use(cors());

app.post("/reset", (req, res) => {
  console.log("RESET");
  initialize();
  res.json({ status: "ok" });
});

const authorize = (req, res, next) => {
  if (req.method === "GET") {
    next();
    return;
  }
  console.log("[ADMIN]");
  var user = auth(req);
  console.log(user);
  if (user && user.name === "unican" && user.pass === "unican123") next();
  else {
    console.log(req.headers);
    res.status(401).json({ status: "unauthorized" });
  }
};

app.post("/admin/login", authorize, (req, res) => {
  res.json({ status: "ok" });
});

app.use("/products", authorize, products);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
