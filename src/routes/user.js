const express = require("express");
const { loginUser, createUser } = require("../controllers/user.controllers");
const { validateUserSignup, validateUserLogin } = require("../validators/user");


const router = express.Router();
router.post("/login", validateUserLogin, loginUser);
router.post("/signup", validateUserSignup, createUser);




module.exports = router