// libs
import React from "react";

// src
import { TableComponent } from "@components/TableComponent";

// styles

const headerData = [
  {
    label: "Property Documents",
    width: "40%",
  },
  {
    label: "Uploaded on",
    width: "20%",
  },
  {
    label: "Status",
    width: "20%",
  },
  {
    label: "Action",
  },
];

function Users() {
  return (
    <>
      <TableComponent headerData={headerData} rowsData={[]} />
    </>
  );
}

export default Users;
