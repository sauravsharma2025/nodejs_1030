const BaseError = require("./BaseError");

const logError = (err) => {};
const logErrorMiddleware = (err, req, res, next) => {
  logError(err);
  next(err);
};
function returnError(err, req, res, next) {
  res.status(err.statusCode || 500).send(err.message);
}

function isOperationalError(error) {
  if (error instanceof BaseError) {
    console.log("SK@ssss");
    return error.isOperational;
  }
  return false;
}
module.exports = {
  logError,
  logErrorMiddleware,
  returnError,
  isOperationalError,
};
