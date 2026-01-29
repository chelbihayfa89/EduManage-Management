const Speciality = require("../models/speciality.model");

const addSpeciality = (req, res) => {
  Speciality.findOne({ name: req.body.name })
    .then((speciality) => {
      if (speciality) {
        return res.status(409).json({ message: "Speciality already exists!" });
      }
      const newSpeciality = new Speciality({ name: req.body.name });
      return newSpeciality.save();
    })
    .then(() => {
      res.status(200).json({ message: "Speciality added successfully" });
    })
    .catch((error) => {
      res
        .status(500)
        .json({ message: "Error adding speciality", error: error.message });
    });
};

const getSpecialities = (req, res) => {
  Speciality.find()
    .then((specialities) => {
      if (!specialities) {
        return res.status(404).json({ message: "No speciality found" });
      }
      return res.status(200).json({ specialities });
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
    });
};

const getSpecialityById = (req, res) => {
  const specialityId = req.params.id;
  Speciality.findById(specialityId).then((speciality) => {
    if (!speciality) {
      return res.status(404).json({ message: "No speciality found" });
    }
    return res.status(200).json({ speciality });
  }).catch((error) => {
      res.status(500).json({ message: error.message });
    });
};

module.exports = { addSpeciality, getSpecialities, getSpecialityById };
