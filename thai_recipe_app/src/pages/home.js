import * as React from "react";
import { useState, useEffect } from "react";
import { Box, Container, Grid2, Card, Typography } from "@mui/material";
import TopHeader from "../components/topHeader";
import NavBar from "../components/navBar";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import axios from "axios";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const renderBlogs = async () => {
    try {
      const response = await axios.get("http://localhost:4000/");

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

  return (
    <div className="topHeader">
      <TopHeader />
      <NavBar />
      <br />
      <br />
      <Grid2 container spacing={2} id="homePageGrid">
        <div>
          {blogs && blogs.length > 0 ? (
            blogs.map((blog) => (
              <Grid2 size={{ xs: 6, md: 8 }}>
                <div>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      sx={{ height: 140 }}
                      image="/static/images/cards/contemplative-reptile.jpg"
                      title="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        <h2 key={blog.nameOfDish}>{blog.nameOfDish}</h2>
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                      >
                        <h2 key={blog.description}>{blog.description}</h2>
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Share</Button>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>
                </div>
              </Grid2>
            ))
          ) : (
            <p>No blogs available.</p> // Handle the case when blogs are not available
          )}
        </div>

        <Grid2 size={{ xs: 6, md: 4 }}>
          <div>xs: 6, md: 8</div>
        </Grid2>
      </Grid2>
    </div>
  );
};

export default Home;
