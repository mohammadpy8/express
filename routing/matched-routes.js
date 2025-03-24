const express = require("express");
const app = express();

app.get("/file.txt", (req, res) => {
  res.json({ url: req.url });
});

app.get("/ab?cd", (req, res) => {
  res.json({ url: req.url });
});

app.listen(3000);
