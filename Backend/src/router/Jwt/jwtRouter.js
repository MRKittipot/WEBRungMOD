const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../../models/UserModel");
const { getUserSuccessResponse } = require("../../presenter/UserPresenter");

router.post("/api/jwt/verify", async (req, res) => {
  const token = req.headers.authorization.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Auth Error" });
  }

  const data = jwt.verify(token, process.env.JWT_SECRET);

  if (!data) {
    return res.status(401).json({ message: "Auth Error" });
  }

  try {
    const client = await User.findById(data.user.id);
    if (!client) {
      return res.status(401).json({ message: "Auth Error" });
    }

    return res.status(200).json(getUserSuccessResponse(client));
  } catch (error) {
    return res.status(401).json({ message: "Auth Error" });
  }
});

module.exports = router;
