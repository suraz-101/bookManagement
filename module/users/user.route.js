const userRoute = require("express").Router();
const userController = require("./user.controller");
const { userValidation } = require("./user.validate");
const toProperUpperCase = require("proper-upper-case");

userRoute.get(`/`, async (req, res, next) => {
  try {
    const result = await userController.getAllUsers();
    res.json({ message: result });
  } catch (error) {
    next(error);
  }
});

userRoute.post(`/`, userValidation, async (req, res, next) => {
  try {
    const result = await userController.create(req.body);
    res.json({ message: result });
  } catch (error) {
    next(error);
  }
});

userRoute.put(`/:id`, userValidation, async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await userController.updateUser(id, req.body);
    res.status(200).json({ data: result });
  } catch (error) {
    next(error);
  }
});

userRoute.patch(`/:id`, (req, res, next) => {
  try {
    res.json({ message: "we are inside patch method of the project" });
  } catch (error) {
    next(error);
  }
});

userRoute.delete(`/:id`, async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await userController.deleteUser(id);
    res.status(200).json({ message: result });
  } catch (error) {
    next(error);
  }
});

module.exports = userRoute;
