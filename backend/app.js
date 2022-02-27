const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

const Post = require("./models/post");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.post("/api/posts", (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
  });
  console.log(post);
  res.status(201).json({
    message: "Post added successfully",
  });
});
app.get("/api/posts", (req, res) => {
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
