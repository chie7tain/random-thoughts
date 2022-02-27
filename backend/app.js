const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(cors());
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET,POST,PATCH,DELETE,OPTIONS"
//   );
//   next();
// });
app.post("/api/posts", (req, res, next) => {});
app.use("/api/posts", (req, res) => {
  const posts = [
    {
      id: 1,
      title: "First server-side post",
      content: "This is coming from the server",
    },
    {
      id: 2,
      title: "Second server-side post",
      content: "This is coming from the server",
    },
  ];
  res.status(200).json({
    message: "Posts fetched successfully",
    posts,
  });
});
module.exports = app;
