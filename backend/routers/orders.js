const express = require("express");
const router = express.Router();
const orderController = require("../controllers/order.controller");

router.get("/", orderController.getOrdersList);
router.get("/get/totalsales", orderController.getTotalSales);
router.get("/get/count", orderController.getOrdersCount);
router.get("/:id", orderController.getOneOrder);
router.put("/:id", orderController.updateStatusOrder);
router.delete("/:id", orderController.deleteOrder);
router.post("/", orderController.createOrder);
router.get("/get/userorders/:userid", orderController.getOrderOfUser);
// Je suis a 04h 9min 26secondes Calcul du total price du order

module.exports = router;
