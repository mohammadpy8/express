const express = require("express");
const { GlobalErrorHandler, NotFoundError } = require("./utils/errorHandler");
const { BlogModel } = require("./model/blog.model");
require("./config/mongo.config");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res, next) => {
  res.send("index page");
});

app.post("/create", async (req, res, next) => {
  const { title, text } = req.body;
  const result = await BlogModel.create({
    title,
    text,
  });
  res.send(result);
});

app.use(NotFoundError);
app.use(GlobalErrorHandler);

app.listen(3000, () => {
  console.log("server run on port " + 3000);
});
