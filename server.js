// Minimal zero-dependency static server for the NetBox Return Tracker.
// Railway sets process.env.PORT; we bind to it and serve index.html.
const http = require("http");
const fs = require("fs");
const path = require("path");

const port = process.env.PORT || 3000;
const indexPath = path.join(__dirname, "index.html");

const server = http.createServer((req, res) => {
  if (req.url === "/healthz") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("ok");
    return;
  }
  // Single-page mockup: serve index.html for any path.
  fs.readFile(indexPath, (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("index.html not found");
      return;
    }
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(data);
  });
});

server.listen(port, () => {
  console.log("NetBox Return Tracker running on port " + port);
});
