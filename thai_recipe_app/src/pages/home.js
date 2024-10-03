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

  const renderBlogs = async (e) => {
    //Fetching Data from backend
    try {
      const response = await axios.get("http://localhost:4000/");
      console.log(response);
      // setBlogs(response.data);

      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  //Fetch data on mount
  useEffect(() => {
    renderBlogs();
  }, []);

  // Handle loading and error states
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

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
                        Lizard
                        <h2 key={blog.nameOfDish}></h2>
                        <li> </li>
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                      >
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
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
