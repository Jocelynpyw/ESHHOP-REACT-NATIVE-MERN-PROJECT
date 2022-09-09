const express = require("express");
const router = express.Router();
const productController = require("../controllers/product.controller");
const multer = require("multer");

const uploadOptions = multer({ storage: productController.storage });

router.post(
  "/",
  uploadOptions.single("image"),
  productController.createProduct
);
router.get("/", productController.getProductList);
router.get("/:id", productController.getOneProduct);
router.get("/:id", productController.getOneProduct);
router.get("/get/count", productController.getProductCount);
router.get("/get/featured/:count", productController.getFeaturedProduct);
router.delete("/:id", productController.deleteProduct);
router.put(
  "/gallery-images/:id",
  uploadOptions.array("images", 6),
  productController.uplaodProductGalleryImages
);

module.exports = router;
