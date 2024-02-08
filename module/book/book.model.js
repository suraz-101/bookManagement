const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  bookName: { type: String, required: [true, "Name of the book us mandatory"] },
  author: { type: String },
  publishedDate: { type: Date },
  createAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const bookModel = new mongoose.model("books", bookSchema);

module.exports = bookModel;
