const expressAsyncHandler = require("express-async-handler");
const OrderModel = require("../models/orders");
const mongoose = require("mongoose");
const OrderItemModel = require("../models/order-item");

module.exports.getOrdersList = expressAsyncHandler(async (req, res) => {
  const userList = await OrderModel.find();

  if (!userList) return res.status(500).json({ success: false });

  res.send(userList);
});

module.exports.createOrder = expressAsyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAdress1,
    shippingAdress2,
    country,
    city,
    zip,
    phone,
    status,
    totalPrice,
    user,
  } = req.body;

  const orderItemsIds = Promise.all(
    orderItems.map(async (orderItem) => {
      let newOrderItem = new OrderItemModel({
        quantity: orderItem.quantity,
        product: orderItem.product,
      });
      newOrderItem = await newOrderItem.save();

      return newOrderItem._id;
    })
  );

  const orderItemsIdsResolved = await orderItemsIds;

  let order = new OrderModel({
    orderItems: orderItemsIdsResolved,
    shippingAdress1: shippingAdress1,
    shippingAdress2: shippingAdress2,
    phone: phone,
    country: country,
    city: city,
    zip: zip,
    status: status,
    totalPrice: totalPrice,
    user: user,
  });

  order = await order.save();

  if (!order) return res.status(500).send("your User cannot be create");

  res.send(order);
});
