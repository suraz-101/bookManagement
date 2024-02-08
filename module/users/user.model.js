const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Name is mandatory"] },
  email: { type: String, required: [true, "email is mandatory"] },
  phoneNumber: { type: Number, required: [true, "Phone number is mandatory"] },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const userModel = new mongoose.model("users", userSchema);

module.exports = userModel;
