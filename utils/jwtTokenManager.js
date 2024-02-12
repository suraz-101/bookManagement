const JWT = require("jsonwebtoken");

const generateToken = (payload) => {
  return JWT.sign({ data: payload }, process.env.SECREATE_KEY, {
    expiresIn: process.env.DURATION,
  });
};

const verifyToken = (token) => {
  return JWT.verify(token, process.env.SECREATE_KEY);
};

const otpCode = () => {
  return Math.floor(100000 + Math.random() * 900000);
};

module.exports = { generateToken, verifyToken, otpCode };
