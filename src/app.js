const express = require("express");
const mainRouter = require("./router/main");
const app = express();

app.use(express.json());
app.use(mainRouter);

module.exports = app;
