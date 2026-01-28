const multer = require("multer");

const MIME_TYPE = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/jpg": "jpg",
  "application/pdf": "pdf",
  "application/msword": "doc",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
    "docx",
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE[file.mimetype];
    if (!isValid) {
      return cb(new Error("MIME Type is missing"), false);
    }
    const role = req.body.role;
    if (role == "student" && file.mimetype.startsWith("image/")) {
      return cb(null, "backend/uploads/students");
    } else if (
      role == "teacher" &&
      (file.mimetype == "application/pdf" ||
        file.mimetype == "application/msword" ||
        file.mimetype ==
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document")
    ) {
      return cb(null, "backend/uploads/teachers");
    } else {
      return cb(new Error("Role ou MIME Type invalid"), false);
    }
  },
  filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(" ").join("-");
    const extension = MIME_TYPE[file.mimetype];
    const fileName = name + "-" + Date.now() + "." + extension;
    return cb(null, fileName);
  },
});

module.exports = multer({ storage: storage }).single('filr');