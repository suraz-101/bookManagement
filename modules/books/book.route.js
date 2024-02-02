const route = require("express").Router();

route.get("/", (req, res) => {
  res.json({ message: "we are inside get method " });
});
route.post("/", (req, res) => {
  res.json({ message: "we are inside post method " });
});
route.put("/:id", (req, res) => {
  res.json({ message: "we are inside put method " });
});
route.patch("/:id", (req, res) => {
  res.json({ message: "we are inside patch method " });
});
route.delete("/:id", (req, res) => {
  res.json({ message: "we are inside delete method " });
});

module.exports = route;
