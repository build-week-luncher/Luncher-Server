const express = require("express");

configureMiddleware = require("./middleware.js");
const schoolsRouter = require("../schools/schoolsRouter.js");
const authRouter = require("../auth/authRouter.js");
const adminRouter = require("../admin/adminRouter.js");

// create the server
const server = express();

// middleware
configureMiddleware(server);

// routes
server.use("/api/schools", schoolsRouter);
server.use("/api/auth", authRouter);
server.use("/api/admin", adminRouter);

// sanity check! "/"
server.get("/", async (req, res) => {
  res.status(200).json({ message: "Sanity Check!" });
});

module.exports = server;
