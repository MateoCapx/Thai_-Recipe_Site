const mongoose = require("mongoose");
const blogs = require("../models/blogModels");

// Get All the Blogs
const getAllBlogs = async (res, req) => {
  const blogss = await blogs.find({});
  console.log(blogss);

  //  res.status(200).json(blogs);
};

// Get single Blogs
const getSingleBlog = async (res, req) => {};

// Create a Blog
const createBlog = async (res, req) => {};

// Delete a Blogs
const deleteBlog = async (res, req) => {};

// Update Blogs
const updateBlog = async (res, req) => {};

module.exports = {
  getAllBlogs,
  getSingleBlog,
  createBlog,
  deleteBlog,
  updateBlog,
};
