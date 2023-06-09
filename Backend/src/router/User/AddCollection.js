const express = require("express");
const {
  userSuccessResponse,
  userErrorsResponse,
} = require("../../presenter/UserPresenter");
const User = require("../../models/UserModel");
const HTTP_STATUS = require("../../constant/httpStatus");
const jwtVerify = require("../../helpers/jwtVerify");
const Document = require("../../models/DocumentModel");

const router = express.Router();

router.patch("/api/users/:file_id/add", async (req, res) => {
  const { file_id } = req.params;
  const token = req.headers.authorization.split(" ")[1];

  const { user } = jwtVerify(token);

  try {
    const client = await User.findById(user.id);
    const document = await Document.findById(file_id);

    if (!document) {
      res
        .status(HTTP_STATUS.NOT_FOUND)
        .json(userErrorsResponse("Document not found"));
      return;
    }

    if (!client) {
      res

        .status(HTTP_STATUS.NOT_FOUND)
        .json(userErrorsResponse("User not found"));
      return;
    }

    if (client.userCollection.includes(file_id)) {
      res

        .status(HTTP_STATUS.BAD_REQUEST)
        .json(userErrorsResponse("Document already in collection"));
      return;
    }

    client.userCollection.push(document);

    await client.save();

    res.status(HTTP_STATUS.OK).json(userSuccessResponse("Update Success"));
  } catch (error) {
    res
      .status(HTTP_STATUS.INTERNAL_SERVER_ERROR)
      .json(userErrorsResponse(error.message));
  }
});

module.exports = router;
