const expressAsyncHandler = require("express-async-handler");
const UserModel = require("../models/users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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
  console.log(`Le usert list est ${userList}`);

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

module.exports.getUserCount = expressAsyncHandler(async (req, res) => {
  const userCount = await UserModel.countDocuments();
  console.log(`je suis la et le usercount`);
  if (!userCount) {
    res.status(500).json({ success: false });
  }
  res.send({
    userCount: userCount,
  });
});

module.exports.loginUser = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const secret = process.env.secret;
  const user = await UserModel.findOne({ email: email });

  if (!user) {
    return res.status(400).send("the User not found");
  }
  if (user && bcrypt.compareSync(password, user.password)) {
    const token = jwt.sign(
      {
        userId: user.id,
        isAdmin: user.isAdmin,
      },
      secret,
      { expiresIn: "1d" }
    );
    res.status(200).json({
      user: user.email,
      token: token,
    });
  } else {
    res.status(400).send("Password is wrong");
  }
});

module.exports.deleteUser = expressAsyncHandler(async (req, res) => {
  let id = req.params.id;
  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).send("user  not exist");
  }
  const user = await UserModel.findByIdAndDelete(id);

  if (!user)
    return res.status(404).json({ success: false, message: "User not found" });

  return res.status(200).json({ succes: true, message: "User deleted" });

  // UserModel.findOneAndRemove(id)
  //   .then((user) => {
  //     if (user) {
  //       return res.status(200).json({
  //         success: true,
  //         message: "The User is deleted",
  //       });
  //     } else {
  //       return res.status(404).json({
  //         success: false,
  //         message: "User not found",
  //       });
  //     }
  //   })
  //   .catch((err) => {
  //     return res.status(400).json({
  //       success: false,
  //       error: err,
  //     });
  //   });
});
