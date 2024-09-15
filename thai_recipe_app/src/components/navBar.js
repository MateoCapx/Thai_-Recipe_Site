import React, { useState, useEffect } from "react";
import UploadBlog from "../pages/uploadBlog";
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Button,
  Typography,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 930);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth < 930);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = (
    <>
      <MenuItem>Home</MenuItem>
      <MenuItem>About</MenuItem>
      <MenuItem onClick={handleMenuClose}>Contact</MenuItem>
    </>
  );

  return (
    <AppBar id="Nav-Bar-Section" position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Logo
        </Typography>
        {isMobile ? (
          <>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuOpen}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              {menuItems}
            </Menu>
          </>
        ) : (
          <>
            <Button color="inherit">Home</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">Contact</Button>
          </>
        )}
      </Toolbar>
      <Container sx={{ textAlign: "center" }}>
        <Button
          component={Link}
          to="/UploadBlog"
          variant="contained"
          color="primary"
        >
          {" "}
          Upload Blogs
        </Button>
      </Container>
    </AppBar>
  );
};

export default NavBar;

// import * as React from "react";
// import { Grid2, Button, Link, Container } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import MenuIcon from "@mui/icons-material/Menu";
// import Box from "@mui/material/Box";
// import Drawer from "@mui/material/Drawer";
// import List from "@mui/material/List";
// import Divider from "@mui/material/Divider";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import MailIcon from "@mui/icons-material/Mail";

// const NavBar = () => {
//   const [open, setOpen] = React.useState(false);

//   const toggleDrawer = (newOpen) => () => {
//     setOpen(newOpen);
//   };

//   const DrawerList = (
//     <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
//       <List>
//         {["About", "Recipes", "Blog", "Videos", "Shop", "Contact"].map(
//           (text, index) => (
//             <ListItem key={text} disablePadding>
//               <ListItemButton>
//                 <ListItemIcon>
//                   {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                 </ListItemIcon>
//                 <ListItemText primary={text} />
//               </ListItemButton>
//             </ListItem>
//           )
//         )}
//       </List>
//       <Divider />
//       <List>
//         {["Sign Out"].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   return (
//     <Container id="navBarContanier">
//       <Grid2 container spacing={2}>
//         <div>
//           <Button onClick={toggleDrawer(true)}>Open drawer</Button>
//           <Drawer open={open} onClose={toggleDrawer(false)}>
//             {DrawerList}
//           </Drawer>
//         </div>

//         <Grid2 size={{ xs: 6, md: 8 }}>
//           Logo
//           <MenuIcon id="menuIcon" />
//         </Grid2>
//         <Grid2 size={{ xs: 6, md: 4 }}>
//           <div id="navLinks">
//             <Link href="#" underline="none" hover="" sx={{ mx: 2 }}>
//               {"About"}
//             </Link>

//             <Link href="#" underline="none" sx={{ mx: 2 }}>
//               {"Recipes"}
//             </Link>

//             <Link href="#" underline="none" sx={{ mx: 2 }}>
//               {" Shop"}
//             </Link>

//             <Link href="#" underline="none" sx={{ mx: 2 }}>
//               {"Contact"}
//             </Link>
//             <SearchIcon
//               id="searchIconBtn"
//               onClick={() => {
//                 console.log("Search Icon clicked");
//               }}
//             />
//           </div>
//         </Grid2>
//       </Grid2>
//     </Container>
//   );
// };

// export default NavBar;
