const expressAsyncHandler = require("express-async-handler");
const CategoryModel = require("../models/categories");
const mongoose = require("mongoose");

module.exports.getCategoryList = expressAsyncHandler(async (req, res) => {
  const categoryList = await CategoryModel.find();
  if (!categoryList) return res.status(500).json({ success: false });

  res.status(200).send(categoryList);
});

module.exports.getOneCategory = expressAsyncHandler(async (req, res) => {
  let id = req.params.id;
  const category = await CategoryModel.findById(id);
  if (!category) {
    return res.status(500).json({
      success: false,
      message: "the category with the given ID was read",
    });
  }

  res.status(200).send(category);
});

module.exports.createCategory = expressAsyncHandler(async (req, res) => {
  const { name, icon, color } = req.body;

  let category = new CategoryModel({
    name: name,
    icon: icon,
    color: color,
  });

  category = await category.save();
  if (!category) return res.status(404).send("the category cannot be create !");

  res.send(category);
});
module.exports.deleteCategory = expressAsyncHandler(async (req, res) => {
  let id = req.params.id;
  CategoryModel.findOneAndRemove(id)
    .then((category) => {
      if (category) {
        return res.status(200).json({
          success: true,
          message: "The category is deleted",
        });
      } else {
        return res.status(404).json({
          success: false,
          message: "category not found",
        });
      }
    })
    .catch((err) => {
      return res.status(400).json({
        success: false,
        error: err,
      });
    });
});

module.exports.updateCategory = expressAsyncHandler(async (req, res) => {
  let id = req.params.id;
  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).send("Invalid category Id");
  }
  const { name, icon, color } = req.body;
  const category = await CategoryModel.findByIdAndUpdate(
    id,
    {
      name: name,
      icon: icon,
      color: color,
    },
    { new: true }
  );
  if (!category)
    return res.status.apply(400).send("the category cannot be created !");

  res.send(category);
});
