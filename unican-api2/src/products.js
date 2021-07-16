const { productModel } = require("./schemas");
const router = require("express").Router();
const fs = require("fs");

const AWS = require("aws-sdk");
const ID = "";
const SECRET = "";
const BUCKET_NAME = "";

var multer = require("multer");
var storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "uploads/");
  },
  filename(req, file, cb) {
    cb(null, file.originalname);
  },
});
var upload = multer({ storage: storage });

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

router.post("/img/:id", upload.single("newImage"), async (req, res) => {
  const product = await productModel.findOne({ _id: req.params.id });
  const s3 = new AWS.S3({
    accessKeyId: ID,
    secretAccessKey: SECRET,
  });
  const path = product._id + "/" + req.file.filename;
  const params = {
    ACL: "public-read",
    Bucket: BUCKET_NAME,
    Key: path,
    Body: fs.createReadStream(req.file.path),
  };
  s3.upload(params, async (err, data) => {
    if (err) {
      throw err;
    }
    product.imgs.push({ name: req.file.filename, link: data.Location });
    await product.save((err) => err && console.log(err));
    console.log(`File uploaded successfully. ${data.Location}`);
    res.json(product);
  });
});

router.delete("/img/:id", async (req, res) => {
  const product = await productModel.findOne({ _id: req.params.id });
  const s3 = new AWS.S3({
    accessKeyId: ID,
    secretAccessKey: SECRET,
  });
  const params = {
    Bucket: BUCKET_NAME,
    Key: product._id + "/" + req.query.imgName,
  };
  s3.deleteObject(params, async (err, data) => {
    if (err) throw err;
    product.imgs.splice(
      product.imgs.findIndex((el) => el.name === req.query.imgName),
      1
    );
    await product.save((err) => err && console.log(err));
    console.log(`File deleted successfully.`);
    res.json(product);
  });
});

module.exports = router;
