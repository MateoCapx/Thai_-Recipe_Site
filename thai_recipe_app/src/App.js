import "./App.css";
import React from "react";
import "./App.css";
import Home from "./pages/home";
import UploadBlog from "./pages/uploadBlog";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Box } from "@mui/material";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/UploadBlog" element={<UploadBlog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
