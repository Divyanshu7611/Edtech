const Tag = require("../models/tags");

exports.createTag = async (req, res) => {
  try {
    // fetch data from body
    const { name, description } = req.body;
    // validation
    if (!name || !description) {
      return res.status(400).json({
        success: false,
        message: "Please fill all data",
      });
    }
    // entry create
    const courseData = await Tag.create({
      name: name,
      description: description,
    });
    console.log(courseData);
    // return res
    return res.status(200).json({
      success: true,
      message: "Tag created Successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "There is error in Tag creation",
      error: error.message,
    });
  }
};

// get all tags

exports.showAllTags = async (req, res) => {
  try {
    // get all tags
    const allTags = await Tag.find({}, { name: true, description: true });
    return res.status(200).json({
      success: true,
      message: "All tags get Successfully",
      allTags,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: message.error,
    });
  }
};
