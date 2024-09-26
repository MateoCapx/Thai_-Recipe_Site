const mongoose = require("mongoose");
const blogs = require("../models/blogModels");
 
// Get All the Blogs
const getAllBlogs = async (req, res) => {
  const blogss = await blogs.find({});
  console.log(blogss);
  res.status(200).json(blogss);

if(blogss){
  console.log("Number of Blogs =" ,blogss.length)
}
};
//Create a Blog
const createBlog = async (req, res) => {
  try {
    if (!req.body.nameOfDish || !req.body.description || !req.body.fileUpload) {
      return response.status(400).send({
        message: "Send all required fields: Name of Dish, Description, File Upload",
      });
    }
    
    const newBlog = {
      nameOfDish: req.body.nameOfDish,
      description: req.body.description,
      fileUpload: req.body.fileUpload,
    };

    const blog = await blogs.create(newBlog);

    return res.status(201).send(blog);
  } catch (error) {
    console.log(error.message);
     res.status(500).send({ message: error.message });
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

module.exports = {
  getAllBlogs,
  createBlog,
  deleteBlog,
  updateBlog,
  // getSingleBlog,
};
