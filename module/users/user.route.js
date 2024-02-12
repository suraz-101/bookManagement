const userRoute = require("express").Router();
const userController = require("./user.controller");
const { userValidation } = require("./user.validate");
const { checkRole } = require("../../utils/authoriseUser");

userRoute.get(`/`, checkRole(["admin"]), async (req, res, next) => {
  try {
    const result = await userController.getAllUsers();
    res.json({ message: result });
  } catch (error) {
    next(error);
  }
});

userRoute.post(`/registerUser`, userValidation, async (req, res, next) => {
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

userRoute.post("/login", async (req, res, next) => {
  try {
    const result = await userController.loginUser(req.body);
    res.status(200).json({ message: result });
  } catch (error) {
    next(error);
  }
});

userRoute.post("/otpGeneration", async (req, res, next) => {
  try {
    const result = await userController.generateOTP(req.body);
    res.status(200).json({ message: result });
  } catch (error) {
    next(error);
  }
});

userRoute.post("/otpVerification", async (req, res, next) => {
  try {
    const result = await userController.otpVerification(req.body);
    res.status(200).json({ message: result });
  } catch (error) {
    next(error);
  }
});

module.exports = userRoute;
