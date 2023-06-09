const express = require("express");
const User = require("../../models/UserModel");
const {
  userErrorsResponse,
  userSuccessResponse,
} = require("../../presenter/UserPresenter");
const HTTP_STATUS = require("../../constant/httpStatus");

const router = express.Router();

router.delete("/api/users/:user_id", async (req, res) => {
  const { user_id } = req.params;

  if (!user_id) {
    res
      .status(HTTP_STATUS.BAD_REQUEST)
      .json(userErrorsResponse("User id is required"));
    return;
  }

  try {
    const client = await User.findByIdAndDelete(user_id);

    if (!client) {
      res
        .status(HTTP_STATUS.NOT_FOUND)
        .json(userErrorsResponse("User not found"));
      return;
    }

    res.status(HTTP_STATUS.OK).json(userSuccessResponse("Delete Success"));
  } catch (error) {
    res
      .status(HTTP_STATUS.INTERNAL_SERVER_ERROR)
      .json(userErrorsResponse(error.message));
  }
});

module.exports = router;
