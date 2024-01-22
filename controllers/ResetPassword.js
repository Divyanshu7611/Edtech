const User = require("../models/User");
const bcrypt = require("bcrypt");
const mailSender = require("../utils/mailSender");

exports.resetPasswordToken = async (req, res) => {
  const email = req.body.email;
  if (!email) {
    return res.status(403).json({
      success: false,
      message: "Email is not exist",
    });
  }
  const user = User.findOne({ email: email });
};
