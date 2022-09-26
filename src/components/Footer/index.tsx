// libs
import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";

// src

// styles
import styles from "./styles";

function LibFooter() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={styles.appBar} position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={styles.labelStyle}>
            E-MerchantPay
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export const Footer = React.memo(LibFooter);
