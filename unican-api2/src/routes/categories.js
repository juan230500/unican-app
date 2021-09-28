const { categoryModel } = require("../schemas");
const router = require("express").Router();

router.get("/", async (req, res) => {
  const result = await categoryModel.find();
  res.json(result);
});

router.post("/", async (req, res) => {
  await categoryModel.deleteMany({});
  const result = await categoryModel.insertMany(
    req.body,
    (err) => err && console.log(err)
  );
  res.json(result);
});

module.exports = router;
