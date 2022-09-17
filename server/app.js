const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require('mongoose')
const signupRoute = require("./routes/signupRoute");

// config
dotenv.config({ path: "./config/config.env" });
const port = process.env.PORT;
const DB = process.env.DATABASEURI;

//middleware
app.use(express.json());
app.use((req, res, next) => {
  next();
});

//routes
app.use("/api/gym", signupRoute);

mongoose
  .connect(DB)
  .then(() => {
    app.listen(port, () => {
        console.log("sever is running....");
      });
    console.log("database connection is succesfull....");
  })
  .catch((error) => console.log(error));


