const expressAsyncHandler = require("express-async-handler");
const CategoryModel = require("../models/categories");
const ProductModel = require("../models/product");

module.exports.createProduct = expressAsyncHandler(async (req, res) => {
  const {
    name,
    image,
    countInStock,
    description,
    richDescription,
    brand,
    price,
    category,
    rating,
    numReviews,
    isFeature,
  } = req.body;

  const categoryId = await CategoryModel.findById(category);
  if (!categoryId) return res.status(400).send("Invalid Category");

  product = new ProductModel({
    name: name,
    image: image,
    countInStock: countInStock,
    description: description,
    richDescription: richDescription,
    brand: brand,
    price: price,
    category: categoryId,
    rating: rating,
    numReviews: numReviews,
    isFeature: isFeature,
  });
  product = await product.save();
  if (!product) return res.status(500).send("The product cannot be created ");

  res.send(product);
});

module.exports.getProductList = expressAsyncHandler(async (req, res) => {
  productList = await ProductModel.find();
  if (!productList) return res.status(500).json({ success: false });

  res.send(productList);
});

module.exports.getOneProduct = expressAsyncHandler(async (req, res) => {
  const id = req.params.id;
  const product = await ProductModel.findById(id);

  if (!product) {
    return res.status(500).json({
      succes: false,
      message: "The product not exist",
    });
  }

  res.status(200).send(product);
});
