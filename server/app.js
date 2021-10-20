const db = require("./db");
const driverHelpers = require("./helpers/driverHelpers")(db);
const orderHelpers = require("./helpers/orderHelpers")(db);
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const driversRouter = require("./routes/drivers");
const ordersRouter = require("./routes/orders");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/api/drivers", driversRouter(driverHelpers, orderHelpers));
app.use("/api/orders", ordersRouter(orderHelpers));

module.exports = app;
