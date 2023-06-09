const uploadSuccessResponse = (msg) => {
  return {
    message: msg,
    status: "success",
    error: null,
  };
};

const uploadErrorsResponse = (err) => {
  return {
    message: "Error",
    status: "fail",
    error: err,
  };
};

const getDocumentSuccessResponse = (data) => {
  return {
    message: "Success",
    status: "success",
    error: null,
    data: data,
  };
};

module.exports = {
  uploadSuccessResponse,
  uploadErrorsResponse,
  getDocumentSuccessResponse
};
