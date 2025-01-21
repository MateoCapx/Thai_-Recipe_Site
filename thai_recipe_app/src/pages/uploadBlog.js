import React, { useState } from "react";
import { Link } from "react-router-dom";
import TopHeader from "../components/topHeader";
import NavBar from "../components/navBar";
import { Button, Container, Input, TextField } from "@mui/material";

function UploadBlog() {
  const [nameState, setNameState] = useState("");
  const [textArea, setTextArea] = useState("");
  const [fileUpload, setFileUpload] = useState(null);

  const uploadBlogFiles = async (e) => {
    e.preventDefault();

    const formData = {
      nameOfDish: nameState,
      description: textArea,
      fileUpload: fileUpload,
    };

    try {
      const response = await fetch("http://localhost:4000/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Set the correct header
        },
        body: JSON.stringify(formData), // Convert the data to JSON string
      });

      console.log(response);

      if (!response.ok) {
        throw new Error("Problem submitting form");
      }

      const json = await response.json();
      console.log(json);
      // Reset form fields
      setNameState("");
      setTextArea("");
      alert("File Submitted");
    } catch (error) {
      console.error("Error:", error);
      alert("There was a problem submitting the form.");
    }
  };

  return (
    <div>
      <TopHeader />
      <NavBar />
      <br />
      <br />
      <Container sx={{ textAlign: "center" }}>
        <h1>Blogs Upload Page</h1>
        <Button component={Link} to="/" variant="contained" color="primary">
          Back to Home Page
        </Button>

        <div id="BlogUpload-Form">
          <form onSubmit={uploadBlogFiles}>
            <br />
            <span>Name of Dish: </span>
            <Input
              type="text"
              name="nameofdish"
              value={nameState}
              onChange={(e) => setNameState(e.target.value)}
            />
            <br />
            <br />

            <span>Description Of Dish: </span>
            <TextField
              sx={{ backgroundColor: "white" }}
              label="Description"
              name="description"
              multiline
              rows={4}
              value={textArea}
              onChange={(e) => setTextArea(e.target.value)}
            />
            <br />
            <br />

            <span id="upload-photos-span">Upload Photos & Video </span>
            <input
              type="file"
              name="file"
              onChange={(e) => setFileUpload(e.target.files[0])} // Get the first file
              required
            />
            {/* <hr />  */}

            <Button
              sx={{ marginTop: "20px" }}
              variant="contained"
              color="primary"
              type="submit" // Change to submit type
            >
              Submit Blog
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default UploadBlog;
