const express = require("express");
const router = express.Router();
const { auth } = require("../middlewares/auth");

const {
  sendOTP,
  signUp,
  login,
  changePassword,
} = require("../controllers/Auth");
const {
  resetPasswordToken,
  resetPassword,
} = require("../controllers/ResetPassword");

// login
router.post("/login", login);
// signup
router.post("/signup", signUp);
// otp
router.post("/sendotp", sendOTP);
// change password
router.post("/changePassword", auth, changePassword);

// authentication

// reset password tokeb
router.post("/reset-password-token", resetPasswordToken);
// change password
router.post("/reset-Password", resetPassword);

module.exports = router;
