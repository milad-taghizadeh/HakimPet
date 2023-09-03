// dependency imports
const express = require("express");
const cors = require("cors");
var cookieParser = require("cookie-parser");

// routers imports
const authRouter = require("../routers/auth");
const userRouter = require("../routers/user");

//use the routers and middleware , Export the function
module.exports = function (app) {
  // CORS for browsers
  app.use(cors());

  // JSON converter
  app.use(express.json());

  // Cookie parser
  app.use(cookieParser());

  // set the routers
  app.use("/api/v0/auth", authRouter);
  app.use("/api/v0/user", userRouter);
};
