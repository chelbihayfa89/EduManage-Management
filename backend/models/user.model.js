const mongoose = require("mongoose");
const { type } = require("os");

const userSchema = new mongoose.Schema({
  role: {
    type: String,
    enum: ["Admin", "Teacher", "Student", "Parent"],
    required: true,
  },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  password: { type: String, required: true },
  speciality: { type: String },
  photo: { type: String },
  teacherCv: { type: String },
  validated: { type: Boolean, default: false },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
