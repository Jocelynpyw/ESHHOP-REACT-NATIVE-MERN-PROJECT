const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: String,
  image: String,
  countInStock: Number,
});

exports.ProductModel = mongoose.model("Product", productSchema);
