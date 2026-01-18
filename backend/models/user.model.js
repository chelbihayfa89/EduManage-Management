const mongoose = require("mongoose");
const { type } = require("os");

const userSchema = new mongoose.Schema({
  role: {
    type: String,
    enum: ["admin", "teacher", "student", "parent"],
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
  childPhone: { type: String },
  courses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
});

const User = mongoose.model("User", userSchema);
module.exports = User;
