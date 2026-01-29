const mongoose = require("mongoose");

const specialitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
});

const Speciality = mongoose.model("Speciality", specialitySchema);
module.exports = Speciality;
