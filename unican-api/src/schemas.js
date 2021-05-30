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

module.exports = {
  productModel,
};
