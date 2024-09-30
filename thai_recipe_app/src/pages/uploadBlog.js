import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Input, TextField } from "@mui/material";

function UploadBlog() {
  const [nameState, setNameState] = useState("");
  const [textArea, setTextArea] = useState("");
  // const [fileUpload, setFileUpload] = useState(null);

  const uploadBlogFiles = async (e) => {
    e.preventDefault(); // Prevent default form submission

    const formData = new FormData();
    formData.append("nameOfDish", nameState);
    formData.append("description", textArea);
    // if (fileUpload) {
    //   formData.append("fileUpload", fileUpload);
    // }

    // const data = JSON.stringify(formData);
    console.log(nameState);

    // try {
    //   const response = await fetch("http://localhost:4000/blogs", {
    //     method: "POST",
    //     body: JSON.stringify(formData),
    //     completed: false,
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   });
    //   //   .then(res => res.json()
    //   // .then(()=>))

    //   if (!response.ok) {
    //     throw new Error("Problem submitting form");
    //   }

    //   const json = await response.json();
    //   console.log(json); // You can handle success response here
    //   // Reset form fields
    //   setNameState("");
    //   setTextArea("");
    //   // setFileUpload(null);
    //   alert("File Submitted");
    // } catch (error) {
    //   console.error("Error:", error);
    //   alert("There was a problem submitting the form.");
    // }
  };

  return (
    <div>
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
              name="Description"
              multiline
              rows={4}
              value={textArea}
              onChange={(e) => setTextArea(e.target.value)}
            />
            <br />
            <br />
            {/* 
            <span id="upload-photos-span">Upload Photo & Video </span>
            <input
              type="file"
              name="file"
              onChange={(e) => setFileUpload(e.target.files[0])} // Get the first file
              required
            />
            <hr /> */}

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

//If you need to upload files, you cannot use application/json because JSON doesn't support binary data.
//For file uploads, you should stick with FormData and multipart/form-data.
