const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const isAdmin = require("../middlewares/isAdmin")

router.post("/register/", authController.register);
router.post("/login", authController.login);
// router.post("/register/dentist", verifyToken, isAdmin ,authController.registerOdontologo);

module.exports = router;