const express = require("express");
const morgan = require("morgan");
const path = require("path");
const rootRouter = require("./routes/rootRoutes");

const app = express("dev");

app.use(express.json());

if (process.env.NODE_ENV === "development") app.use(morgan());

app.use(express.static(path.resolve(__dirname, "public")));

app.use("/api/", rootRouter);

module.exports = app;
