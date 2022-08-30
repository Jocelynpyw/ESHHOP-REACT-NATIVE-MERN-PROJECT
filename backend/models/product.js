const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  richDesciption: {
    type: String,
    default: "",
  },
  image: {
    type: String,
    default: "",
  },
  images: [
    {
      type: String,
    },
  ],
  brand: {
    type: String,
    default: "",
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  countInStock: {
    type: Number,
    required: true,
    min: 0,
    max: 255,
  },
  price: {
    type: Number,
    default: 0,
  },
  rating: {
    type: Number,
    default: 0,
  },
  isFeatured: {
    type: Boolean,
    default: false,
  },
  numReviews: {
    type: Number,
    default: 0,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

const ProductModel = mongoose.model("Product", productSchema);
module.exports = ProductModel;
