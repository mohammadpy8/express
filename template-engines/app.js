const express = require("express");
const path = require("path");
const { GlobalErrorHandler, NotFoundError } = require("./utils/errorHandler");

const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "veiws"));

app.use(NotFoundError);
app.use(GlobalErrorHandler);

app.listen(3000);
