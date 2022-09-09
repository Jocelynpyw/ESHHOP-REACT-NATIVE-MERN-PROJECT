const expressAsyncHandler = require("express-async-handler");
const OrderModel = require("../models/orders");
const mongoose = require("mongoose");
const OrderItemModel = require("../models/order-item");

module.exports.getOrdersList = expressAsyncHandler(async (req, res) => {
  // .Populate fait une jointure entre les differentes tables , ici grace a l'id du User jee peux afficher ses informations dans mon Order
  const userList = await OrderModel.find()
    .populate("user", "name")
    .sort({ dateOrdered: -1 });
  // Juste la haut je ne veux populate que le nom du user
  if (!userList) return res.status(500).json({ success: false });

  res.send(userList);
});

module.exports.getOneOrder = expressAsyncHandler(async (req, res) => {
  const order = await OrderModel.findById(req.params.id)
    .populate("user", "name")
    .populate({
      path: "orderItems",
      populate: { path: "product", populate: "category" },
    });

  if (!order)
    return res
      .status(500)
      .json({ success: false, message: "the Order does not exist" });

  res.send(order);
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

  const totalPrices = await Promise.all(
    orderItemsIdsResolved.map(async (orderItemId) => {
      const orderItem = await OrderItemModel.findById(orderItemId).populate(
        "product",
        "price"
      );

      const totalPrice = orderItem.product.price * orderItem.quantity;
      return totalPrice;
    })
  );

  const totalFiinalPrice = totalPrices.reduce((a, b) => a + b);

  let order = new OrderModel({
    orderItems: orderItemsIdsResolved,
    shippingAdress1: shippingAdress1,
    shippingAdress2: shippingAdress2,
    phone: phone,
    country: country,
    city: city,
    zip: zip,
    status: status,
    totalPrice: totalFiinalPrice,
    user: user,
  });

  order = await order.save();

  if (!order) return res.status(500).send("your User cannot be create");

  res.send(order);
});

module.exports.getTotalSales = expressAsyncHandler(async (req, res) => {
  const totalSales = await OrderModel.aggregate([
    { $group: { _id: null, totalSales: { $sum: "$totalPrice" } } },
  ]);

  if (!totalSales) {
    return res.status(400).send("The Order sales cannot be generated");
  }

  res.send({ totalSales: totalSales.pop().totalSales });
});

module.exports.updateStatusOrder = expressAsyncHandler(async (req, res) => {
  let id = req.params.id;
  let status = req.body.status;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).send("Invalid Order Id");
  }

  const order = await OrderModel.findByIdAndUpdate(
    id,
    {
      status: status,
    },
    { new: true }
  );
  if (!order) return res.status(400).send("the Order cannot be created !");

  res.send(order);
});

module.exports.deleteOrder = expressAsyncHandler(async (req, res) => {
  let id = req.params.id;
  OrderModel.findByIdAndRemove(id)
    .then(async (order) => {
      if (order) {
        await order.orderItems.map(async (orderItem) => {
          await OrderItemModel.findByIdAndRemove(orderItem);
        });
        return res.status(200).json({
          success: true,
          message: "The order is deleted",
        });
      } else {
        return res.status(404).json({
          success: false,
          message: "order not found",
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

module.exports.getOrdersCount = expressAsyncHandler(async (req, res) => {
  const orderCount = await OrderModel.countDocuments();

  if (!orderCount) {
    res.status(500).json({ success: false });
  }
  res.send({
    orderCount: orderCount,
  });
});

module.exports.getOrderOfUser = expressAsyncHandler(async (req, res) => {
  // .Populate fait une jointure entre les differentes tables , ici grace a l'id du User jee peux afficher ses informations dans mon Order
  const userOrderList = await OrderModel.find({ user: req.params.userid })
    .populate({
      path: "orderItems",
      populate: { path: "product", populate: { path: "category" } },
    })
    .sort({ dateOrdered: -1 });
  // Juste la haut je ne veux populate que le nom du user
  if (!userOrderList) return res.status(500).json({ success: false });

  res.send(userOrderList);
});
