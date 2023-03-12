const express = require("express");
const app = express();
app.get("/", (req, res) => {
  console.log("SK@requestHit");
  setTimeout(() => {
    res.send("timeout");
  }, 2000);
});
app.timeOut = 5000;
app.listen(3000, () => {
  console.log("SK@Listening on port number 3000");
});
