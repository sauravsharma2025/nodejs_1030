import Express from "express";
let app = Express();
let port = 6500;
app.set("view engine", "ejs");
app.get("/viewEngine", function (req, res) {
  res.render("home");
});
app.listen(port, function (err) {
  if (err) console.log(err);
  console.log("Server Listening on ", port);
});
