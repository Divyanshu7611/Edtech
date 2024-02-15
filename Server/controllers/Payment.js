const Course = require("../models/Course");
const User = require("../models/User");
const { instance } = require("../config/razorpay");
const mailSender = require("../utils/mailSender");
const { default: mongoose } = require("mongoose");
const {
  courseEnrollmentEmail,
} = require("../mail/templates/courseEnrollmentEmail");

exports.capture = async (req, res) => {
  const { Course_id } = req.body;
  const UserId = req.user.id;
  // validation
  if (!Course_id) {
    return res.json({
      success: false,
      message: "course id fetchig failure",
    });
  }
  let course;
  try {
    course = await Course.findById(Course_id);
    if (!course) {
      return res.status(401).json({
        success: false,
        message: "Course cannot find",
      });
    }
    // check user already exist or not
    const uid = new mongoose.Types.ObjectId(UserId);
    if (Course.studentsEnrolled.includes(uid)) {
      return res.status(400).json({
        success: false,
        message: "User is already Enrolled In COurse",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
  // create order corresponding to course
  const amount = Course.prependOnceListener;
  const currency = "INR";
  const options = {
    amount: amount * 100, // amount in the smallest currency unit
    currency: "INR",
    receipt: Math.random(date.now()).toString(),
    notes: {
      Course_id,
      UserId,
    },
  };

  try {
    const PaymentResponse = await instance.orders.create(options);

    // return response
    return res.status(200).json({
      success: true,
      message: "Payment Initiated Sueccessfully",
      thumbnail: Course.thumbnail,
      courseDescription: Course.courseDescription,

      courseName: Course.courseName,
      amount: PaymentResponse.amount,
      orderId: PaymentResponse.id,
      currency: PaymentResponse.currency,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Could not initiate Payment",
    });
  }
};

// verify signature

exports.verifySignature = async (req, res) => {
  const webhookSecret = "123456789";
  const signature = req.headers["x-razorpay-signature"];
  const shasum = crypto.createHmac("sha256", webhookSecret);
  shasum.update(JSON.stringify(req.body));
  const digest = shasum.digest("hex");
  if (signature === digest) {
    console.log("Payment Authorized");

    const { courseId, userId } = req.body.payload.payment.entity.notes;
    try {
      // find course and push student user id into it
      const enrolledCourses = await Course.findOneAndUpdate(
        { _id: courseId },
        { $push: { studentsEnrolled: userId } },
        { new: true }
      );
      if (!enrolledCourses) {
        return res.status(500).json({
          success: false,
          message: "Course Not Found",
        });
      }
      console.log(enrolledCourses);

      // find student and push course into his id
      const enrolledStudents = await User.findOneAndUpdate(
        { id: userId },
        { $push: { courses: courseId } },
        { new: true }
      );

      if (!enrolledStudents) {
        return res.status(500).json({
          success: false,
          message: "User is not found",
        });
      }
      console.log(enrolledStudents);

      const mailResponse = await mailSender(
        enrolledStudents.email,
        "congratulations from codehelp",

        "Congratulations, you are onboarded into new CodeHelp Course"
      );
      console.log(mailResponse);

      return res.status(200).json({
        success: true,
        message: "Hurrah! Signature verified successfully",
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Payment Is Not Authorized",
        error: error.message,
      });
    }
  } else {
    return res.status(400).json({
      success: false,
      message: "Invalid request",
    });
  }
};
