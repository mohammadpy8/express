const express = require("express");
const morgan = require("morgan");
const { default: camelcase } = require("camelcase-keys");
const camelCase = (...args) => import("camelcase-keys").then(({ default: camelCaseKeys }) => camelCaseKeys(args));

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

const checkCamelCaseMiddelware = async (req, res, next) => {
  req.body = await camelCase(req.body, { deep: true });
  req.query = await camelCase(req.query);
  req.params = await camelCase(req.params);
  next();
};

app.use(checkCamelCaseMiddelware);

app.get("/test-camelcase", checkCamelCaseMiddelware, (req, res, next) => {
  next();
});

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

app.get("/blogs", async (req, res) => {
  res.send({
    body: req.body,
    query: req.query,
    params: req.params,
  });
});

app.listen(3000);
