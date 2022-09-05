const express = require("express");
const router = express.Router();
const orderController = require("../controllers/order.controller");

router.get("/", orderController.getOrdersList);
router.get("/:id", orderController.getOneOrder);
router.put("/:id", orderController.updateStatusOrder);
router.delete("/:id", orderController.deleteOrder);
router.post("/", orderController.createOrder);

module.exports = router;
