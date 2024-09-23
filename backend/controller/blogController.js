const mongoose = require("mongoose");
const blogs = require("../models/blogModels");

// Get All the Blogs
const getAllBlogs = async (req, res) => {
  const blogss = await blogs.find({});
  console.log(blogss);
   res.status(200).json(blogss);
};



// Create a Blog
const createBlog = async (req, res) => {
 
  if(!req.body.nameOfDish && !req.body.description && !req.body.fileUpload){
    res.status(400)
    throw new Error('Please fill out all fields')
  }
  const blog = await blogs.create({
    nameOfDish: req.body.nameOfDish,
    description: req.body.description,
     fileUpload: req.body.fileUpload,
  },
  console.log('Blog Post Created')
)

  res.status(200).json(blog)

};

// Delete a Blogs
const deleteBlog = async (req, res) => {
  res.status(200).json({message:"Deleted Blog"})

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
  res.status(200).json({message:"Updated Blog"})

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
