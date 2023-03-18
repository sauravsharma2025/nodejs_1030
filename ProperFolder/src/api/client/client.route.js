import { Router } from "express";
import getAllClient, {
  createNewClient,
  deleteClient,
  getClientToken,
  knowClient,
  updateClient,
  verifyClientToken,
} from "./client.controller.js";
import { isAuthorisedClient } from "./client.middleware.js";

const clientRouter = Router();
clientRouter.get("/", isAuthorisedClient, getAllClient);
clientRouter.post("/verifyClient", getClientToken, verifyClientToken);
clientRouter.post("/add", createNewClient);
clientRouter.get("/knowClient", knowClient);
clientRouter.post("/update", updateClient);
clientRouter.post("/delete", deleteClient);
export default clientRouter;
