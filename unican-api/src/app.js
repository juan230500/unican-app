const express = require("express");
const { connect, productModel } = require("./schemas");
var mongoose = require("mongoose");
var cors = require("cors");

const initialize = require("./initialize");

const app = express();
const port = 3000;

mongoose.connect("mongodb://127.0.0.1/my_database", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());

app.use(cors());

app.get("/products", async (req, res) => {
  res.json(await productModel.find());
});

app.post("/reset", (req, res) => {
  console.log("RESET");
  initialize();
  res.json({ status: "ok" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
