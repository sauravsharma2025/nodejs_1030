const http = require("http");

const PORT = 4000;
http
  .createServer((req, res) => {
    const response = {
      name: "Hareesh",
      city: "Chennai.",
      country: "India",
      isActive: true,
    };
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(response));
    res.end();
  })
  .listen(PORT, () => {
    console.log(`The server is running at http://localhost:${PORT}`);
  });
