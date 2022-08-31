const expressAsyncHandler = require("express-async-handler");
const UserModel = require("../models/users");
const bcrypt = require("bcryptjs");

const mongoose = require("mongoose");

module.exports.createUser = expressAsyncHandler(async (req, res) => {
  const { name, email, password, phone, country, city, zip, street, isAdmin } =
    req.body;

  const exitUser = await UserModel.findOne({ email: email });
  if (exitUser) {
    console.log(exitUser);
    return res.status(500).json({
      succes: false,
      message: "This user already exist",
    });
  } else {
    user = new UserModel({
      name: name,
      email: email,
      password: bcrypt.hashSync(password, 10),
      phone: phone,
      country: country,
      city: city,
      zip: zip,
      street: street,
      isAdmin: isAdmin,
    });

    user = await user.save();

    if (!user) return res.status(500).send("your User cannot be create");

    res.send(user);
  }
});

module.exports.getusersList = expressAsyncHandler(async (req, res) => {
  const userList = await UserModel.find().select("-password");

  if (!userList) return res.status(500).json({ success: false });

  res.send(userList);
});

module.exports.getOneUser = expressAsyncHandler(async (req, res) => {
  const id = req.params.id;
  console.log(`l'id est ${id}`);

  const user = await UserModel.findById(id).select("-password");

  if (!user) {
    return res.status(500).json({
      succes: false,
      message: "The User not exist",
    });
  }

  res.status(200).send(user);
});

module.exports.loginUser = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email: email });

  if (!user) {
    return res.status(400).send("the User not found");
  }
  if (user && bcrypt.compareSync(password, user.password)) {
    res.status(200).send("User Authenticated");
  } else {
    res.status(400).send("Password is wrong");
  }
});
