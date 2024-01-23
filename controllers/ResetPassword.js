const User = require("../models/User");
const bcrypt = require("bcrypt");
const mailSender = require("../utils/mailSender");

exports.resetPasswordToken = async (req, res) => {
  try {
    const email = req.body.email;
    if (!email) {
      return res.status(403).json({
        success: false,
        message: "Email is not exist",
      });
    }
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "user does not exist",
      });
    }
    const token = crypto.randomUUID();

    const updateDetails = await user.findOneAndUpdate(
      { email: email },
      {
        token: token,
        resetPasswordExpires: Date.now() + 5 * 60 * 1000,
      },
      { new: true }
    );
    const url = `http://localhost:3000/update-password/${token}`;
    await mailSender(email, "Password-ResetLink", `Password-ResetLink:${url}`);

    return res.status(200).json({
      success: true,
      message: "Mail Sent Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error.message,
      success: false,
    });
  }
};

// resseting password
exports.resetPassword = async (req, res) => {
  try {
    const { password, confirmPassword, token } = req.body;

    // password matching
    if (confirmPassword !== password) {
      return res.status(401).json({
        success: false,
        message: "Password does not match",
      });
    }
    // details
    const userDetails = await User.findOne({ token: token });
    if (!userDetails) {
      return res.status(403).json({
        success: false,
        message: "user is not exist",
      });
    }
    // check token time
    if (userDetails.resetPasswordExpires < date.now()) {
      return res.status(401).json({
        success: false,
        message: "password link expires",
      });
    }
    await User.findOneAndUpdate(
      { token: token },
      { password: hashedPassword },
      { new: true }
    );

    // password hasing
    const hashedPassword = await bcrypt.hash(password, 10);

    return res.status(200).json({
      success: true,
      message: "Password Changed Succefully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Something Went Wrong! Password change failure",
      error: message.error,
    });
  }
};
