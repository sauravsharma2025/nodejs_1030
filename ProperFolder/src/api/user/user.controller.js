import jwt from "jsonwebtoken";
const secretKey = "gfgf";
export const getAllUser = (req, res) => {
  try {
    res.send({ message: "Get all product list" });
  } catch (e) {
    res.status(400).send("Invalid");
  }
};

export const createNewUser = (req, res) => {
  res.send({ message: "Create new product" });
};
export const authenticate = (req, res) => {
  const user = {
    id: 1,
    userName: "saurav",
    email: "gmail",
  };
  jwt.sign({ user }, secretKey, { expiresIn: "300s" }, (err, token) => {
    res.send({
      token,
    });
  });
};
export const getToken = (req, res, next) => {
  const bearerHeader = req.headers["authorization"];
  console.log("SK@", bearerHeader);
  if (typeof bearerHeader !== "undefined") {
    req.token = bearerHeader;
    next();
  } else {
    res.send({
      result: "Token is not valid",
    });
  }
};
export const verifyToken = (req, res) => {
  jwt.verify(req.token, secretKey, (err, oAuthData) => {
    if (err) {
      res.send({ result: "Invalid request of verify" });
    } else {
      res.json({
        message: "Successfully verifed",
        oAuthData,
      });
    }
  });
};
