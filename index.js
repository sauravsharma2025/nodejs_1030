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
  axios
    .get("https://6388d838d94a7e5040a888bc.mockapi.io/api/v1/users", {
      headers: { "Accept-Encoding": "application/json" },
    })
    .then(function (res) {
      const page = req.query.page;
      const limit = req.query.limit;
      const startIndex = (page - 1) * limit;
      const endIndex = page * limit;
      const resultUsers = res.data.slice(startIndex, endIndex);

      let dynamicData = [];
      let dataTable = `<h1>Api data</h1>
      <table>
      <tr style="border:'1px solid black'">
      <th>Sr No.</th>
      <th>Name</th>
      <th>Created At</th>
      <th>Avatar</th>
      </tr>
      <tr>`;
      for (let i = 0; i < resultUsers.length; i++) {
        dynamicData.push(`<td>${resultUsers[i]["id"]}</td>
        <td>${resultUsers[i]["name"]}</td>
        <td>${resultUsers[i]["createdAt"]}</td>
        <td><img src='${resultUsers[i]["avatar"]}'></td>
        </tr><br>
        </table>`);
      }

      response.send(dataTable + dynamicData);
      response.end();
    })
    .catch(function (err) {
      console.log(err);
    });
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
