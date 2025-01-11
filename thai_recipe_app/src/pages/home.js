import { useState, useEffect } from "react";
import {
  Box,
  Stack,
  Container,
  Card,
  Typography,
  Button,
  Menu,
  MenuItem,
  Grid2,
} from "@mui/material";
import TopHeader from "../components/topHeader";
import NavBar from "../components/navBar";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import axios from "axios";
import { FacebookShareButton, FacebookIcon } from "react-share"; // Import from react-share

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedBlog, setSelectedBlog] = useState(null);

  const renderBlogs = async () => {
    try {
      const response = await axios.get("http://localhost:4000");
      const data = response.data;
      setBlogs(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    renderBlogs();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  // Handle the dropdown menu opening
  const handleClick = (event, blog) => {
    setAnchorEl(event.currentTarget);
    setSelectedBlog(blog);
  };

  // Handle the dropdown menu closing
  const handleClose = () => {
    setAnchorEl(null);
    setSelectedBlog(null);
  };

  const copyLinkToClipboard = (url) => {
    navigator.clipboard.writeText(url).then(() => {
      alert("Link copied to clipboard");
    });
    handleClose();
  };

  // Handels the Learn more click
  const handleLearnMoreClick = () => {
    let url = `http://localhost:3000/blog/${selectedBlog?._id}`;
    console.log(url);
  };

  return (
    <div className="topHeader">
      <TopHeader />
      <NavBar />
      <br />
      <br />

      {/* Left Column (70% Width) */}
      <Grid2
        item
        xs={6} // Full width on extra-small screens
        sm={9} // 9/12 of the width on small screens (~75%)
        md={8} // 8/12 of the width on medium and larger screens (~70%)
      >
        <Grid2 container spacing={2} direction="column">
          {blogs && blogs.length > 0 ? (
            blogs.map((blog) => (
              <Grid2 item xs={12} key={blog._id} id="homePageGrid">
                <Card id="cardStyle">
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
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      {blog.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      onClick={(event) => handleClick(event, blog)}
                    >
                      Share
                    </Button>

                    <Button onClick={handleLearnMoreClick} size="small">
                      Learn More
                    </Button>
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
      </Grid2>

      <div id="rightColoumHomePage">
        {/* Right Column (30% Width) */}
        <Box sx={{}}>Right Column (Smaller)</Box>
      </div>

      {/* Dropdown Menu for Sharing Options */}
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem
          onClick={() =>
            copyLinkToClipboard(
              `http://localhost:3000/blog/${selectedBlog?._id}`
            )
          }
        >
          Copy Link
        </MenuItem>
        <MenuItem>
          <FacebookShareButton
            url={`http://localhost:3000/blog/${selectedBlog?._id}`}
            quote={selectedBlog?.nameOfDish}
            hashtag="#DeliciousRecipes"
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Home;
