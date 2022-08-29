const express = require("express");
const ProductModel = require("../models/product");
const router = express.Router();

router.get("/", async (req, res) => {
  //   console.log("Je suis dans le get");
  productList = await ProductModel.find();
  res.send(productList);
});
router.post("/", (req, res) => {
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
