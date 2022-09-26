// libs
import * as React from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Button } from "@components/Button";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

// src

// styles
import styles from "./styles";

export interface ActionButtons {
  buttonLabel: string;
}

export interface RowData {
  label: string;
  type?: string;
  actionButtons?: ActionButtons[];
  width?: string;
  date?: string;
}

export interface HeaderData {
  label: string;
  width?: string;
}

export interface AllRows {
  id: string;
  rowData: RowData[];
}

export interface LibTableComponentProps {
  rowsData: AllRows[];
  headerData?: HeaderData[];
  align?: "center" | "inherit" | "justify" | "left" | "right";
}

function LibTableComponent({
  rowsData = [],
  headerData = [],
  align = "left",
}: LibTableComponentProps) {
  const getComponent = ({
    label,
    actionButtons = [],
    width,
    type,
    date,
    ...props
  }: RowData) => {
    switch (type) {
      case "action-buttons":
        return (
          <TableCell width={width} sx={styles.buttonsContainer} align={align}>
            {actionButtons.map(({ buttonLabel, ...rest }) => (
              <Button key={buttonLabel} {...rest}>
                {buttonLabel}
              </Button>
            ))}
          </TableCell>
        );
      case "view-document":
        return (
          <TableCell width={width} align={align}>
            <Typography {...props} sx={styles.viewDocumentCTA}>
              {label.split(" ")[0]}{" "}
              <span>{label.split(" ")[label.split(" ").length - 1]}</span>
            </Typography>
          </TableCell>
        );
      case "past-tenancies-view":
        return (
          <TableCell width={width} align={align}>
            <Box sx={styles.pastTenanciesDocumentLabelContainer}>
              <DescriptionOutlinedIcon sx={styles.documentIconStyle} />
              <Box>
                <Typography sx={styles.docTitleStyle}>{label}</Typography>
                {date && (
                  <Typography sx={styles.docSubTitleStyle}>{date}</Typography>
                )}
              </Box>
            </Box>
          </TableCell>
        );
      default:
        return (
          <TableCell width={width} sx={styles.rowTextStyle}>
            {label}
          </TableCell>
        );
    }
  };

  return (
    <Box width="90%">
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {headerData.map(({ label, width }) => (
                <TableCell
                  key={label}
                  sx={styles.headerCellText}
                  align={align}
                  width={width}
                >
                  {label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rowsData.map(({ id, rowData }) => (
              <TableRow
                key={id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {rowData.map((row) => getComponent(row))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export const TableComponent = React.memo(LibTableComponent);
