// libs
import { Box } from "@mui/material";
import React, { useState } from "react";

// src
import { parseUserData } from "./utils";
import { AddUserForm, UserValues } from "@components/AddUserForm";
import { TableComponent } from "@components/TableComponent";
import { Alert, LibAlertProps } from "@components/Alert";

// styles
import styles from "./styles";

const alertInitialValues: LibAlertProps = {
  isOpen: false,
  severity: "success",
  message: "",
};

const headerData = [
  {
    label: "Email",
  },
  {
    label: "First Name",
  },
  {
    label: "Last Name",
  },
];

function AddUser() {
  const [rowsData, setRowsData] = useState<UserValues[]>([]);
  const [alert, setAlert] = useState(alertInitialValues);

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

  return (
    <Box sx={styles.addUserPageContainer} width="100%">
      <AddUserForm getUserData={handleAddUser} />
      <TableComponent
        headerData={headerData}
        rowsData={parseUserData(rowsData)}
      />
      <Alert
        {...alert}
        onClose={() =>
          setAlert((prevState) => ({ ...prevState, isOpen: false }))
        }
      />
    </Box>
  );
}

export default AddUser;
