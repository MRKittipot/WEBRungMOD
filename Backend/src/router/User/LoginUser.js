const express = require("express");
const User = require("../../models/UserModel");

const {
  userErrorsResponse,
  userLoginSuccess,
} = require("../../presenter/UserPresenter");

const jwtCreate = require("../../helpers/jwtCreate");
const HTTP_STATUS = require("../../constant/httpStatus");

const router = express.Router();

router.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email) {
    res
      .status(HTTP_STATUS.BAD_REQUEST)
      .json(userErrorsResponse("Email is required"));
    return;
  }

  if (!password) {
    res
      .status(HTTP_STATUS.BAD_REQUEST)
      .json(userErrorsResponse("Password is required"));
    return;
  }

  try {
    const client = await User.findOne({ email });
    if (!client) {
      res
        .status(HTTP_STATUS.NOT_FOUND)
        .json(userErrorsResponse("User not found"));
      return;
    }

    const token = jwtCreate({
      id: client._id,
      email: client.email,
    });

    res.status(HTTP_STATUS.OK).json(userLoginSuccess(token));
  } catch (error) {
    console.log(error);
    res
      .status(HTTP_STATUS.INTERNAL_SERVER_ERROR)
      .json(userErrorsResponse(error.message));
  }
});

module.exports = router;
