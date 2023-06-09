const express = require("express");
const multer = require("multer");
const HTTP_STATUS = require("../../constant/httpStatus");
const Document = require("../../models/DocumentModel");
const {
  uploadSuccessResponse,
  uploadErrorsResponse,
} = require("../../presenter/DocumentPresenter");

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "src/uploads/");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const fileName = file.originalname.split(".").slice(0, -1).join(".");
    const fileExtension = file.originalname.split(".").pop();
    cb(null, fileName + "-" + uniqueSuffix + "." + fileExtension);
  },
});

const upload = multer({ storage: storage });

router.post("/api/document", upload.single("pdf"), async (req, res) => {
  const pdfFile = req.file;
  const { title, author, publish, year, faculty, major,image } = req.body;

  const document = new Document({
    title,
    author,
    publish,
    year,
    faculty,
    major,
    image,
    file: pdfFile.filename,
  });

  try {
    await document.save();
    res.status(HTTP_STATUS.OK).json(uploadSuccessResponse("Upload success"));
  } catch (error) {
    console.log(error);
    res
      .status(HTTP_STATUS.INTERNAL_SERVER_ERROR)
      .json(uploadErrorsResponse(error.message));
  }
});

module.exports = router;
