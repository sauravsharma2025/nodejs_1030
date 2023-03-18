import { verifyClientToken } from "./client.controller.js";

export const isAuthorisedClient = (req, res, next) => {
  const { authorization } = req.headers;

  const isValidToken = verifyClientToken(authorization);
  if (!isValidToken) {
    return res
      .status(401)
      .json({ message: "You're not allowed to access this page" });
  }

  next();
};
