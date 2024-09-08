import React from "react";
import { useState } from "react";
import { Box } from "@mui/material";
import TopHeader from "../components/topHeader";

const home = () => {
  return (
    <div className="topHeader">
      <TopHeader />
      <h1> Home Page! </h1>
    </div>
  );
};

export default home;
