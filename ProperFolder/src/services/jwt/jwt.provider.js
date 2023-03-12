import jwt from "jsonwebtoken";
import { JWT_PASS_KEY } from "./jwt.config.js";

export const signToken = (payload) => {
  if (!payload) {
    return false;
  }

  const result = jwt.sign(payload, JWT_PASS_KEY);
  return result;
};

export const verifyToken = (token) => {
  try {
    const result = jwt.verify(token, JWT_PASS_KEY);
    return result;
  } catch (err) {
    return false;
  }
};

export const decodeToken = (token) => {
  try {
    const result = jwt.decode(token);
    return result;
  } catch (err) {
    return false;
  }
};
