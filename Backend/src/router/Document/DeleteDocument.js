const express = require("express");
const HTTP_STATUS = require("../../constant/httpStatus");
const Document = require("../../models/DocumentModel");
const path = require("path");
const fs = require("fs");

const router = express.Router();

router.delete("/api/document/:file_id/delete", async (req, res) => {
  try {
    const { file_id } = req.params;

    // Check if the file exists in the database
    const document = await Document.findById(file_id);

    if (!document) {
      return res
        .status(HTTP_STATUS.NOT_FOUND)
        .json({ error: "Document not found" });
    }

    // Construct the absolute file path
    const filePath = path.join(__dirname, "../../uploads", document.file);

    // Delete the file from the server
    fs.unlinkSync(filePath);

    // Remove the document from the database
    await Document.findByIdAndDelete(file_id);

    res
      .status(HTTP_STATUS.OK)
      .json({ message: "Document deleted successfully" });
  } catch (error) {
    console.log(error);
    res
      .status(HTTP_STATUS.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal server error" });
  }
});

module.exports = router;
