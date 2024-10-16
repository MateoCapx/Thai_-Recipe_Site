import { useState, useEffect } from "react";
import {
  Box,
  Grid2,
  Card,
  Typography,
  Menu,
  MenuItem,
  Button,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";
import TopHeader from "../components/topHeader";
import NavBar from "../components/navBar";
import axios from "axios";
import ShareIcon from "@mui/icons-material/Share";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedBlogUrl, setSelectedBlogUrl] = useState("");

  const renderBlogs = async () => {
    try {
      const response = await axios.get("http://localhost:4000");
      const data = response.data;
      setBlogs(data);
      setLoading(false);
    } catch (err) {
      console.log("Error fetching data:", err);
      setError(err.message);
      setLoading(false);
    }
  };

  // Fetch data on mount
  useEffect(() => {
    renderBlogs();
  }, []);

  // Handle loading and error states
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  // Function to handle share button click and open the menu
  const handleShareClick = (event, url) => {
    setAnchorEl(event.currentTarget);
    setSelectedBlogUrl(url);
  };

  // Function to handle closing the menu
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Function to copy the link to clipboard
  const copyLinkToClipboard = (url) => {
    navigator.clipboard.writeText(url).then(() => {
      alert("Link copied to clipboard");
      handleClose();
    });
  };

  // Function to share on Facebook
  const shareOnFacebook = (url) => {
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      url
    )}`;
    window.open(facebookShareUrl, "_blank");
    handleClose();
  };

  return (
    <div className="topHeader">
      <TopHeader />
      <NavBar />
      <br />
      <br />
      <Grid2
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 6, sm: 6, md: 6 }}
        id="homePageGrid"
      >
        {blogs && blogs.length > 0 ? (
          blogs.map((blog) => (
            <Grid2 item size={{ xs: 6, sm: 4, md: 4 }} key={blog._id}>
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
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {blog.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    onClick={(event) => handleShareClick(event, blog.url)}
                    size="small"
                    startIcon={<ShareIcon />}
                  >
                    Share
                  </Button>
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

      {/* Share options menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{ "aria-labelledby": "basic-button" }}
      >
        <MenuItem onClick={() => shareOnFacebook(selectedBlogUrl)}>
          Share on Facebook
        </MenuItem>
        <MenuItem onClick={() => copyLinkToClipboard(selectedBlogUrl)}>
          Copy Link
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Home;
