const express = require("express");
const router = express.Router();
const {
  auth,
  isInstructor,
  isStudent,
  isAdmin,
} = require("../middlewares/auth");

const {
  createCourse,
  getAllCourses,
  getCourseData,
} = require("../controllers/Course");

const {
  createCategory,
  ShowallCategory,
  categoryPageDetails,
} = require("../controllers/Category");

const {
  createSection,
  updatedSection,
  deleteSection,
} = require("../controllers/Section");

const {
  createSubSection,
  updateSubSection,
  deleteSubSection,
} = require("../controllers/SubSection");

router.post("/createCourse", auth, isInstructor, createCourse);
router.post("/updatedSection", auth, isInstructor, updatedSection);

router.post("/createCategory", auth, isInstructor, createCategory);
router.post("/createSection", auth, isInstructor, createSection);
router.post("/createSubSection", auth, isInstructor, createSubSection);
router.post("/deleteSection", auth, isInstructor, deleteSection);
router.post("/delete-SubSection", auth, isInstructor, deleteSubSection);
router.get("/getAllCourses", getAllCourses);
router.post("/getCourseData", getCourseData);
router.get("/get-Categories", ShowallCategory);
router.post("/get-Category-Details", categoryPageDetails);

module.exports = router;
