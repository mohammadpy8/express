const express = require("express");
const path = require("path");
const { GlobalErrorHandler, NotFoundError } = require("./utils/errorHandler");

const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res, next) => {
  res.render("index");
});

app.use(NotFoundError);
app.use(GlobalErrorHandler);

app.listen(3000);
          