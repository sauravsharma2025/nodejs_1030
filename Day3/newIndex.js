const express = require("express");
const app = express();
const port = 4000;

const queryCheckMiddleware = (req, res, next) => {
  console.log("Inside Middleware");
  if (req.query.name !== "saurav") {
    res.send("You're not allowed to access this requesr");
  } else {
    next();
  }
};

const businessLogic = (req, res, next) => {
  console.log("Inside the main logic");
  res.send(`Welcome to the bank Mr ${req.query.name}`);
};

app.get("/", queryCheckMiddleware, businessLogic);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
