export const isAuthorised = (req, res, next) => {
  const { authorization } = req.headers;

  const isValidToken = verifyToken(authorization);
  if (!isValidToken) {
    return res
      .status(401)
      .json({ message: "You're not allowed to access this page" });
  }

  next();
};
