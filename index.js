import path from "path";
import http from "http";
import fs from "fs";

import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const server = http.createServer((req, res) => {
  let test = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url + ".html"
  );
  res.writeHead(200, { "Content-Type": "text/html" });
  fs.readFile(test, (err, content) => {
    if (err) {
      if (err.code == "ENOENT") {
        fs.readFile(
          path.join(__dirname, "public", "404.html"),
          (err, content) => {
            if (err) {
              res.end("Error");
            } else {
              res.end(content);
            }
          }
        );
      } else {
        res.end("Error");
      }
    } else {
      res.end(content, "utf-8");
    }
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT);
