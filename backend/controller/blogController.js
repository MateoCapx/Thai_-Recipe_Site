const mongoose = require("mongoose");
const blogs = require("../models/blogModels");
// const express = require("express");

// // Initlaize Express
// const app = express();
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// Get All the Blogs
const getAllBlogs = async (req, res) => {
  const blogss = await blogs.find({});
  console.log(blogss);
  res.status(200).json(blogss);
};

// const createBlog = async (req, res) => {
//   if (!req.body.nameOfDish && !req.body.description && !req.body.fileUpload) {
//     res.status(400).json({ message: "Please fill out all fields" });
//   }
//   try {
//     const blog = new blogs({
//       nameOfDish: req.body.nameofdish,
//       description: req.body.Description,
//       fileUpload: req.body.file,
//     });
//     await blog.save();
//     console.log("Blog Post Created");
//     res.status(201).json(blog); // Use 201 for resource creation
//   } catch (error) {
//     console.error("Error creating blog:", error);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// };

const createBlog = async (req, res) => {
  if (!req.body.nameOfDish && !req.body.description && !req.body.fileUpload)
    res.status(400).json({ message: "Please fill out all fields" });
  try {
    const blog = await BlogSchema.create(req.body);
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a Blogs
const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;

    const blog = await blogs.findByIdAndDelete(id);

    if (!blogs) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Blogs
const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await blogs.findByIdAndUpdate(id, req.body);
    console.log("Blog Updated"); // <-- Notifiying user that blog is updated
    if (!blogs) {
      return res.status(404).json({ message: "Blog not found" });
    }
    const updateBlog = await blogs.findById(id);
    console.log("Updated Blog = ", updateBlog);
    res.status(200).json(updateBlog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// if (blog) {
//   res.status(200).json({ message: "Blogs Here" });
//   if (blog) {
//     await blog.findByIdAndUpdate({_id:});
//   }
//   console.log("Blog Deleted");
// } else {
//   res.status(200).json({ message: "Updated Blog" });
// }

// const updatedGoal = await blog.findByIdAndUpdate(req.params.id, req.body, {
//   new: true,
// });

// res.status(200).json(updatedGoal);
// };

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
