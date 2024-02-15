const express = require("express");
const router = express.Router();
const { auth } = require("../middlewares/auth");
const {
  deleteAccount,
  updateDetails,
  getEnrolledCourses,
  getAllUserDetails,
  updateImage,
} = require("../controllers/Profile");

// delete user
router.delete("/deleteAccount", auth, deleteAccount);
router.put("/updateDetails", auth, updateDetails);
router.get("/getEnrolledCourse", auth, getEnrolledCourses);
router.get("/getUserDetails", auth, getAllUserDetails);
router.put("/UpdateImage", auth, updateImage);

module.exports = router;
