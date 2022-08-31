const express = require("express");
const router = express.Router();
const usercontroller = require("../controllers/user.controller");

router.get("/", usercontroller.getusersList);
router.get("/:id", usercontroller.getOneUser);
router.post("/", usercontroller.createUser);
router.post("/login", usercontroller.loginUser);

module.exports = router;
