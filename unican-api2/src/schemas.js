const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: String,
  category: String,
  img: String,
  extraImgs: [String],
  info: [],
});

const productModel = mongoose.model("Product", productSchema);

const userSchema = new Schema({
  name: String,
  password: String,
});

const userModel = mongoose.model("User", userSchema);

module.exports = {
  productModel,
  userModel,
};
