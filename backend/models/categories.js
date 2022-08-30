const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  icon: {
    type: String,
  },
  color: {
    type: String,
  },
});

const CategoryModel = mongoose.model("Category", categorySchema);
module.exports = CategoryModel;
