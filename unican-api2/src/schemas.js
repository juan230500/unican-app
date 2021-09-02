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

const categorySchema = new Schema({ name: String });

const categoryModel = mongoose.model("Category", categorySchema);

const contactSchema = new Schema({ email: String });

const contactModel = mongoose.model("Contact", contactSchema);

module.exports = {
  productModel,
  categoryModel,
  contactModel,
};
