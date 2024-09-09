import React from "react";
import { Grid2, Button, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

const topHeader = () => {
  return (
    // (
    //   <Grid2 justifyContent="center" container spacing={2} columns={12}>
    //     <Grid2 item size={{ xs: 6, sm: 4, md: 6, lg: 12, xl: 6 }}>
    //       Mateo
    //     </Grid2>

    //     <Grid2 item size={{ xs: 6, sm: 4, md: 6, lg: 12, xl: 6 }}>
    //       Mcpherosn
    //     </Grid2>
    //   </Grid2>
    // ),

    <div className="topheader">
      <Grid2
        container
        spacing={3}
        alignItems="center"
        justifyContent="space-between"
      >
        <Grid2 item xs={12} sm={6} md={4} lg={3}>
          <div style={{ padding: "10px", color: "White" }}>
            Never miss a new recipe
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
              onClick={() => {
                console.log("View Blogs Button");
              }}
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
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 250,
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search  "
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
