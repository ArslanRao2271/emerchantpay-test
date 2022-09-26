// libs
import { Box, Typography } from "@mui/material";
import React, { useState } from "react";

// src
import { parseUserData } from "./utils";
import { AddUserForm, UserValues } from "@components/AddUserForm";
import { TableComponent } from "@components/TableComponent";
import { Alert, LibAlertProps } from "@components/Alert";
import { BasicModal } from "@components/Modal";

// styles
import styles from "./styles";

const alertInitialValues: LibAlertProps = {
  isOpen: false,
  severity: "success",
  message: "",
};

export const headerData = [
  {
    label: "Email",
    width: "40%",
  },
  {
    label: "First Name",
    width: "20%",
  },
  {
    label: "Last Name",
    width: "20%",
  },
  {
    label: "Action",
  },
];

function AddUser() {
  const [rowsData, setRowsData] = useState<UserValues[]>([]);
  const [alert, setAlert] = useState(alertInitialValues);
  const [modalContent, setModalContent] = useState({
    state: false,
    email: "",
    firstName: "",
    lastName: "",
  });

  const handleAddUser = (user: UserValues) => {
    if (rowsData.some(({ email }) => email === user.email)) {
      setAlert({
        isOpen: true,
        message: `${user.email} already exists.`,
        severity: "error",
      });

      return;
    }

    setRowsData((prevState) => [...prevState, user]);
    setAlert({
      isOpen: true,
      message: `${user.email} added successfully.`,
      severity: "success",
    });
  };

  const handleDelete = (val: string) => {
    setRowsData((prevState) => prevState.filter(({ email }) => email !== val));
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
      <Typography variant="h3">Add User</Typography>
      <AddUserForm getUserData={handleAddUser} />
      <TableComponent
        headerData={headerData}
        rowsData={parseUserData(
          rowsData,
          (email) => handleDelete(email),
          (val) => setModalContent({ state: true, ...val })
        )}
      />
      <Alert
        {...alert}
        onClose={() =>
          setAlert((prevState) => ({ ...prevState, isOpen: false }))
        }
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

export default AddUser;
