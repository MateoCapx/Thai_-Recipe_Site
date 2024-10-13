import "./App.css";
import React from "react";
import "./App.css";
import Home from "./pages/home";
import UploadBlog from "./pages/uploadBlog";
import AboutUs from "./pages/aboutUs";
import Contact from "./pages/contact";
import ViewBlogs from "./pages/viewBlogs";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Box } from "@mui/material";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/UploadBlog" element={<UploadBlog />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/ViewBlogs" element={<ViewBlogs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
