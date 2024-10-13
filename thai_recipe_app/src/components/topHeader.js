import React from "react";
import { Grid2, Button, Typography, Link } from "@mui/material";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import ViewBlogs from "../pages/viewBlogs";

const topHeader = () => {
  return (
    <div className="topheader">
      <Grid2
        container
        spacing={3}
        alignItems="center"
        justifyContent="space-between"
      >
        {/* _____________________Subscribe Btn Section________________________________ */}

        <Grid2 id="leftSectionOfTopNavBar" item xs={12} sm={6} md={4} lg={3}>
          <div
            style={{
              padding: "5px",
              color: "White",
              display: "flex",
              marginLeft: 10,
            }}
          >
            <p> Never miss a new recipe</p>
            <Button
              onClick={() => {
                console.log("Subscribe Button");
              }}
              style={{
                marginLeft: 20,
                borderRadius: 20,
                backgroundColor: "rgb(233,109,32)",
                color: "white",
                borderColor: "white",
              }}
              variant="outlined"
            >
              Subscribe
            </Button>
          </div>
        </Grid2>

        {/* _____________________View Blog Btn, Video Btn, Search Bar___________________________________ */}
        <Grid2 item xs={12} sm={6} md={4} lg={3} sx={{ order: 1 }}>
          <div
            style={{
              padding: "5px",
              display: "flex", // Use flexbox
              alignItems: "center", // Align items vertically
            }}
          >
            <Button
              id="viewBlogs"
              component={Link}
              to="/viewBlogs"
              style={{
                marginLeft: 20,
                borderRadius: 20,
                backgroundColor: "rgb(233,109,32) ",
                color: "white",
                borderColor: "white",
              }}
              variant="outlined"
            >
              View Blogs
            </Button>
            <Button
              id="videoBtn"
              onClick={() => {
                console.log("Video Button");
              }}
              style={{
                marginLeft: 20,
                marginRight: 20,
                borderRadius: 20,
                backgroundColor: "rgb(233,109,32) ",
                color: "white",
                borderColor: "white",
              }}
              variant="outlined"
            >
              Videos
            </Button>
            {/* ________________________________________________________ */}

            {/* Search Bar component */}

            <Paper
              component="form"
              id="searchBar"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 250,
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Recipe..."
                inputProps={{ "aria-label": "search" }}
              />
              <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

              {/* Search Icon Button */}
              <IconButton
                type="button"
                sx={{ p: "10px", color: "rgb(233,109,32)" }}
                aria-label="search"
              >
                <SearchIcon />
              </IconButton>
            </Paper>
          </div>
        </Grid2>
      </Grid2>
    </div>
  );
};

export default topHeader;

// justifyContent="center": Centers grid items horizontally.
// alignItems="center": Centers grid items vertically.
