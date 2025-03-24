const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use((req, res, next) => {
  console.log("log");
});

const checkAuth = (req, res, next) => {
  const { username, password } = req.query;
  if (username === "mohammad" && password === "1234") {
    return next();
  }
  res.send("error auth!");
};

app.use(
  (req, res, next) => {
    console.log("log2");
  },
  (req, res, next) => {
    console.log("log3");
  }
);

app.get("/", (req, res, next) => {
  res.json({});
});

app.get("/user", checkAuth, (req, res, next) => {
  console.log("users");
});

app.listen(3000);
