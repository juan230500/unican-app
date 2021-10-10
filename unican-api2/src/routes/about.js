const { aboutModel } = require("../schemas");
const router = require("express").Router();
const fs = require("fs");
const aboutJSon = require("../../assets/about.json");

router.get("/", async (req, res) => {
  const result = await aboutModel.find();
  res.json(result);
});

router.post("/", async (req, res) => {
  await aboutModel.deleteMany({});
  const result = await aboutModel.insertMany(
    req.body,
    (err) => err && console.log(err)
  );
  res.json(result);
});

module.exports = router;
