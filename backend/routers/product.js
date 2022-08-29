const express = require("express");
const { ProductModel } = require("../models/product");
const router = express.Router();

router.get("/product", async (req, res) => {
  productList = await ProductModel.find();
  res.send(productList);
});
router.post("/product", (req, res) => {
  const { name, image, countInStock } = req.body;
  product = new ProductModel({
    name: name,
    image: image,
    countInStock: countInStock,
  });
  product
    .save()
    .then((createProduct) => {
      res.status(201).json(createProduct);
    })
    .catch((err) => ({
      error: err,
      success: false,
    }));
});

module.exports = router;
