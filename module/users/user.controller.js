const userModel = require("./user.model");

const create = (payload) => {
  return userModel.create(payload);
};

const getAllUsers = () => {
  return userModel.find();
};

const updateUser = () => {};

const deleteUser = () => {};

module.exports = { create, getAllUsers, updateUser, deleteUser };
