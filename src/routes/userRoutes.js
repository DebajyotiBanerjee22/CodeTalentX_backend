
const express = require("express");
const router = express.Router();
const { register, login, logout } = require("../controllers/userController");

router.post("/register",register);
router.post("/login",login);
router.post("/logout",logout);

module.exports = router;


// API Test url

// http://localhost:5000/users/login
// http://localhost:5000/users/register
// http://localhost:5000/users/logout