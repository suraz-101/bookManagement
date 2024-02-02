const express = require("express");
const app = express();

const router = require("./routes/route");
const PORT = 4000;
const apiVersion = "api/v1";
app.use(`/${apiVersion}`, router);

app.use((error) => {});
app.listen(PORT, (req, res) => {
  console.log(`The server is running on http://localhost:${PORT}`);
});
