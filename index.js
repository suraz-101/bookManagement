require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./routes/route");
const PORT = Number(process.env.PORT);
const apiVersion = "/api/v1";
const morgan = require("morgan");

app.use(morgan("dev"));
app.use(express.json());
app.use(`${apiVersion}`, router);

app.use((error, req, res, next) => {
  const err = error ? error.toString() : "something went wrong";
  res.status(500).json({ message: err });
});
app.listen(PORT, (req, res) => {
  console.log(`The server is running on http://localhost:${PORT}`);
});
