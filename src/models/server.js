const express = require("express");
require("dotenv").config();

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.homePath = "/";
    this.usersPath = "/api/users/";
  }

  middlewares() {
    this.app.use(express.json());
  }

  routes() {
    this.app.use(this.homePath, require("../routes/welcome.route"));
    this.app.use(this.usersPath, require("../routes/users.route"));
  }

  execute() {
    this.middlewares();
    this.routes();
    this.app.listen(this.port, () =>
      console.log(`Server running on port ${this.port}`)
    );
  }
}

module.exports = Server;
