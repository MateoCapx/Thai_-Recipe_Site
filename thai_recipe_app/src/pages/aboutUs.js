import React from "react";
import TopHeader from "../components/topHeader";
import NavBar from "../components/navBar";
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

function aboutUs() {
  return (
    <div>
      <TopHeader />
      <NavBar />
      <h1> About Us </h1>
    </div>
  );
}

export default aboutUs;
