import { Router } from "express";
import { customRedisRateLimiter } from "../../utils/rateLimiter.js";
import { getUser, loginUser } from "./user.controller.js";
import { isAuthorised } from "./user.middleware.js";
import {
  getAllUser,
  createNewUser,
  authenticate,
  getToken,
  verifyToken,
} from "./user.controller.js";

const productRouter = Router();
productRouter.post("/login", loginUser);
productRouter.get("/", isAuthorised, getUser);

productRouter.get("/", customRedisRateLimiter, getAllUser);
productRouter.post("/", createNewUser);
productRouter.post("/login", authenticate);
productRouter.post("/profile", getToken, verifyToken);
export default productRouter;
