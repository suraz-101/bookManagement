const userModel = require("./user.model");

const create = (payload) => {
  return userModel.create(payload);
};

const getAllUsers = () => {
  return userModel.find();
};

const updateUser = (_id, payload) => {
  return userModel.updateOne({ _id }, payload);
};

const deleteUser = (_id) => {
  return userModel.deleteOne({ _id });
};

module.exports = { create, getAllUsers, updateUser, deleteUser };
