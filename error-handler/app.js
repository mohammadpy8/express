const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log(a);
  res.send("address");
});

app.use((req, res, next) => {
  return res.status(404).json({
    statusCode: res.statusCode,
    error: {
      type: "Not Found",
      message: "Route Not Found!",
    },
    data: null,
  });
});

app.use((error, req, res, next) => {
  return res.json({
    statusCode: error.status || 500,
    error: {
      message: error.message || "Internal Server Error",
    },
  });
});

app.listen(3000);
