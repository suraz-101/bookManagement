const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Name is mandatory"] },
  email: { type: String, required: [true, "email is mandatory"], unique: true },
  phoneNumber: { type: Number, required: [true, "Phone number is mandatory"] },
  password: {
    type: String,
    required: [true, "Password is mandatory"],
    select: false,
  },
  roles: {
    type: [String],
    required: [true, "password is mandatory"],
    enum: ["user", "admin"],
    default: "user",
  },
  otp: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const userModel = new mongoose.model("users", userSchema);

module.exports = userModel;
