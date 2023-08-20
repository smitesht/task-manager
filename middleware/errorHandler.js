const { CustomAPIError } = require("../error/customError");

const errorHandlerMiddleware = (err, req, resp, next) => {
  if (err instanceof CustomAPIError) {
    resp.status(err.statusCode).json({ message: err.statusCode });
  }

  return resp
    .status(500)
    .json({ message: "Something went wrong, please try again" });
};

module.exports = errorHandlerMiddleware;
