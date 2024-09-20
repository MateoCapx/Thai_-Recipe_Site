const express = require("express");
const router = express.Router();
const models = require('../models/blogModels')

const{
  getAllBlogs
} = require('../controller/blogController')

//Getting all the blogs
router.get("/", (res,req)=> {
    const blogs = models.find()
    res.json(blogs)
});

// Getting a single blg
router.get('/:id', (res, req)=>{
res.json()
})

// Post a blog to the database
router.post("/", (res, req) => {
  res.json();
});

// DELETE a blog
router.delete("/:id", (res, req) => {
  res.json();
});

// UPDATE a blog
router.patch("/", (res, req) => {
  res.json();
});

module.exports = router;
