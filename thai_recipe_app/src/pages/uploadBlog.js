import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Typography } from "@mui/material";
// import UploadBlog from "../pages/uploadBlog";

function UploadBlog() {
  return (
    <div>
      <Container sx={{ textAlign: "center" }}>
        <h1> Blogs Upload Page</h1>
        <Button component={Link} to="/" variant="contained" color="primary">
          {" "}
          Upload Blogs
        </Button>
        {/* Start of Blogs Upload form */}
        <div id="BlogUpload-Form">
          <form>
            <p>Name of Dish: </p>
            <input
              type="text"
              name="name"
              // value={formData.name}
              // onChange={handleChange}
              required
            />
            <hr />
            <p>Description Of Dish: </p>
            <input
              type="text"
              name="name"
              // value={formData.name}
              // onChange={handleChange}
              required
            />
            <p>Upload Photo & Video: </p>
            <input
              type="text"
              name="name"
              // value={formData.name}
              // onChange={handleChange}
              required
            />
            <br />
            <Button
              sx={{ marginTop: "20px" }}
              variant="contained"
              color="primary"
            >
              {" "}
              Submit Blog{" "}
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default UploadBlog;
