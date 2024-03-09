const express = require("express");
const { auth } = require("../middlewares/auth");
const { getAllPosts, createPost } = require("../controllers/Posts");
const router = express.Router();

// // Route for get Posts
 router.get("/posts", auth, getAllPosts);

// // Route for create Post
 router.post("/createPost", auth, createPost);

module.exports = router;
