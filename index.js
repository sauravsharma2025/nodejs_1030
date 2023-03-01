import express, { json } from "express";
import axios from "axios";
let apiResponse;

const app = express();
import Task from "./integerToRoman.js";
console.log(Task(12));

app.get("/", (req, res) => {
  res.send(Task(12));
});
app.get("/api_res", (req, response) => {
  res.send(response);
});
app.post("/post", (req, res) => {
  res.send("I am Post");
});
app.put("/put", (req, res) => {
  res.send("i am put");
});
app.delete("/delete", (req, res) => {
  res.send("I am delete ");
});
let port = 3000;
app.listen(port, () => {
  console.log("I am listening at", port);
});
