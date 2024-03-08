const zod = require("zod");

const userSignup = zod.object({
  name: zod.string(),
  username: zod.string().max(20, { msg: "Must be 5 or fewer characters long" }),
  email: zod.string().email({ msg: "Invalid email address" }),
  password: zod.string(),
});
const userSignin = zod.object({
  username: zod.string().max(20, { msg: "Must be 5 or fewer characters long" }),
  password: zod.string(),
});

module.exports = { userSignup, userSignin };