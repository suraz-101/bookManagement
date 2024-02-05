const route = require("express").Router();

route.get("/", (req, res, next) => {
  try {
    res.json({ message: "we are inside get method " });
  } catch (error) {
    next(error);
  }
});
route.post("/", (req, res, next) => {
  try {
    res.json({ message: "we are inside post method " });
  } catch (error) {
    next(error);
  }
});
route.put("/:id", (req, res) => {
  try {
    res.json({ message: "we are inside put method " });
  } catch (error) {
    next(error);
  }
});
route.patch("/:id", (req, res) => {
  try {
    res.json({ message: "we are inside patch method " });
  } catch (error) {
    next(error);
  }
});
route.delete("/:id", (req, res) => {
  try {
    res.json({ message: "we are inside delete method " });
  } catch (error) {
    next(error);
  }
});

module.exports = route;
