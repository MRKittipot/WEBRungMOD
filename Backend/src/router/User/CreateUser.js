const express = require("express");
const User = require("../../models/UserModel");
const {
  userSuccessResponse,
  userErrorsResponse,
} = require("../../presenter/UserPresenter");
const HTTP_STATUS = require("../../constant/httpStatus");

const router = express.Router();

router.post("/api/register", async (req, res) => {
  const {
    name,
    surname,
    email,
    password,
    confirmPassword,
    year,
    sex,
    faculty,
    major,
    department,
    avatar,
  } = req.body;

  if (password !== confirmPassword || !password || !confirmPassword) {
    res
      .status(HTTP_STATUS.BAD_REQUEST)
      .json(userErrorsResponse("Password not match"));
    return;
  }

  if (!email) {
    res
      .status(HTTP_STATUS.BAD_REQUEST)
      .json(userErrorsResponse("Email is required"));
    return;
  }

  if (!year) {
    res
      .status(HTTP_STATUS.BAD_REQUEST)
      .json(userErrorsResponse("Year is required"));
    return;
  }

  const user = new User({
    name,
    surname,
    email,
    password,
    year,
    sex,
    faculty,
    major,
    department,
    avatar,
  });

  try {
    const client = await User.find({ email });

    if (client.length > 0) {
      res
        .status(HTTP_STATUS.BAD_REQUEST)
        .json(userErrorsResponse("Email is already in use"));
      return;
    }

    await user.save();
    res
      .status(HTTP_STATUS.CREATED)
      .json(userSuccessResponse("User created successfully"));
  } catch (error) {
    res
      .status(HTTP_STATUS.INTERNAL_SERVER_ERROR)
      .send(userErrorsResponse(error.message));
  }
});

module.exports = router;
