// dependency imports
const express = require("express");
const cors = require("cors");
var cookieParser = require("cookie-parser");

// routers imports
const authRouter = require("../routers/auth");
const userRouter = require("../routers/user");
const SVRouter = require("../routers/sendingVet");
const VaccinationRouter = require("../routers/vaccination");
const massageRouter = require("../routers/massage");

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
  app.use("/api/v0/SV", SVRouter);
  app.use("/api/v0/Vaccination", VaccinationRouter);
  app.use("/api/v0/massages", massageRouter);
};
