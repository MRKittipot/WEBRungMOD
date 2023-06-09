const mongoose = require("mongoose");
const DocumentModel = require("./DocumentModel");

const UserModel = mongoose.Schema({
  name: String,
  surname: String,
  email: String,
  password: String,
  sex: String,
  faculty: String,
  major: String,
  department: String,
  year: String,
  avatar: String,
  userCollection: [DocumentModel.schema],
});

const User = mongoose.model("Users", UserModel);

module.exports = User;
