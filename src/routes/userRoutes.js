// const express = require("express");
// const { registerUser, loginUser, logoutUser } = require("../controllers/userController");

// const router = express.Router();

// router.post("/register", registerUser);
// router.post("/login", loginUser);
// router.post("/logout", logoutUser);



// module.exports = router;


const express = require("express");
const router = express.Router();
const { register, login, logout } = require("../controllers/userController");

router.post("/register",register);
router.post("/login",login);
router.post("/logout",logout);

module.exports = router;

