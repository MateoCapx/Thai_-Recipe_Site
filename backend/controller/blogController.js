const mongoose = require('mongoose')
const blogs = require('../models/blogModels')

// Get All the Blogs
const getAllBlogs = async (res, req)=>{
    const blogs = await blogs.find({}).sort({created})
    res.status(200).json(blogs)
}

// Get single Blogs

// Create a Blog 

// Delete a Blogs

// Update Blogs


module.exports = {
    getAllBlogs
}