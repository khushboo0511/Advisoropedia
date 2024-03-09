const express = require("express");
const router = express.Router();

const { logIn, signUp } = require("../controllers/Auth");

// Route for user login
router.post("/login", logIn);

// Route for user signup
router.post("/signup", signUp);

module.exports = router;
