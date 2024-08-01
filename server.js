import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import connected from "./config/db.js";

import "dotenv/config";
import User from "./models/user.js";
import Post from "./models/post.js";

const app = express();

app.use(express.json());
app.use(cors());

connected();

app.get("/", async (req, res) => {
  try {
    const post = await Post.find().populate("created_by_user_id");
    res.json(post);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/:id", async (req, res) => {
  try {
    const ID = req.params.id;
    const postId = await Post.findById(ID).populate("created_by_user_id");
    res.json(postId);
  } catch (err) {
    console.error(err.message);
  }
});

mongoose.connection.once("open", () => {
  console.log("connection to mongodb");
  app.listen(process.env.PORT || 3002);
});
