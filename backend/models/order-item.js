const mongoose = require("mongoose");

const OrderItemSchema = new mongoose.Schema({
  quantity: {
    type: Number,
    require: true,
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
});

const OrderItemModel = mongoose.model("OrderItem", OrderItemSchema);
module.exports = OrderItemModel;
