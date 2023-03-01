const express = require("express");
const app = express();
const port = 30000;

app.get("/products", (req, res) => {
  const response = {
    name: "Hareesh",
    city: "Chennai.",
    country: "India",
    isActive: true,
  };

  res.send(response);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
