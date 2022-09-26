// libs
import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";

// src
import { MenuList } from "@components/Menu";

// styles
import styles from "./styles";

function LibHeader() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={styles.appBar} position="static">
        <Toolbar>
          <Typography variant="h6" sx={styles.labelStyle}>
            E-MerchantPay
          </Typography>
          <MenuList />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export const Header = React.memo(LibHeader);
