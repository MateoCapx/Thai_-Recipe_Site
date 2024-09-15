import React from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "@mui/material";
// import UploadBlog from "../pages/uploadBlog";

function UploadBlog() {
  return (
    <div>
      <h1> Blogs Upload Page</h1>
      <Container sx={{ textAlign: "center" }}>
        <Button component={Link} to="/" variant="contained" color="primary">
          {" "}
          Upload Blogs
        </Button>
      </Container>
    </div>
  );
}

export default UploadBlog;
