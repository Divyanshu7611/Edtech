const mongoose = require("mongoose");

const RegistrationSchema = new mongoose.Schema({
  Name: {
    type: String,
    trim: true,
    required: true,
  },
  Phone: {
    type: Number,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
  },
  CollegeName: {
    type: String,
    trim: true,
    required: true,
  },
  Branch: {
    type: String,
    trim: true,
    required: true,
  },
  Year: {
    type: String,
    trim: true,
    required: true,
  },
  Domain: {
    type: String,
    trim: true,
    required: true,
  },
});

const userReg = mongoose.model("User", RegistrationSchema);

export default userReg;
