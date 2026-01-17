const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth");
const authorize = require("../middleware/authorize");

const { getDashboard } = require("../controllers/dashboard.controller");



router.get("/admin", authMiddleware, authorize("admin"), getDashboard);
router.get("/teacher", authMiddleware, authorize("teacher"), getDashboard);

module.exports = router;