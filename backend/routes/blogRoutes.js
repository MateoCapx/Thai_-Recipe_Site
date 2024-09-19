const express = require("express");

const router = express();

router.get("/", (res, req) => {
  res.json({ mssg: "Welcome" });
});

router.post("/", (res, req) => {
  res.json();
});

router.delete("/:id", (res, req) => {
  res.json();
});

router.patch("/", (res, req) => {
  res.json();
});

module.exports = router;
