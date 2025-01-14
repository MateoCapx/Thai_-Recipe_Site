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
      <Grid2 container spacing={2} direction="column" id="main-content-section">
        {/* Main Section / Meal of the week */}
        <div id="meal-of-week-section">
          <h1> Green Curry (Gaeng Keow Wan) </h1>
          <p>
            Enjoy the tender, juicy, and lightly smoky flavors of tteokgalbi—a
            beloved Korean dish that brings a festive touch to any meal! What is
            Tteokgalbi Tteokgalbi (떡갈비), also known as Korean beef patties,
            is a savory, tender, and lightly sweet dish that embodies the
            essence of Korean cuisine. Once reserved for royalty, it has become
            …
          </p>
          <button> Get The Recipe </button>
        </div>

        <img
          src="./images/greenCurry.png"
          alt=""
          style={{ width: "100%", textAlign: "center" }}
        />

        <h1> Most View Recipes </h1>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          sx={{ textAlign: "center" }}
        >
          <item>
            <img
              src="./images/greenCurry.png"
              alt=""
              style={{ width: "100%", textAlign: "center" }}
            />
            <h3> Food</h3>
            <p>
              This roasted seaweed is the perfect harmony of irresistible crunch
              and savory goodness. It offers an effortless way to elevate your
              meals or satisfy your snack cravings. These roasted seaweed …
            </p>
            <a href="">Get Recipe </a>
          </item>

          <item>
            <img
              src="./images/greenCurry.png"
              alt=""
              style={{ width: "100%", textAlign: "center" }}
            />
            <h3> Food</h3>
            <p>
              This roasted seaweed is the perfect harmony of irresistible crunch
              and savory goodness. It offers an effortless way to elevate your
              meals or satisfy your snack cravings. These roasted seaweed …
            </p>
            <a href="">Get Recipe </a>
          </item>

          <item>
            <img
              src="./images/greenCurry.png"
              alt=""
              style={{ width: "100%", textAlign: "center" }}
            />
            <h3> Food</h3>
            <p>
              This roasted seaweed is the perfect harmony of irresistible crunch
              and savory goodness. It offers an effortless way to elevate your
              meals or satisfy your snack cravings. These roasted seaweed …
            </p>
            <a href="">Get Recipe</a>
          </item>
        </Stack>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          sx={{ textAlign: "center" }}
        >
          <item>
            <img
              src="./images/greenCurry.png"
              alt=""
              style={{ width: "100%", textAlign: "center" }}
            />
            <h3> Food</h3>
            <p>
              This roasted seaweed is the perfect harmony of irresistible crunch
              and savory goodness. It offers an effortless way to elevate your
              meals or satisfy your snack cravings. These roasted seaweed …
            </p>
            <a href="">Get Recipe </a>
          </item>

          <item>
            <img
              src="./images/greenCurry.png"
              alt=""
              style={{ width: "100%", textAlign: "center" }}
            />
            <h3> Food</h3>
            <p>
              This roasted seaweed is the perfect harmony of irresistible crunch
              and savory goodness. It offers an effortless way to elevate your
              meals or satisfy your snack cravings. These roasted seaweed …
            </p>
            <a href="">Get Recipe </a>
          </item>

          <item>
            <img
              src="./images/greenCurry.png"
              alt=""
              style={{ width: "100%", textAlign: "center" }}
            />
            <h3> Food</h3>
            <p>
              This roasted seaweed is the perfect harmony of irresistible crunch
              and savory goodness. It offers an effortless way to elevate your
              meals or satisfy your snack cravings. These roasted seaweed …
            </p>
            <a href="">Get Recipe</a>
          </item>
        </Stack>

        <h1>Most Popular Recipes</h1>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          sx={{ textAlign: "center" }}
        >
          <item>
            <img
              src="./images/greenCurry.png"
              alt=""
              style={{ width: "100%", textAlign: "center" }}
            />
            <h3> Food</h3>
            <p>
              This roasted seaweed is the perfect harmony of irresistible crunch
              and savory goodness. It offers an effortless way to elevate your
              meals or satisfy your snack cravings. These roasted seaweed …
            </p>
            <a href="">Get Recipe </a>
          </item>

          <item>
            <img
              src="./images/greenCurry.png"
              alt=""
              style={{ width: "100%", textAlign: "center" }}
            />
            <h3> Food</h3>
            <p>
              This roasted seaweed is the perfect harmony of irresistible crunch
              and savory goodness. It offers an effortless way to elevate your
              meals or satisfy your snack cravings. These roasted seaweed …
            </p>
            <a href="">Get Recipe </a>
          </item>

          <item>
            <img
              src="./images/greenCurry.png"
              alt=""
              style={{ width: "100%", textAlign: "center" }}
            />
            <h3> Food</h3>
            <p>
              This roasted seaweed is the perfect harmony of irresistible crunch
              and savory goodness. It offers an effortless way to elevate your
              meals or satisfy your snack cravings. These roasted seaweed …
            </p>
            <a href="">Get Recipe</a>
          </item>
        </Stack>

        <a href="" style={{ textAlign: "center", paddingTop: 20 }}>
          View More Gret Recipes
        </a>
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
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
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

      <div id="rightColoumHomePage">
        {/* Right Column (30% Width) */}
        <Box sx={{}}>
          <img src="./images/IMG_5275.jpg" alt="" id="authorImage" />
          {/* THIS IS
          HOW YOU IMPORT AN INTO THE WBEPAGE */}
          <h2> Authors Name</h2>
          <p>
            My Korean Kitchen is a food blog that talks all about my love and
            passion for Korean food and Korean fusion food. It includes step by
            step pictorial instructions, cultural discussions, and product
            reviews.
          </p>
          <button> Read More</button>
          <br></br>
          <h3> Get My Cookbook</h3>
          <hr></hr>
          <img
            src="./images/cookbookPlaceholder.png"
            alt=""
            style={{ width: "80%", textAlign: "center", cursor: "pointer" }}
          />
        </Box>
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
