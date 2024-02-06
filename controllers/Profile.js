const User = require("../models/User");
const Profile = require("../models/Profile");
const { uploadImageToCloudinary } = require("../utils/imageUploader");
const { json } = require("express");

exports.updateDetails = async (req, res) => {
  try {
    const { about = "", dateOfBirth = "", contactNumber } = req.body;
    const id = req.user.id;

    const userDetails = await User.findById(id);
    const profile = await Profile.findById(userDetails.additionalDetails);

    profile.about = about;
    profile.dateOfBirth = dateOfBirth;
    profile.contactNumber = contactNumber;

    await profile.save();
    return res.status(200).json({
      success: true,
      message: "User Profile Updated Successfully",
    });
  } catch (error) {
    console.log(error);
    return (
      res.status(500),
      json({
        success: true,
        message: "Internal Server Error",
      })
    );
  }
};

exports.deleteAccount = async (req, res) => {
  try {
    const userId = await User.findById({ _id: id });
    if (!userId) {
      return res.status(404).json({
        success: false,
        message: "Internal Server Error",
      });
    }
    await Profile.findByIdAndDelete({ _id: userDetails.additionalDetails });
    await User.findByIdAndDelete(id);
    return res.status(200).json({
      success: true,
      message: "Profile Deleted Successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
exports.getEnrolledCourses = async (req, res) => {
  try {
    const userId = req.user.id;
    const userDetails = await User.findOne({
      _id: userId,
    })
      .populate("courses")
      .exec();
    if (!userDetails) {
      return res.status(400).json({
        success: false,
        message: `Could not find user with id: ${userDetails}`,
      });
    }
    return res.status(200).json({
      success: true,
      data: userDetails.courses,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getAllUserDetails = async (req, res) => {
  try {
    const id = req.user.id;
    const userDetails = await User.findById(id)
      .populate("additionalDetails")
      .exec();
    console.log(userDetails);
    res.status(200).json({
      success: true,
      message: "User Data fetched successfully",
      data: userDetails,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.updateImage = async (req, res) => {
  try {
    const userId = await User.findById({ _id: id });

    const displayPicture = req.files.displayPicture;
    const image = uploadImageToCloudinary(
      displayPicture,
      process.env.FOLDER_NAME,
      1000,
      1000
    );
    const updateImage = await User.findByIdAndUpdate(
      { _id: userId },
      {
        image: image.secure_url,
      },
      { new: true }
    );
    res.send({
      success: true,
      message: `Profile Picture Changed`,
      data: updateImage,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Image is not Updated",
    });
  }
};
