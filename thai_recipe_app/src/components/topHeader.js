import React from "react";
import { Grid2, Button, Typography, Modal, Box, Input } from "@mui/material";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

// Style for the modal
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  paddingLeft: 25,
};

const TopHeader = () => {
  const [open, setOpen] = useState(false);
  const [textArea, setTextArea] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const submitEmailAddress = () => {
    console.log("Eamil Subscribed - Data:", textArea);
  };

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
            <div>
              <Button
                style={{
                  marginLeft: 20,
                  marginTop: 15,
                  borderRadius: 20,

                  color: "white",
                  borderColor: "white",
                }}
                variant="outlined"
                onClick={handleOpen}
              >
                Subscribe
              </Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    Enter Email Address
                  </Typography>
                  <br></br>
                  <Input
                    type="email"
                    id="standard-basic"
                    label="Enter Email"
                    variant="standard"
                    value={textArea}
                    onChange={(e) => setTextArea(e.target.value)}
                  />

                  <Button
                    id="submitEmailAddressBtn"
                    onClick={submitEmailAddress}
                  >
                    Subscribe
                  </Button>
                </Box>
              </Modal>
            </div>
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
              component={Link}
              to="/ViewBlogs"
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

export default TopHeader;

// justifyContent="center": Centers grid items horizontally.
// alignItems="center": Centers grid items vertically.
