const express = require("express");
const app = express();

const users = [
  { name: "ali", id: 1 },
  { name: "ali2", id: 2 },
  { name: "ali3", id: 3 },
  { name: "ali4", id: 4 },
  { name: "ali5", id: 5 },
];

app.get("/", (req, res) => {
  console.log("welocom to route");
  res.send("hello express");
});

app.get("/users", (req, res) => {
  res.json({
    users,
  });
});

app.get("/product/:id?", (req, res) => {
  const { id } = req.params;
  let product = null;
  if (id) {
    product = {
      title: "alitrzaaa",
      price: "100000",
      quantity: 500,
    };
    return res.json({ statusCode: res.statusCode, product });
  } else {
    res.statusCode = 404;
    return res.json({
      statusCode: res.statusCode,
      error: {
        message: "not found",
      },
    });
  }
});

app.get("/status", (req, res) => {
  res.status(200).json({
    message: "success",
  });
});

app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  const user = users.find((u) => u.id === parseInt(id));
  if (!user) {
    res.status(404).json({ statusCode: res.statusCode, error: { message: "user not found." } });
  } else {
    res.status(200).json({
      statusCode: res.statusCode,
      data: {
        users: [user],
      },
    });
  }
});

app.get("/stuff/:id/:username/:version", (req, res) => {
  const { id, username, version } = req.params;
  res.json({ id, username, version });
});

app.listen(3000, () => {
  console.log("server run on port 3000");
});
