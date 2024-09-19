const express = require("express");

const router = express.Router();

//Getting all the blogs
router.get("/", (res, req) => {
  res.json({ mssg: "Welcome" });
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
