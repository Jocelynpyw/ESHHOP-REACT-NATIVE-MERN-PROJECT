const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  image: String,
  countInStock: Number,
});

const UserModel = mongoose.model("User", UserSchema);
module.exports = UserModel;
