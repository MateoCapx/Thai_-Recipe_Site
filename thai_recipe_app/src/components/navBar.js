import React from "react";
import { Grid2, Button, Link, Container } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';

const navBar = () => {
  return (

    <Container id="navBarContanier">
      <Grid2 container spacing={2}>
         
        <Grid2 size={{ xs: 6, md: 8 }}>
          Logo
           <MenuIcon id="menuIcon"/>
        </Grid2>
        <Grid2 size={{ xs: 6, md: 4, }}>
          <div id="navLinks">
            <Link href="#" underline="none" hover="" sx={{ mx: 2 }}>
              {'About'}
            </Link>

            <Link href="#" underline="none" sx={{ mx: 2 }}>
              {'Recipes'}
            </Link>

            <Link href="#" underline="none" sx={{ mx: 2 }}>
              {' Shop'}
            </Link>

            <Link href="#" underline="none" sx={{ mx: 2 }}>
              {'Contact'}
            </Link> 
            <SearchIcon id="searchIconBtn" onClick={()=>{
              console.log("Search Icon clicked")
            }} />
          </div>

        </Grid2>
      </Grid2>


    </Container>

    
  )
};

export default navBar;
