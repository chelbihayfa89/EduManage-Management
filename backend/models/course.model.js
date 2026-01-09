const mongoose = require("mongoose");

const courseSchema = mongoose.Schema({
    name: { type: String, required: true },
    description : { type: String, required: true },
    duration : { type: Number, required: true }
})

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;