const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  name: String,
  image: String,
  countInStock: Number,
});

const OrderModel = mongoose.model("Order", OrderSchema);
module.exports = OrderModel;
