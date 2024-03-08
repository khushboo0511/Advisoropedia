const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose.connect(process.env.URI);

const userSchema = mongoose.Schema({
  name: String,
  username: String,
  email: String,
  password: String,
});
const postSchema = mongoose.Schema({
  title: String,
  content: String,
});

const user = mongoose.model("users", userSchema);
const post = mongoose.model("posts", postSchema);

module.exports = { user, post };