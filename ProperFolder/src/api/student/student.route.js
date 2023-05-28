import { Router } from "express";
import {
  refreshToken,
  sentToken,
  studentVerify,
} from "./student.controller.js";
const studentRouter = Router();
studentRouter.post("/", sentToken);
studentRouter.post("/verifyStudent", studentVerify);
studentRouter.post("/refresh", refreshToken);
export default studentRouter;
