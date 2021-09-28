const { contactModel } = require("../schemas");
const router = require("express").Router();

router.get("/", async (req, res) => {
  const result = await contactModel.findOne();
  res.json(result);
});

router.post("/", async (req, res) => {
  await contactModel.deleteMany({});
  const contact = new contactModel(req.body);
  const result = await contact.save();
  res.json(result);
});

module.exports = router;
