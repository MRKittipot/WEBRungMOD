const getUserSuccessResponse = (userData) => {
  return {
    message: "User found",
    status: "success",
    error: null,
    data: {
      id: userData._id,
      name: userData.name,
      surname: userData.surname,
      email: userData.email,
      year: userData.year,
      sex: userData.sex,
      faculty: userData.faculty,
      major: userData.major,
      department: userData.department,
      userCollection: userData.userCollection,
    },
  };
};

const userSuccessResponse = (msg) => {
  return {
    message: msg,
    status: "success",
    error: null,
  };
};

const userErrorsResponse = (err) => {
  return {
    message: "Error",
    status: "fail",
    error: err,
  };
};

const userLoginSuccess = (token) => {
  return {
    message: "User login successfully",
    status: "success",
    error: null,
    data: {
      token,
    },
  };
};

module.exports = {
  userSuccessResponse,
  userErrorsResponse,
  getUserSuccessResponse,
  userLoginSuccess,
};
