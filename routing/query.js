const express = require("express");
const querystring = require("querystring");

const app = express();

app.get("/", (req, res) => {
  console.log(querystring.parse());
  res.json({ data: req.query });
});

app.listen(3000);
