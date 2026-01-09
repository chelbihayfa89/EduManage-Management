const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/school_management", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("MongoDB connecté !");
  } catch (err) {
    console.error("Erreur MongoDB:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
