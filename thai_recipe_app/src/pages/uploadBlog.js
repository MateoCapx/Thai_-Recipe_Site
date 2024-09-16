import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Input, TextField, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
// import UploadBlog from "../pages/uploadBlog";

const uploadBlogFiles = () => {
  alert("File Submitted");
};

function UploadBlog() {
  return (
    <div>
      <Container sx={{ textAlign: "center" }}>
        <h1> Blogs Upload Page</h1>
        <Button component={Link} to="/" variant="contained" color="primary">
          {" "}
          Back to Home Page
        </Button>
        {/* Start of Blogs Upload form */}
        <div id="BlogUpload-Form">
          <form>
            <br />

            <span>Name of Dish: </span>
            <Input
              type="text"
              name="name"
              // value={formData.name}
              // onChange={handleChange}
              required
            />

            <br />
            <br />

            <span>Description Of Dish: </span>
            <TextField
              sx={{ backgroundColor: "white" }}
              label="Description"
              multiline
              rows={4} // Specifies the number of visible text lines
              // value={description}
            />

            <br />
            <br />

            <span id="upload-photos-span">Upload Photo & Video </span>
            <input
              type="file"
              name="name"
              // value={formData.name}
              // onChange={handleChange}
              required
            />
            <hr />

            <Button
              sx={{ marginTop: "20px" }}
              variant="contained"
              color="primary"
              onClick={uploadBlogFiles}
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
