const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Create User model
const userSchema = new Schema({
  name: String,
  age: Number,
  dni: String,
});

const userModel = mongoose.model("users", userSchema);
module.exports = userModel;
