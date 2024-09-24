const mongoose = require("mongoose");
const blogs = require("../models/blogModels");
const express = require('express')

const app = express();

// Middleware to parse JSON bodies
app.use(express.json()); // Add this line

// Get All the Blogs
const getAllBlogs = async (req, res) => {
  const blogss = await blogs.find({});
  console.log(blogss);
  res.status(200).json(blogss);
};

const createBlog = async (req, res) => {
  if (!req.body.nameOfDish && !req.body.description && !req.body.fileUpload) {
    return res.status(400).json({ message: "Please fill out all fields" });
  }

  try {
    const blog = new blogs({
      nameOfDish: req.body.nameofdish,
      description: req.body.Description,
      fileUpload: req.body.file,
    });
    await blog.save();
    console.log("Blog Post Created");
    res.status(201).json(blog); // Use 201 for resource creation
  } catch (error) {
    console.error("Error creating blog:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
 

// Delete a Blogs
const deleteBlog = async (req, res) => {
  res.status(200).json({ message: "Deleted Blog" });

  // const blog = await blogs.findById(req.params.id)

  // if(!blog){
  //  res.status(400)
  //   throw new Error('Blog not found')
  // }

  // else{
  //   await blog.remove()
  // }
};

// Update Blogs
const updateBlog = async (req, res) => {
  res.status(200).json({ message: "Updated Blog" });
};

// // Get single Blogs
// const getSingleBlog = async (req, res) => {
// //  res.send('Hello')
// };
module.exports = {
  getAllBlogs,
  createBlog,
  deleteBlog,
  updateBlog,
  // getSingleBlog,
};
