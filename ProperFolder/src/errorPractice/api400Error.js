const BaseError = require("./BaseError.js");
const httpStatusCodes = require("./httpStatusCode.js");

class Api400Error extends BaseError {
  constructor(
    name,
    statusCode = httpStatusCodes.BAD_REQUEST,
    description = "Bad Request hai",
    isOperational = true
  ) {
    super(name, statusCode, description, isOperational);
  }
}
module.exports = Api400Error;
