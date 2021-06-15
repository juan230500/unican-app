const { productModel } = require("./schemas");
const router = require("express").Router();

router.get("/", async (req, res) => {
  const result = await productModel.find();
  res.json(result);
});

router.post("/", async (req, res) => {
  const product = new productModel(req.body);
  await product.save((err) => err && console.log(err));
  res.json(product);
});

router.delete("/:id", async (req, res) => {
  const result = await productModel.deleteOne({ _id: req.params.id });
  res.json(result);
});

router.put("/:id", async (req, res) => {
  const result = await productModel.updateOne({ _id: req.params.id }, req.body);
  res.json(result);
});

module.exports = router;
