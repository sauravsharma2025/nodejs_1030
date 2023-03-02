import { Router } from "express";
import { getAllUser, createNewUser } from "./user.controller.js";

const productRouter = Router();

productRouter.get("/", getAllUser);
productRouter.post("/", createNewUser);

export default productRouter;
