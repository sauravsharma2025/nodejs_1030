import Express, { json } from "express";
import { PORT } from "./config.js";

const app = Express();
app.get("/", (req, res) => {
  res.end("heelo");
});
// app.use("/user", orderRouter);
// app.use("/user", customRedisRateLimiter);
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
