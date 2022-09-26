// libs
import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

// src

// styles
import styles from "./styles";

function LibPageNotFound() {
  return (
    <Box sx={styles.pageNotFoundContainer}>
      <Typography variant="h2">Page not found!</Typography>
      <Link to="/">Home</Link>
    </Box>
  );
}

export const PageNotFound = React.memo(LibPageNotFound);
