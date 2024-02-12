require("dotenv").config();
const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const router = require("./route/route");
const apiVersion = "/api/v1";

app.use(express.json());

mongoose.connect(process.env.DB).then(() => {
  console.log("You are connected to Database");
});

app.use(morgan("dev"));

app.use(`${apiVersion}`, router);

app.use((error, req, res, next) => {
  const err = error ? error.toString() : "Something wend wrong";
  res.status(500).json({ message: err });
});

app.listen(process.env.PORT, () => {
  console.log(`The server is running at http://localhost:${process.env.PORT}`);
});
