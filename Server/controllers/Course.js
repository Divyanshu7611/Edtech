const Category = require("../models/Category");
const Course = require("../models/Course");
const User = require("../models/User");
const { uploadImageToCloudinary } = require("../utils/imageUploader");

exports.createCourse = async (req, res) => {
  try {
    const userId = req.user.id;
    console.log("Middleware executes ",userId)

    // detailsa fetch
    let {
      courseName,
      courseDescription,
      whatYouWillLearn,
      price,
      tag,
      category,
      status,
      instructions,
    } = req.body;
    const thumbnail = req.files.thumbnailImage;
    //validation
    if (
      !courseName ||
      !whatYouWillLearn ||
      !courseDescription ||
      !price ||
      !category ||
      !thumbnail ||
      !tag
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }
    if (!status || status === undefined) {
      status = "Draft";
    }

    const instructorDetails = await User.findById(userId, {
      accountType: "Instructor",
    });
    if (!instructorDetails) {
      return res.status(403).json({
        success: false,
        message: "Account is Not Instructor type",
      });
    }
    // check catgeory
    const CategoryDetails = await Category.findById(category);
    if (!CategoryDetails) {
      return res.status(404).json({
        success: false,
        message: "Category Not Found",
      });
    }

    const thumbnailImage = await uploadImageToCloudinary(
      thumbnail,
      process.env.FOLDER_NAME
    );
    console.log(thumbnailImage);

    const newCourse = await Course.create({
      courseName,
      courseDescription,
      whatYouWillLearn: whatYouWillLearn,
      price,
      tag: tag,
      category: CategoryDetails._id,
      instructor: instructorDetails._id,
      thumbnail: thumbnailImage.secure_url,
      status: status,
      instructions: instructions,
    });
    // add course to user array

    await User.findByIdAndUpdate(
      { _id: instructorDetails._id },
      { $push: { courses: newCourse } },
      { new: true }
    );
    // add course to catrgory
    await Category.findByIdAndUpdate(
      { _id: category },
      { $push: { courses: newCourse._id } },
      { new: true }
    );
    return res.status(200).json({
      success: true,
      message: "course cretaed succeefully",
      data:newCourse
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

exports.getAllInstructorCourses = async (req, res) => {
  try {
    const userId = req.user.id;
    const getCourses = await Course.find(
      {instructor:userId},
      {
        courseName: true,
        courseDescription: true,
        price: true,
        thumbnail: true,
        ratingAndReviews: true,
        instructor: true,
        studentsEnrolled: true,
      }
    )
      .populate("instructor")
      .exec();

    return res.status(200).json({
      success: true,
      message: "All Data Fetch Successfully",
      data: getCourses,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Errro in fetching Data",
      error: error.message,
    });
  }
};

exports.getAllCourses = async (req, res) => {
 
  try {
    const getCourses = await Course.find(
      {},
      {
        courseName: true,
        courseDescription: true,
        price: true,
        thumbnail: true,
        ratingAndReviews: true,
        instructor: true,
        studentsEnrolled: true,
      }
    )
      .populate("instructor")
      .exec();

    return res.status(200).json({
      success: true,
      message: "All Data Fetch Successfully",
      data: getCourses,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Errro in fetching Data",
      error: error.message,
    });
  }
};

exports.getCourseData = async (req, res) => {
  try {
    const { courseId } = req.body;
    const courseDetails = await Course.find({ _id: courseId })
      .populate({
        path: "instructor",
        populate: {
          path: "additionalDetails",
        },
      })
      .populate("category")
      //.populate("ratingAndreviews")
      .populate({
        path: "courseContent",
        populate: {
          path: "subSection",
        },
      })
      .exec();
    // validation
    if (!courseDetails) {
      return res.status(403).json({
        success: false,
        message: "Course Details Fetched failure",
      });
    }
    return res.status(200).json({
      success: true,
      message: "course details fetched succesfully",
      data: courseDetails,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal server Error",
    });
  }
};
             
exports.deleteCourse = async (req, res) => {
  try{
    const { courseId } = req.body;
    const userId = req.user.id;
    const courseDetails = await Course.findById(courseId);
    if(!courseDetails){
      return res.status(404).json({
        success: false,
        message: "Course Not Found",
      });
    }
    if(courseDetails.instructor.toString() !== userId){
      return res.status(403).json({
        success: false,
        message: "You are not authorized to delete this course",
      });
    }
    await Course.findByIdAndDelete(courseId);
    return res.status(200).json({
      success: true,
      message: "Course Deleted Successfully",
    });

  } catch(err){
    console.log(err)
    return res.status(500).json({
      success: false,
      message: "Internal server Error",
    });
  }
}