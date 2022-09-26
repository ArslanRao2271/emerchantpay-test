// libs
import { Box, Typography } from "@mui/material";
import React, { useState } from "react";

// src
import { TableComponent } from "@components/TableComponent";
import { UserValues } from "@components/AddUserForm";
import { parseUserData } from "@pages/AddUser/utils";
import { headerData } from "@pages/AddUser";
import { users } from "./utils";
import { Textfield } from "@components/TextFields";
import { BasicModal } from "@components/Modal";

// styles
import styles from "./styles";

function Users() {
  const [rowsData, setRowsData] = useState<UserValues[]>(users);
  const [searchedResults, setSearchedResults] = useState<UserValues[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [modalContent, setModalContent] = useState({
    state: false,
    email: "",
    firstName: "",
    lastName: "",
  });

  const handleDelete = (val: string) => {
    setRowsData((prevState) => prevState.filter(({ email }) => email !== val));
  };

  const handleSearch = (val: string) => {
    setSearchedResults(
      rowsData.filter(({ firstName }) =>
        firstName.toLocaleLowerCase().includes(val.toLocaleLowerCase())
      )
    );
    setSearchValue(val);
  };

  const modalContentData = (
    <>
      <Typography>
        Name: {modalContent.firstName} {modalContent.lastName}
      </Typography>
      <Typography>Email: {modalContent.email}</Typography>
    </>
  );

  return (
    <Box sx={styles.addUserPageContainer} width="100%">
      <Typography variant="h3">Users</Typography>
      <Textfield
        type="text"
        name="lastName"
        id="lastName"
        placeholder="Search By First Name"
        onChange={(e) => handleSearch(e.target.value)}
        autoComplete="on"
        sx={styles.formTextField}
        value={searchValue}
      />
      <TableComponent
        headerData={headerData}
        rowsData={parseUserData(
          searchValue !== "" ? searchedResults : rowsData,
          (email) => handleDelete(email),
          (val) => setModalContent({ state: true, ...val })
        )}
      />
      <BasicModal
        content={modalContentData}
        isOpen={modalContent.state}
        onClose={() =>
          setModalContent((prevState) => ({ ...prevState, state: false }))
        }
      />
    </Box>
  );
}

export default Users;
