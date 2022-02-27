const express = require("express");
const app = express();

app.use((req, res, next) => {
  res.send("hello wolrd");
});
module.exports = app;
