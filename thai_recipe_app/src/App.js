import "./App.css";
import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";


function App() {
  return <div className="App">
    <Routes>
      <route path="/" elemnt={<Home />} />
    </Routes>

  </div>;
}

export default App;
