const express = require("express");
const router = express.Router();
const userController = require("../Controller/userController");

// register user
router.post("/register",userController.register);
// getUser
router.get("/getUser",userController.getUser);

module.exports = router;