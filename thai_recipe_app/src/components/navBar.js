import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Button,
  Typography,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 930);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth < 930);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = (
    <>
      <MenuItem>Home</MenuItem>
      <MenuItem>About</MenuItem>
      <MenuItem onClick={handleMenuClose}>Contact</MenuItem>
    </>
  );

  return (
    <AppBar id="Nav-Bar-Section" position="sticky">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Logo
        </Typography>
        {isMobile ? (
          <>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuOpen}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              {menuItems}
            </Menu>
          </>
        ) : (
          <>
            <Button component={Link} to="/" color="inherit">
              Home
            </Button>

            <Button component={Link} to="/aboutUs" color="inherit">
              About
            </Button>
            <Button component={Link} to="/contact" color="inherit">
              Contact
            </Button>
          </>
        )}
      </Toolbar>
      <Container sx={{ textAlign: "center" }}>
        <Button
          component={Link}
          to="/UploadBlog"
          variant="contained"
          color="primary"
        >
          {" "}
          Upload Blogs
        </Button>
      </Container>
    </AppBar>
  );
};

export default NavBar;
