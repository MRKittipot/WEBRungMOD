const express = require("express");
const HTTP_STATUS = require("../../constant/httpStatus");
const Document = require("../../models/DocumentModel");
const path = require("path");

const router = express.Router();

router.get("/api/document/download/:document_id", async (req, res) => {
  try {
    const { document_id } = req.params;

    const document = await Document.findById(document_id);

    if (!document) {
      return res
        .status(HTTP_STATUS.NOT_FOUND)
        .json({ error: "Document not found" });
    }

    const filePath = path.resolve(__dirname, "../../uploads", document.file);

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename=${document.file}`
    );

    res.sendFile(filePath);
  } catch (error) {
    console.log(error);
    res
      .status(HTTP_STATUS.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal server error" });
  }
});

module.exports = router;
