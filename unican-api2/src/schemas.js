const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: String,
  category: String,
  imgs: [
    {
      name: String,
      link: String,
    },
  ],
  info: [
    {
      name: String,
      description: String,
      options: [String],
    },
  ],
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
