// libs
import React from "react";
import { Box } from "@mui/material";

// src
import { Header } from "@components/Header";
import { Footer } from "@components/Footer";
import AddUser from "@pages/AddUser";

// styles
import styles from "./appStyles";

function App() {
  return (
    <Box sx={styles.mainContainer}>
      <Header />
      <AddUser />
      <Footer />
    </Box>
  );
}

export default App;
