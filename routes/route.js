const express = require("express");
const router = express.Router();
const bookRoute = require("../modules/books/book.route");
const roleRoute = require("../modules/roles/role.route.js");
const userRoute = require("../modules/users/user.route.js");
router.use(`/books`, bookRoute);
router.use("/roles", roleRoute);
router.use("/users", userRoute);
module.exports = router;
