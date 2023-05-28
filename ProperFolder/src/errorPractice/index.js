const Express = require("express");
const fs = require("fs");
const Api400Error = require("./api400Error.js");

const app = Express();
console.log("SK@dd");
app.get("/", function (req, res, next) {
  try {
    fs.readFile("/maybe-valikkkd-file", "utf-8", (err, data) => {
      res.locals.data = data;
      next();
    });
  } catch (err) {
    next(err);
    res.end();
  }
});
const { logError, returnError, isOperationalError } = require("./errorHandler");

app.use(logError);
app.use(isOperationalError);
app.use(returnError);
app.listen(3000, () => {
  console.log("SK@i am running on 3000");
});
