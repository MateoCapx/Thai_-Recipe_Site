const express = require("express");
const router = express.Router();
const models = require("../models/blogModels");

const {
  getAllBlogs,
  getSingleBlog,
  createBlog,
  deleteBlog,
  updateBlog,
} = require("../controller/blogController");

//Getting all the blogs
router.get("/", getAllBlogs);

// Getting a single blg
router.get("/:id", getSingleBlog);

// Post a blog to the database
router.post("/", deleteBlog);

// DELETE a blog
router.delete("/:id", createBlog);

// UPDATE a blog
router.put("/", updateBlog);

module.exports = router;
