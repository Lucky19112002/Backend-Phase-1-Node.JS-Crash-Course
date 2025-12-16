import http from "http";
const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
  // res.setHeader("Content-Type", "text/html");
  // res.statusCode = 200;

  // console.log(req.url);
  // console.log(req.method);
  try {
    //Cehck if GEt Request
    if (req.method === "GET") {
      if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>Home Page</h1>");
      } else if (req.url === "/about") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>About Page</h1>");
      } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("<h1>Not Found</h1>");
      }
    } else {
      throw new Error("Method Not Allowed");
    }
  } catch (error) {
    res.writeHead(500, { "Content-Type": "text/plain" });
    console.log(error);
    res.end("Server Error");
  }

  // res.end("<h1>Hello World!</h1>");
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
