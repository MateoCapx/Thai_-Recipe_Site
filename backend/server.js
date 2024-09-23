// require('dotenv').config()

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const blogRoutes = require("./routes/blogRoutes");
const DB = require("./config/connection"); // <- Starts Connection to database

// Initlaize Express
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

//Routes
app.use(blogRoutes);



// Start Server
app.listen(process.env.PORT, () =>
  console.log("🌍 Server is listening on port", process.env.PORT)
);

// When debug mode is enabled, Mongoose will print detailed information about the operations it performs to the console, such as the queries it sends to the database, the documents it retrieves, and any errors that occur.
mongoose.set("debug", true);
