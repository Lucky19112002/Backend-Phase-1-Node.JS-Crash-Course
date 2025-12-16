import { createServer } from "http";
const PORT = process.env.PORT;

const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Jack" },
  { id: 4, name: "Jill" },
];

const server = createServer((req, res) => {
  try {
    res.setHeader("Content-Type", "application/json");
    if (req.url === "/api/users" && req.method === "GET") {
      res.write(JSON.stringify(users));
    } else if (
      req.url.match(/\/api\/users\/([0-9]+)/) &&
      req.method === "GET"
    ) {
      const id = req.url.split("/")[3];
      const user = users.find((user) => user.id === parseInt(id));
      if (user) {
        res.write(JSON.stringify(user));
      } else {
        res.statusCode = 404;
        res.write(JSON.stringify({ message: "user not found" }));
      }
    } else {
      res.statusCode = 404;
      res.write(JSON.stringify({ message: "route not found" }));
    }
    res.end();
  } catch (error) {
    res.setHeader("Content-Type", "text/plain");
    res.statusCode = 404;
    res.write("Server Error");
    res.end();
  }
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
