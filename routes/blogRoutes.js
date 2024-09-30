const express = require("express");
const router = express.Router();
const models = require("../models/blogModels");

const {
  getAllBlogs,
  // getSingleBlog,
  createBlog,
  deleteBlog,
  updateBlog,
} = require("../controller/blogController");

//Getting all the blogs
router.get("/", getAllBlogs);

// Post a blog to the database
router.post("/", createBlog);

// DELETE a blog
router.delete("/:id", deleteBlog);

// UPDATE a blog
router.put("/:id", updateBlog);

// Getting a single blg
// router.get("/:id", getSingleBlog);

module.exports = router;
