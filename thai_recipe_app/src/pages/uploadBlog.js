import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Input, TextField, Typography } from "@mui/material";
// import UploadBlog from "../pages/uploadBlog";
// const blogModels = require {nameOfDish, description, fileUpload } from "backend/models"

function UploadBlog() {
  
  const [nameState, setNameState] = useState("");
  const [textArea, setTextArea] = useState("");
  const [fileUpload, setfileUpload] = useState(null);

 useEffect(()=>{
  
    },[])


  const uploadBlogFiles = async (e) => {
    // e.preventdefault();


    const fetchBlogss = async () => {
        const response = await fetch('http://localhost:3000/')
        const json = await response.json()
  
        if (response.ok) {
           console.log(json)
        }
      }
  
      fetchBlogss()
   
  }

  //   const response = await fetch("http://localhost:3000/", {
  //     method: "post",
  //     body: JSON.stringify(),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   const json = await response.json();

  //   if (!response.ok) {
  //    Alert("Probelm Submitting Form")
  //   }
  //   if (response.ok) {
  //     // setEmptyFields([])
  //     // setError(null)
  //     setNameState("");
  //     setTextArea("");
  //     setfileUpload("");
  //   }
  //   alert("File Submitted");
  // };


  return (
    <div>
      <Container sx={{ textAlign: "center" }}>
        <h1> Blogs Upload Page</h1>
        <Button component={Link} to="/" variant="contained" color="primary">
          Back to Home Page
        </Button>

        {/* Start of Blogs Upload form */}
        <div id="BlogUpload-Form">
          <form>
            <br />

            <span>Name of Dish: </span>
            <Input
              type="text"
              name="nameofdish"
              value={nameState}
              onChange={(e) => {
                setNameState(e.target.value);
              }}
            />

            <br />
            <br />

            <span>Description Of Dish: </span>
            <TextField
              sx={{ backgroundColor: "white" }}
              label="Description"
              name="Description"
              multiline
              rows={4} // Specifies the number of visible text lines
              value={textArea}
              onChange={(e) => {
                setTextArea(e.target.value);
              }}
            />

            <br />
            <br />

            <span id="upload-photos-span">Upload Photo & Video </span>
            <input
              type="file"
              name="file"
              value={fileUpload}
              onChange={setfileUpload}
              required
            />
            <hr />

            <Button
              sx={{ marginTop: "20px" }}
              variant="contained"
              color="primary"
              //  onClick={uploadBlogFiles}
              onClick={uploadBlogFiles}
            >
              Submit Blog{" "}
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default UploadBlog;

// const Form = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     description: '',
//     file: null,
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleFileChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       file: e.target.files[0],
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const form = new FormData();
//     form.append('name', formData.name);
//     form.append('description', formData.description);
//     form.append('file', formData.file);

//     try {
//       await axios.post('http://localhost:5000/api/form', form, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       alert('Form submitted successfully!');
//     } catch (error) {
//       console.error('Error submitting form:', error);
//     }
//   };

//   return (
//     <Box component="form" onSubmit={handleSubmit} sx={{ p: 3 }}>
//       <Typography variant="h6">Submit Your Data</Typography>
//       <TextField
//         fullWidth
//         label="Name"
//         name="name"
//         value={formData.name}
//         onChange={handleChange}
//         sx={{ mb: 2 }}
//       />
//       <TextField
//         fullWidth
//         label="Description"
//         name="description"
//         value={formData.description}
//         onChange={handleChange}
//         multiline
//         rows={4}
//         sx={{ mb: 2 }}
//       />
//       <input
//         type="file"
//         name="file"
//         onChange={handleFileChange}
//         accept="image/*"
//         style={{ marginBottom: '16px' }}
//       />
//       <Button type="submit" variant="contained">Submit</Button>
//     </Box>
//   );
// };

// export default Form;
