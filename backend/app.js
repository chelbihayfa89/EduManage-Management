/***************************************************
 * Imports & Dépendances
 ***************************************************/
const express = require("express");
const mongoose = require("mongoose");

// Routes
const courseRoutes = require("./routes/course.routes");
const teacherRoutes = require("./routes/teacher.routes");
const userRoutes = require("./routes/user.routes");
const authRoutes = require("./routes/auth.routes");

/***************************************************
 * Création de l'application Express
 ***************************************************/
const app = express();

/***************************************************
 * Middlewares
 ***************************************************/
// Pour lire le JSON et les formulaires
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS : permet au front d'accéder au serveur
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // Tout le monde peut accéder
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, Accept, Content-Type, X-Requested-with, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, OPTIONS, PATCH, PUT"
  );
  next();
});

/***************************************************
 * Connexion à MongoDB
 ***************************************************/
mongoose.connect("mongodb://127.0.0.1:27017/school_management", {
  useNewUrlParser: true,
  useUnifiedTopology: true,  autoIndex: true
})
.then(() => console.log("✅ MongoDB connecté !"))
.catch(err => console.error("❌ Erreur de connexion :", err.message));

/***************************************************
 * Routes API
 ***************************************************/
app.use("/api/courses", courseRoutes);
app.use("/api/teachers", teacherRoutes);
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

/***************************************************
 * Export de l'application
 ***************************************************/
module.exports = app;
