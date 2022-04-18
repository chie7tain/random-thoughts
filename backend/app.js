const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const app = express();

const Post = require("./models/post");

const MongoDBString = process.env.MONGO_URI;
mongoose
  .connect(MongoDBString)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((error) => {
    console.log("Connection failed", error);
  });

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.post("/api/posts", async (req, res, next) => {
  try {
    const post = new Post({
      title: req.body.title,
      content: req.body.content,
    });
    let createdPost = await post.save();
    console.log(createdPost);

    res.status(201).json({
      message: "Post added successfully",
      postId: createdPost._id,
    });
  } catch (err) {
    console.log(err);
  }
});
app.get("/api/posts", async (req, res) => {
  try {
    const posts = await Post.find();
    console.log(posts);
    res.status(200).json({
      message: "Posts fetched successfully",
      posts,
    });
  } catch (error) {
    console.log(error);
  }
});

app.delete("/api/posts/:id", async (req, res) => {
  try {
    console.log(req.params.id);
    const result = await Post.deleteOne({ _id: req.params.id });
    console.log(result);
    res.status(200).json({
      message: "Post deleted successfully",
    });
  } catch (error) {
    console.log(error);
  }
});
module.exports = app;
