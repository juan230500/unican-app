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

const homeSchema = new Schema({
  title: String,
  subtitle: String,
  imgs: [String],
  vids: [String],
});

const homeModel = mongoose.model("Home", homeSchema);

const aboutSchema = new Schema({
  text: String,
  level: Number,
  icon: String,
  special: String,
});

const aboutModel = mongoose.model("About", aboutSchema);

module.exports = {
  productModel,
  categoryModel,
  contactModel,
  homeModel,
  aboutModel,
};
