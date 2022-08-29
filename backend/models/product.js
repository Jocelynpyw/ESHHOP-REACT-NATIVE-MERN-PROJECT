const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  image: String,
  countInStock: Number,
});

const ProductModel = mongoose.model("Product", productSchema);
module.exports = ProductModel;
