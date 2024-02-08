const Joi = require("joi");

const Schema = Joi.object({
  bookName: Joi.string().required(),
});

const bookValidation = (req, res, next) => {
  const { error } = Schema.validate(req.body);
  error ? res.status(400).json({ message: error.details[0].message }) : next();
};

module.exports = { bookValidation };
