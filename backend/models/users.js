const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({});

const UserModel = mongoose.model("User", UserSchema);
module.exports = UserModel;
