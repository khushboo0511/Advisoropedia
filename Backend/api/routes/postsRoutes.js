const express = require("express");
const { createPost, getAllPosts } = require("../controllers/Posts");
const { auth } = require("../middlewares/auth");
const router = express.Router();

// Route for get Posts
router.get("/posts", auth, getAllPosts);

// Route for create Post
router.post("/createPost", auth, createPost);

module.exports = router;
