import Express, { json } from "express";
import clientRouter from "./api/client/client.route.js";
import studentRouter from "./api/student/student.route.js";
import dotenv from "dotenv";
dotenv.config();
import { PORT } from "./config.js";
import { initDBConnection } from "./services/db.connect.js";
const app = Express();
initDBConnection();
app.use(json());
app.get("/", (req, res) => {
  res.end("heelo");
});
// app.use("/user", orderRouter);
// app.use("/user", customRedisRateLimiter);
app.use("/client", clientRouter);
app.use("/student", studentRouter);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
