const Router = require("express").Router();
const bookController = require("./book.controller");
const { bookValidation } = require("./book.validate");

Router.get("/", async (req, res, next) => {
  try {
    const result = await bookController.getAllBooks();
    res.json({ message: result });
  } catch (error) {
    next(error);
  }
});

Router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await bookController.getBookById(id);
    res.json({ message: result });
  } catch (error) {
    next(error);
  }
});

Router.post("/", bookValidation, async (req, res, next) => {
  try {
    const result = await bookController.create(req.body);
    res.json({ message: result });
  } catch (error) {
    next(error);
  }
});

Router.put("/:id", bookValidation, async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await bookController.updateBookDetails(id, req.body);
    res.json({ message: result });
  } catch (error) {
    next(error);
  }
});

module.exports = Router;
