import { useState, useEffect } from "react";
import { Box, Container, Grid2, Card, Typography } from "@mui/material";
import TopHeader from "../components/topHeader";
import NavBar from "../components/navBar";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import axios from "axios";
import Paper from '@mui/material/Paper';

const Home = () => {
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
    <div className="topHeader">
      <TopHeader />
      <NavBar />
      <br />
      <br />
      <Grid2 container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} id="homePageGrid">
        {blogs && blogs.length > 0 ? (
          blogs.map((blog) => (
            <Grid2 item size={{ xs: 2, sm: 4, md: 4 }} key={blog.id}>
              <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={blog.image || "/static/images/cards/contemplative-reptile.jpg"}
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
};


export default Home;
 
 