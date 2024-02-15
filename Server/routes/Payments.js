const express = require("express");
const router = express.Router();
const { capture, verifySignature } = require("../controllers/Payment");

const {
  auth,
  isInstructor,
  isStudent,
  isAdmin,
} = require("../middlewares/auth");
router.post("/capturePayment", auth, isStudent, capture);
router.post("/verifySignature", verifySignature);

module.exports = router;
