const express = require("express");
const {
  userSuccessResponse,
  userErrorsResponse,
} = require("../../presenter/UserPresenter");
const User = require("../../models/UserModel");
const HTTP_STATUS = require("../../constant/httpStatus");
const jwtVerify = require("../../helpers/jwtVerify");

const router = express.Router();

router.delete("/api/users/:file_id/remove", async (req, res) => {
  const { file_id } = req.params;
  const token = req.headers.authorization.split(" ")[1];

  const { user } = jwtVerify(token);

  try {
    const client = await User.findById(user.id);

    if (!client) {
      res
        .status(HTTP_STATUS.NOT_FOUND)
        .json(userErrorsResponse("User not found"));
      return;
    }

    console.log(file_id);

    console.log(client.userCollection);

    client.userCollection = client.userCollection.filter(
      (document) => document._id.toString() !== file_id
    );

    await client.save();

    res.status(HTTP_STATUS.OK).json(userSuccessResponse("Update Success"));
  } catch (error) {
    res
      .status(HTTP_STATUS.INTERNAL_SERVER_ERROR)
      .json(userErrorsResponse(error.message));
  }
});

module.exports = router;
