const http = require("http");
const server = http.createServer((req, res) => {
  console.log("SK@Got request");
  setTimeout(() => {
    res.end("BYE BYE");
  }, 10000);
});
server.timeout = 5000;
// server.on("timeout", (socket) => {
//   console.log("SK@Destrying socket");
//   socket.destroy();
// });

// Optimised approached
server.setTimeout(5000, (socket) => {
  console.log("SK@Destroying");
  socket.destroy();
});
server.listen(3000, () => {
  console.log("SK@Listening");
});
