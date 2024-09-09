import React from "react";
import { Box, Grid2, Button } from "@mui/material";

const topHeader = () => {
  return (
    // (
    //   <Grid2 justifyContent="center" container spacing={2} columns={12}>
    //     <Grid2 item size={{ xs: 6, sm: 4, md: 6, lg: 12, xl: 6 }}>
    //       Mateo
    //     </Grid2>

    //     <Grid2 item size={{ xs: 6, sm: 4, md: 6, lg: 12, xl: 6 }}>
    //       Mcpherosn
    //     </Grid2>
    //   </Grid2>
    // ),

    <div className="topheader">
      <Grid2
        container
        spacing={3}
        alignItems="center"
        justifyContent="space-between"
      >
        <Grid2 item xs={12} sm={6} md={4} lg={3}>
          <div style={{ padding: "10px", color: "White" }}>
            Never miss a new recipe
            <Button
              onClick={() => {
                console.log("Button WOrks");
              }}
              style={{
                marginLeft: 20,
                borderRadius: 20,
                backgroundColor: "rgb(233,109,32) ",
                color: "white",
              }}
              variant="outlined"
            >
              Subscribe
            </Button>
          </div>
        </Grid2>
        <Grid2 item xs={12} sm={6} md={4} lg={3}>
          <div style={{ backgroundColor: "lightcoral", padding: "10px" }}>
            Item 2
          </div>
        </Grid2>
        <Grid2 item xs={12} sm={6} md={4} lg={3} sx={{ order: 1 }}>
          <div style={{ backgroundColor: "lightgreen", padding: "10px" }}>
            Item 3
          </div>
        </Grid2>
      </Grid2>
    </div>
  );
};

export default topHeader;

// justifyContent="center": Centers grid items horizontally.
// alignItems="center": Centers grid items vertically.
