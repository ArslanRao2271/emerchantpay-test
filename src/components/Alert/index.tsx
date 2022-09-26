// libs
import React from "react";
import { Snackbar } from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

// src

// styles

export interface LibAlertProps {
  isOpen: boolean;
  onClose?: () => void;
  severity: "error" | "info" | "success" | "warning";
  message: string;
}

const AlertComponent = React.forwardRef<HTMLDivElement, AlertProps>(
  function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  }
);

function LibAlert({ isOpen, onClose, severity, message }: LibAlertProps) {
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    onClose();
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={isOpen}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <AlertComponent
        onClose={handleClose}
        severity={severity}
        sx={{ width: "100%" }}
      >
        {message}
      </AlertComponent>
    </Snackbar>
  );
}

export const Alert = React.memo(LibAlert);
