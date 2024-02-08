const Router = require("express").Router();
const userRoute = require("../module/users/user.route");
const bookRoute = require("../module/book/book.route");

Router.use("/users", userRoute);
Router.use("/books", bookRoute);

module.exports = Router;
