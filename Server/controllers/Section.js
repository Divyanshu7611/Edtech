const section = require("../models/Section");
const Course = require("../models/Course");

exports.createSection = async (req, res) => {
  try {
    // req body data
    const { sectionName, courseId } = req.body;
    // validation
    if (!sectionName || !courseId) {
      return res.status(400).json({
        success: false,
        message: "Please Enter correct details",
      });
    }
    // find and push'
    const createSection = await section.create({ sectionName });

    // update array of course
    const courseUpdation = await Course.findByIdAndUpdate(
      courseId,
      {
        $push: { courseContent: createSection._id },
      },
      { new: true }
    )
      .populate({
        path: "courseContent",
        populate: {
          path: "subSection",
        },
      })
      .exec();
    res.status(200).json({
      success: true,
      message: "Section Created Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// updatdion course
exports.updatedSection = async (req, res) => {
  try {
    const { sectionID, sectionName } = req.body;

    const sectionUpdation = await section.findByIdAndUpdate(
      sectionID,
      { sectionName },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Section updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server Error",
      error: error.message,
    });
  }
};

// course deletion

exports.deleteSection = async (req, res) => {
  try {
    const { sectionID } = req.params;
    await section.findByIdAndDelete(sectionID);
    res.status(200).json({
      success: true,
      message: "Section Deleted Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
