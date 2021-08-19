const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const auth = require("basic-auth");
const AWS = require("aws-sdk");

const initialize = require("./initialize");
const products = require("./products");

const app = express();
const port = process.env.PORT || 4000;

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.bodyParser({ limit: "50mb" }));

app.use(express.json());

app.use(cors());

app.post("/reset", (req, res) => {
  console.log("RESET");
  initialize();
  res.json({ status: "ok" });
});

app.get("/home_images", (req, res) => {
  const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_KEY,
    secretAccessKey: process.env.AWS_SECRET,
  });
  s3.listObjects({ Bucket: process.env.AWS_BUCKET }, (e, data) => {
    e && console.log(e);
    res.json(
      data.Contents.map(
        (el) => `https://${process.env.AWS_BUCKET}.s3.amazonaws.com/${el.Key}`
      )
    );
  });
});

const authorize = (req, res, next) => {
  if (req.method === "GET") {
    next();
    return;
  }
  console.log("[ADMIN]");
  var user = auth(req);
  console.log(user);
  if (
    user &&
    user.name === process.env.USER_NAME &&
    user.pass === process.env.USER_PASSWORD
  )
    next();
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
