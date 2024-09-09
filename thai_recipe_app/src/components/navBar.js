import React from "react";
import { Grid2, Button, Link, Container } from "@mui/material";

const navBar = () => {
  return (

    <Container id="navBarContanier">
      <Grid2 container spacing={2}>
        <Grid2 size={{ xs: 6, md: 8 }}>
          Logo
        </Grid2>
        <Grid2 size={{ xs: 6, md: 4,  }}>
          <div id="navLinks">
            <Link href="#" underline="none">
              {'About'}
            </Link>

            <Link href="#" underline="none">
              {'Recipes'}
            </Link>

            <Link href="#" underline="none">
              {' Shop'}
            </Link>

            <Link href="#" underline="none">
              {'Contact'}
            </Link>

          </div>
        </Grid2>
      </Grid2>
    </Container>
  )
};

export default navBar;
