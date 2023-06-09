const express = require("express");
const User = require("../../models/UserModel");
const {
  userSuccessResponse,
  userErrorsResponse,
} = require("../../presenter/UserPresenter");
const HTTP_STATUS = require("../../constant/httpStatus");
const jwtVerify = require("../../helpers/jwtVerify");

const router = express.Router();

router.patch("/api/users", async (req, res) => {
  const token = req.headers.authorization.split(" ")[1];

  const { user } = jwtVerify(token);

  const updateData = {
    sex: req.body.sex,
    year: req.body.year,
    name: req.body.name,
    major: req.body.major,
    surname: req.body.surname,
    faculty: req.body.faculty,
  };

  // find and update
  try {
    await User.findByIdAndUpdate(user.id, updateData);

    res.status(HTTP_STATUS.OK).send(userSuccessResponse("Update Success"));
  } catch (error) {
    res
      .status(HTTP_STATUS.INTERNAL_SERVER_ERROR)
      .send(userErrorsResponse(error.message));
  }
});

module.exports = router;
