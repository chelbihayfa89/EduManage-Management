/***************************************************
 * Imports & Dependencies
 ***************************************************/

// Importation des modules nécessaires
const bodyParser = require("body-parser");
const express = require("express");

const courseRoutes = require("./routes/course.routes");
const teacherRoutes = require("./routes/teacher.routes");
const userRoutes = require("./routes/user.routes");
const authRoutes = require("./routes/auth.routes");
// Création de l'application Express
const app = express();

// Middleware pour parser le corps des requêtes JSON
app.use(express.json());

// Middleware pour parser le corps des requêtes URL-encoded (ex: formulaires HTML)
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
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
 * 
 ***************************************************/
app.use("/api/course", courseRoutes);

app.use("/api/teacher", teacherRoutes);

app.use("/api/user", userRoutes);

app.use("/api/auth", authRoutes)


/***************************************************
 * Export de l'application pour utilisation ailleurs
 ***************************************************/
module.exports = app;
