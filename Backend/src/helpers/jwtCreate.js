const jwt = require("jsonwebtoken");

const jwtCreate = (user) => {
  return jwt.sign({ user }, process.env.JWT_SECRET, {
    expiresIn: "3d",
  });
};

module.exports = jwtCreate;
