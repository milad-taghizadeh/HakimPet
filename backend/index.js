const express = require("express");
const app = express();
const PORT = 3000;

const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();

// server Config
require("./server/serverConfig")(app);

// set the DB connection
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("DB connected successfully !!");
    // set the app to listen on a Port
    app.listen(process.env.PORT || PORT);
    console.log("backend server is running !!");
  })
  .catch((err) => {
    // catch the err if there is one
    console.log(err);
  });
