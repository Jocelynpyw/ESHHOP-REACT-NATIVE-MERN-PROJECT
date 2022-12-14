const expressAsyncHandler = require("express-async-handler");
const CategoryModel = require("../models/categories");
const ProductModel = require("../models/product");
const mongoose = require("mongoose");
const multer = require("multer");
// Je suis a 4h 41 min

// Multer conntrol
const FILE_TYPE_MAP = {
  "image/png": "png",
  "image/jpg": "jpg",
  "image/jpeg": "jpeg",
};
module.exports.storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const isValid = FILE_TYPE_MAP[file.mimetype];
    let uploadError = new Error("invalid image type");
    if (isValid) {
      uploadError = null;
    }
    cb(uploadError, "public/uploads");
  },
  filename: function (req, file, cb) {
    const fileName = file.originalname.split(" ").join("-");
    const extension = FILE_TYPE_MAP[file.mimetype];
    cb(null, `${fileName}-${Date.now()}.${extension}`);
  },
});

module.exports.createProduct = expressAsyncHandler(async (req, res) => {
  const {
    name,
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
  const file = req.file;
  if (!file) return res.status(400).send("No image in the request");

  const fileName = req.file.filename.split(" ").join("-");
  const basePath = `${req.protocol}://${req.get("host")}/public/uploads/`;

  product = new ProductModel({
    name: name,
    image: `${basePath}${fileName}`,
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
  // localhost:3000/api/v1/products?categories=2345643,234234

  let filter = {};
  if (req.query.categories) {
    filter = { category: req.query.categories.split(",") };
  }
  productList = await ProductModel.find(filter).populate("category");
  if (!productList) return res.status(500).json({ success: false });

  res.send(productList);
});

module.exports.getOneProduct = expressAsyncHandler(async (req, res) => {
  const id = req.params.id;
  const product = await ProductModel.findById(id).populate("category");

  if (!product) {
    return res.status(500).json({
      succes: false,
      message: "The product not exist",
    });
  }

  res.status(200).send(product);
});

module.exports.updateProduct = expressAsyncHandler(async (req, res) => {
  let id = req.params.id;
  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).send("Invalid category Id");
  }
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

  const product = await ProductModel.findByIdAndUpdate(
    id,
    {
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
    },
    { new: true }
  );
  if (!product)
    return res.status.apply(400).send("the product cannot be created !");

  res.send(product);
});

module.exports.deleteProduct = expressAsyncHandler(async (req, res) => {
  let id = req.params.id;
  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).send("Product  not exist");
  }
  ProductModel.findOneAndRemove(id)
    .then((product) => {
      if (product) {
        return res.status(200).json({
          success: true,
          message: "The Product is deleted",
        });
      } else {
        return res.status(404).json({
          success: false,
          message: "Product not found",
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

module.exports.getProductCount = expressAsyncHandler(async (req, res) => {
  const productCount = await ProductModel.countDocuments();

  if (!productCount) {
    res.status(500).json({ success: false });
  }
  res.send({
    productCount: productCount,
  });
});

module.exports.getFeaturedProduct = expressAsyncHandler(async (req, res) => {
  const count = req.params.count ? req.params.count : 0;
  const product = await ProductModel.find({ isFeatured: false }).limit(+count);

  if (!product) {
    res.status(500).json({ success: false });
  }
  res.send(product);
});

module.exports.uplaodProductGalleryImages = expressAsyncHandler(
  async (req, res) => {
    let id = req.params.id;
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).send("Invalid category Id");
    }

    const categoryId = await CategoryModel.findById(req.body.category);
    if (!categoryId) return res.status(400).send("Invalid Category");

    const basePath = `${req.protocol}://${req.get("host")}/public/uploads/`;
    let imagesPaths = [];
    const files = req.files;
    // const fileName = req.file.filename.split(" ").join("-");

    if (files) {
      files.map((file) => {
        imagesPaths.push(`${basePath}${file.filename}`);
      });
    }

    const product = await ProductModel.findByIdAndUpdate(
      id,
      {
        images: imagesPaths,
      },
      { new: true }
    );
    if (!product)
      return res.status.apply(400).send("the product cannot be created !");

    res.send(product);
  }
);
