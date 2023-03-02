import Express, { json } from "express";
import orderRouter from "./api/user/user.route.js";
import productRouter from "./api/user/user.route.js";
import { PORT } from "./config.js";

const app = Express();

app.use(json());
app.use("/product", productRouter);
app.use("/user", orderRouter);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
