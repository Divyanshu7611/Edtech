const Section = require("../models/Section");
const Section = require("../models/Section");
const SubSection = require("../models/SubSection");
const { uploadImageToCloudinary } = require("../utils/imageUploader");

exports.createSubSection = async (req, res) => {
  try {
    const { sectionId, title, timeDuration, description } = req.body;
    const video = req.files.videoFile;

    //validation
    if (!sectionId || !title || !timeDuration || !description) {
      return res.status(404).json({
        success: false,
        message: "All fields are mandatory",
      });
    }
    // upload data
    const uploadVideo = await uploadImageToCloudinary(
      video,
      process.env.FOLDER_NAME
    );
    //  upload details to subsection
    const uploadDetails = await SubSection.create({
      title: title,
      timeDuration: timeDuration,
      description: description,
      video: uploadVideo.secure_url,
    });

    //  update detailds to section
    const updatedSection = await Section.findByIdAndUpdate(
      { _id: sectionId },
      { $push: { subSection: uploadDetails._id } },
      { new: true }
    ).populate("subSection");

    // return respomnse
    return res.status(200).json({
      success: true,
      message: "Subsection Created Successfully",
      data: updatedSection,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "inernal Server Error",
      error: error.message,
    });
  }
};
