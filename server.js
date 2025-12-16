import http from "http";
import fs from "fs/promises";
import url from "url";
import path from "path";
const PORT = process.env.PORT;

// Get Current Path
const __filename = url.fileURLToPath(import.meta.url); // Current File Path
const __dirname = path.dirname(__filename); // Current Directory Path

const server = http.createServer(async (req, res) => {
  // res.setHeader("Content-Type", "text/html");
  // res.statusCode = 200;

  // console.log(req.url);
  // console.log(req.method);
  try {
    //Cehck if GEt Request
    let filepath;
    if (req.method === "GET") {
      if (req.url === "/") {
        filepath = path.join(__dirname, "Public", "index.html");
      } else if (req.url === "/about") {
        filepath = path.join(__dirname, "Public", "about.html");
      } else {
        throw new Error("Page Not Found");
      }
    } else {
      throw new Error("Method Not Allowed");
    }

    const data = await fs.readFile(filepath);
    res.setHeader("Content-Type", "text/html");
    res.write(data);
    res.end();
  } catch (error) {
    res.writeHead(500, { "Content-Type": "text/plain" });
    console.log(error);
    res.end("Server Error");
  }

  // res.end("<h1>Hello World!</h1>");
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
