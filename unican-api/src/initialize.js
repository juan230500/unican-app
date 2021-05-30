const mongoose = require("mongoose");
const { productModel } = require("./schemas");
const PRODUCTS = require("../assets/products.json");

const initialize = async () => {
  await productModel.deleteMany({});
  for (let p of PRODUCTS) {
    const product = new productModel(p);
    product.save();
  }
};

module.exports = initialize;
