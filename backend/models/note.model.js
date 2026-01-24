const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  note: { type: Number, required: true },
  evaluation: { type: String, required: true },
});

const Note = mongoose.model("Note", noteSchema);
module.exports = Note;
