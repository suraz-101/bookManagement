const bookModel = require("./book.model");

const getAllBooks = () => {
  return bookModel.find();
};

const getBookById = (_id) => {
  return bookModel.findOne({ _id });
};

const create = (payload) => {
  return bookModel.create(payload);
};
const updateBookDetails = (_id, payload) => {
  return bookModel.updateOne({ _id }, payload);
};

module.exports = { getAllBooks, create, updateBookDetails, getBookById };
