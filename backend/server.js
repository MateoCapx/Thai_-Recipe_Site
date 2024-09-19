require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const blogRoutes = require("./routes/blogRoutes");
const env = require("");

// Initlaize Express
const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

//Routes
app.use("/blogs", blogRoutes);

// Start Server
app.listen(process.env.PORT, () =>
  console.log("Server is listening on port", process.env.PORT)
);
