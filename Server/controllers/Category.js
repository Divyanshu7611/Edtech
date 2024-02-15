const Category = require("../models/Category");

exports.createCategory = async (req, res) => {
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
    const courseData = await Category.create({
      name: name,
      description: description,
    });
    console.log(courseData);
    // return res
    return res.status(200).json({
      success: true,
      message: "Course Category created Successfully",
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

exports.ShowallCategory = async (req, res) => {
  try {
    // get all tags
    const allCategory = await Category.find(
      {},
      { name: true, description: true }
    );
    return res.status(200).json({
      success: true,
      message: "All Categories get Successfully",
      allCategory,
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

//
exports.categoryPageDetails = async (req, res) => {
  try {
    const { categoryId } = req.body;

    const selectedCategory = await Category.findById(Category)
      .populate("courses")
      .exec();

    if (!selectedCategory) {
      return res.status(404).json({
        success: false,
        message: "Data Not Found",
      });
    }

    const differentCategory = await Category.findById({
      _id: { $ne: categoryId },
    })
      .populate("courses")
      .exec();

    //get top 10 selling courses hw

    return res.status(200).json({
      success: true,
      message: "Category Cretaed Successfully",
      data: { selectedCategory, differentCategory },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
