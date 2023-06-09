const express = require("express");
const HTTP_STATUS = require("../../constant/httpStatus");
const Document = require("../../models/DocumentModel");
const {
  uploadErrorsResponse,
  getDocumentSuccessResponse,
} = require("../../presenter/DocumentPresenter");

const router = express.Router();

router.get("/api/document", async (req, res) => {
  try {
    const documents = await Document.find({});
    if (!documents) {
      res
        .status(HTTP_STATUS.NOT_FOUND)
        .json(userErrorsResponse("Document not found"));
      return;
    }

    res.status(HTTP_STATUS.OK).json(getDocumentSuccessResponse(documents));
  } catch (error) {
    res
      .status(HTTP_STATUS.INTERNAL_SERVER_ERROR)
      .json(uploadErrorsResponse(error.message));
  }
});

module.exports = router;
