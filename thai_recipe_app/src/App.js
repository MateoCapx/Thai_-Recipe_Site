import "./App.css";
import React from "react";
import "./App.css";
import Home from "./pages/home";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";


function App() {
  return <div className="App">
    {/* <Routes>
      <Route path="/" elemnt={<Home />} />
    </Routes> */}

    <Home />

  </div>;
}

export default App;
