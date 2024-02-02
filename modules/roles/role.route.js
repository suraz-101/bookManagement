const route = require("express").Router();

route.get("/", (req, res, next) => {
  try {
    res.json({ message: "we are inside get method of role" });
  } catch (error) {
    next(error);
  }
});
route.post("/", (req, res) => {
  res.json({ message: "we are inside post method of role " });
});
route.put("/:id", (req, res) => {
  res.json({ message: "we are inside put method of role " });
});
route.patch("/:id", (req, res) => {
  res.json({ message: "we are inside patch method of role " });
});
route.delete("/:id", (req, res) => {
  res.json({ message: "we are inside delete method of role " });
});

module.exports = route;
