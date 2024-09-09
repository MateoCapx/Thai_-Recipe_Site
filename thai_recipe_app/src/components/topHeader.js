import React from "react";
import { Grid2, Button, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";

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
                console.log("Button WOrks");
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
              Subscribe
            </Button>
          </div>
        </Grid2>
        <Grid2 item xs={12} sm={6} md={4} lg={3}>
          <div style={{ backgroundColor: "lightcoral", padding: "10px" }}>
            Item 2
          </div>
        </Grid2>

        {/* ________________________________________________________ */}
        <Grid2 item xs={12} sm={6} md={4} lg={3} sx={{ order: 1 }}>
          <div style={{ padding: "10px" }}>
            <Button
              onClick={() => {
                console.log("Button WOrks");
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
                console.log("Button WOrks");
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
              Videos
            </Button>
            {/* ________________________________________________________ */}

            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 400,
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search  "
                inputProps={{ "aria-label": "search" }}
              />
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
              <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
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
