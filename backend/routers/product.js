const express = require("express");
const ProductModel = require("../models/product");
const router = express.Router();
const productController = require("../controllers/product.controller");

router.get("/", productController.getProductList);
router.get("/:id", productController.getOneProduct);
router.post("/", productController.createProduct);

module.exports = router;
