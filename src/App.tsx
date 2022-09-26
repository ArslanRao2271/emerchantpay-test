// libs
import React from "react";
import { Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";

// src
import { Header } from "@components/Header";
import { Footer } from "@components/Footer";
import AddUser from "@pages/AddUser";
import { PageNotFound } from "@components/404Page";
import Users from "@pages/Users";

// styles
import styles from "./appStyles";

function App() {
  return (
    <Box sx={styles.mainContainer}>
      <Header />
      <Routes>
        <Route path="/" element={<AddUser />} />
        <Route path="/users" element={<Users />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
