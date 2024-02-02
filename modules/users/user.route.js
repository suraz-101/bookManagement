const route = require("express").Router();

route.get("/", (req, res) => {
  res.json({ message: "this is the get method of users" });
});

module.exports = route;
