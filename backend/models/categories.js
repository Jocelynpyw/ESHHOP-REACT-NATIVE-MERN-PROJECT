const mongoose = require("mongoose");

const categorieSchema = new mongoose.Schema({
  name: String,
  image: String,
  countInStock: Number,
});

const CategorieModel = mongoose.model("Categorie", categorieSchema);
module.exports = CategorieModel;
