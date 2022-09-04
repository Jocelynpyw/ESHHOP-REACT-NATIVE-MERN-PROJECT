const express = require("express");
const router = express.Router();
const usercontroller = require("../controllers/user.controller");

router.get("/", usercontroller.getusersList);
router.get("/get/count", usercontroller.getUserCount);
router.get("/:id", usercontroller.getOneUser);
router.delete("/:id", usercontroller.deleteUser);
router.post("/register", usercontroller.createUser);
router.post("/login", usercontroller.loginUser);

module.exports = router;
