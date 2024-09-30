// require('dotenv').config()

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const blogRoutes = require("./routes/blogRoutes");
const DB = require("./config/connection"); // <- Starts Connection to database
const controller = require("../backend/controller/blogController");
const {createBlog} = require('../backend/controller/blogController')

// Initlaize Express
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())

// app.use(express.json()); It parses incoming JSON requests and puts the parsed data in req.body.
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
// app.use(blogRoutes);
app.use("/", blogRoutes);
app.post('/blogs', createBlog);

// Start Server
app.listen(process.env.PORT, () =>
  console.log("🌍 Server is listening on port", process.env.PORT)
);

// When debug mode is enabled, Mongoose will print detailed information about the operations it performs to the console, such as the queries it sends to the database, the documents it retrieves, and any errors that occur.
mongoose.set("debug", true);
