const mongoose = require("mongoose");

const SchoolclassSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  level: { type: String, required: true },
  teachers: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  students: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});
const Schoolclass = mongoose.model("Schoolclass", SchoolclassSchema);
module.exports = Schoolclass;
