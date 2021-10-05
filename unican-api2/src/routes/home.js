const { homeModel } = require("../schemas");
const router = require("express").Router();
const fs = require("fs");

const AWS = require("aws-sdk");
const ID = process.env.AWS_KEY;
const SECRET = process.env.AWS_SECRET;
const BUCKET_NAME = process.env.AWS_BUCKET;

var multer = require("multer");
var storage = multer.diskStorage({
  // destination(req, file, cb) {
  //   cb(null, "uploads/");
  // },
  filename(req, file, cb) {
    cb(null, file.originalname);
  },
});
var upload = multer({ storage: storage });

router.get("/", async (req, res) => {
  const result = await homeModel.findOne();
  res.json(result);
});

router.post("/", async (req, res) => {
  await homeModel.deleteOne({});
  const home = new homeModel(req.body);
  await home.save((err) => err && console.log(err));
  res.json(home);
});

router.post("/img/", upload.single("newImage"), async (req, res) => {
  const home = await homeModel.findOne({});
  const s3 = new AWS.S3({
    accessKeyId: ID,
    secretAccessKey: SECRET,
  });
  const path = "home/" + req.file.filename;
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
    home.imgs.push(data.Location);
    await home.save((err) => err && console.log(err));
    console.log(`File uploaded successfully. ${data.Location}`);
    res.json(home);
  });
});

router.delete("/img/:index", async (req, res) => {
  const home = await homeModel.findOne({});
  const s3 = new AWS.S3({
    accessKeyId: ID,
    secretAccessKey: SECRET,
  });
  const params = {
    Bucket: BUCKET_NAME,
    Key: "home/" + req.query.imgName,
  };
  s3.deleteObject(params, async (err, data) => {
    if (err) throw err;
    home.imgs.splice(req.params.index, 1);
    await home.save((err) => err && console.log(err));
    console.log(`File deleted successfully.`);
    res.json(home);
  });
});

router.post("/vid/", upload.single("newImage"), async (req, res) => {
  const home = await homeModel.findOne({});
  const s3 = new AWS.S3({
    accessKeyId: ID,
    secretAccessKey: SECRET,
  });
  const path = "home/" + req.file.filename;
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
    home.vids.push(data.Location);
    await home.save((err) => err && console.log(err));
    console.log(`File uploaded successfully. ${data.Location}`);
    res.json(home);
  });
});

router.delete("/vid/:index", async (req, res) => {
  const home = await homeModel.findOne({});
  const s3 = new AWS.S3({
    accessKeyId: ID,
    secretAccessKey: SECRET,
  });
  const params = {
    Bucket: BUCKET_NAME,
    Key: "home/" + req.query.imgName,
  };
  s3.deleteObject(params, async (err, data) => {
    if (err) throw err;
    home.vids.splice(req.params.index, 1);
    await home.save((err) => err && console.log(err));
    console.log(`File deleted successfully.`);
    res.json(home);
  });
});

module.exports = router;
