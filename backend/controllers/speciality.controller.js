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
  Speciality.findById(specialityId)
    .then((speciality) => {
      if (!speciality) {
        return res.status(404).json({ message: "No speciality found" });
      }
      return res.status(200).json({ speciality });
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
    });
};

const updateSpecialitty = (req, res) => {
  const specialityId = req.params.id;
  const speciality = req.body;

  Speciality.updateOne({ _id: specialityId }, { $set: req.body }).then(
    (updateRes) => {
      if (updateRes.matchedCount === 0) {
        return res.status(404).json({ message: "No speciality found" });
      }
      if (updateRes.modifiedCount === 0) {
        return res
          .status(404)
          .json({ message: "Speciality found but nothing was updated" });
      }
      res.status(200).json({ message: "Speciality updated successfully" });
    },
  );
};

const deleteSpeciality = (req, res) => {
  const specialityId = req.params.id;

  Speciality.findByIdAndDelete(specialityId)
    .then((deletedSpeciality) => {
      if (!deletedSpeciality) {
        // Si le document n'existe pas, retourne 404
        return res.status(404).json({ message: "Speciality not found" });
      }
      // Si supprimé avec succès
      res.status(200).json({ message: "Speciality deleted successfully" });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Error deleting speciality",
        error: error.message,
      });
    });
};

module.exports = {
  addSpeciality,
  getSpecialities,
  getSpecialityById,
  updateSpecialitty,
  deleteSpeciality,
};
