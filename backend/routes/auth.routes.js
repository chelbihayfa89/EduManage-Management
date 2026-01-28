const express = require("express");
const router = express.Router();

const { register, login } = require("../controllers/auth.controller");

const upload = require("../middleware/multer");

router.post("/register", upload, register);
router.post("/login", login);

module.exports = router;
