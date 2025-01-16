import React from "react";
import { Box, Stack } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const footer = () => {
  return (
    <div>
      <Stack
        direction={{ sm: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        id="footer-Section"
        sx={{ justifyContent: "center" }}
      >
        <item id="social-links ">
          <h1> Connect </h1>
          <FacebookIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </item>
        <item>
          <h1> Information </h1>
          <ul>
            <li>About </li>
            <li>Contact </li>
            <li> Prviacy Policy </li>
          </ul>
        </item>
        <item>
          <h1>Explore</h1>
          <ul>
            <li>Korean Pantry Essentials</li>
            <li>Korean BBQ at Home </li>
            <li>Shop </li>
          </ul>
        </item>
      </Stack>

      <div style={{ textAlign: "center" }}>
        <h3> © 2024 - 2025 My Thai Kitchen, All Rights Reserved</h3>
      </div>
    </div>
  );
};

export default footer;
