// libs
import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

// src

// styles
import styles from "./styles";

function LibFooter() {
  return (
    <AppBar sx={styles.footerBar}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={styles.labelStyle}>
          E-MerchantPay
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export const Footer = React.memo(LibFooter);
