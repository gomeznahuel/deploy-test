const express = require("express");
require("dotenv").config();

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
  }

  middlewares() {
    this.app.use(express.json());
  }

  routes() {
    this.app.get("/", (req, res) => res.send("Hello World!"));
  }

  execute() {
    this.middlewares();
    this.routes();
    this.app.listen(this.port, () =>
      console.log(`Server running on port ${this.port}`)
    );
  }
}

const server = new Server();
server.execute();
