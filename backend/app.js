/***************************************************
 * Imports & Dépendances
 ***************************************************/
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

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
app.use(
  cors({
    origin: "http://localhost:4200", // ton front Angular
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

app.options("*", (req, res) => {
  res.sendStatus(200);
});

app.use("/uploads", express.static(path.join(__dirname, "uploads")));
// Routes
const courseRoutes = require("./routes/course.routes");
const teacherRoutes = require("./routes/teacher.routes");
const userRoutes = require("./routes/user.routes");
const authRoutes = require("./routes/auth.routes");
const dashboardRoutes = require("./routes/dashboard.routes");
const studentsRoutes = require("./routes/students.routes");
const noteRoutes = require("./routes/note.routes");
const parentRoutes = require("./routes/parent.routes");
const specialityRoutes = require("./routes/speciality.routes");
const schooClassRoutes = require("./routes/school-class.routes");

/***************************************************
 * Connexion à MongoDB
 ***************************************************/
mongoose
  .connect("mongodb://127.0.0.1:27017/school_management", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true,
  })
  .then(() => console.log("✅ MongoDB connecté !"))
  .catch((err) => console.error("❌ Erreur de connexion :", err.message));

/***************************************************
 * Routes API
 ***************************************************/
app.use("/api/courses", courseRoutes);
app.use("/api/teachers", teacherRoutes);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/students", studentsRoutes);
app.use("/api/notes", noteRoutes);
app.use("/api/parent", parentRoutes);
app.use("/api/specialities", specialityRoutes);
app.use("/api/school-classes", schooClassRoutes);


/***************************************************
 * Export de l'application
 ***************************************************/
module.exports = app;
