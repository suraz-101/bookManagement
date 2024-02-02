const express = require("express");
const app = express();

const router = require("./routes/route");
const PORT = 4000;
const apiVersion = "/api/v1";
app.use(`${apiVersion}`, router);

app.use((error) => {
  const err = err ? err.toString() : "something went wrong";
  res.status(500).json({ message: err });
});
app.listen(PORT, (req, res) => {
  console.log(`The server is running on http://localhost:${PORT}`);
});
