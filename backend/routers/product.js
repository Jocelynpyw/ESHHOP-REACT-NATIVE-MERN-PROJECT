const express = require("express");
const ProductModel = require("../models/product");
const router = express.Router();
const productController = require("../controllers/product.controller");

router.get("/", productController.getProductList);
router.get("/:id", productController.getOneProduct);
router.get("/:id", productController.getOneProduct);
router.get("/get/count", productController.getProductCount);
router.get("/get/featured/:count", productController.getFeaturedProduct);
router.post("/", productController.createProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router;
