import { React, useState, useEffect } from "react";
import TopHeader from "../components/topHeader";
import NavBar from "../components/navBar";
import axios from "axios";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import {
  CardActions,
  CardContent,
  Box,
  Container,
  Grid2,
  Card,
  Typography,
  Stack,
  Paper,
  Pagination,
  item,
} from "@mui/material";

function ViewBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const renderBlogs = async () => {
    try {
      const response = await axios.get("http://localhost:4000");

      console.log("Response status:", response.status); // Debugging log
      console.log("Response data:", response.data); // Debugging log

      const data = response.data;
      setBlogs(data);
      setLoading(false);
    } catch (err) {
      console.log("Error fetching data:", err); // Log the error for debugging
      setError(err.message);
      setLoading(false);
    }
  };

  // Fetch data on mount
  useEffect(() => {
    renderBlogs();
  }, []);

  //Fetch data on mount

  // Handle loading and error states
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <TopHeader />
      <NavBar />
      <h1> View Blogs Page </h1>
      <br></br>
      <Stack spacing={2}>
        <Pagination count={10} />
      </Stack>
      <br></br>
      <Grid2 container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {blogs && blogs.length > 0 ? (
          blogs.map((blog) => (
            <Grid2 item size={{ xs: 6, sm: 4, md: 4 }} key={blog.id}>
              <Card id="cardStyle" sx={{}}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={
                    blog.image ||
                    "/static/images/cards/contemplative-reptile.jpg"
                  }
                  title={blog.nameOfDish}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="div">
                    {blog.nameOfDish}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {blog.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid2>
          ))
        ) : (
          <Grid2 item xs={12}>
            <Typography>No blogs available.</Typography>
          </Grid2>
        )}
         
 
      </Grid2>
    </div>
  );
}

export default ViewBlogs;
