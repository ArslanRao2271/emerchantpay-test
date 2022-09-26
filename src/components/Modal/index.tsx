// libs
import React from "react";
import { Box, Modal } from "@mui/material";

// src

// styles
import styles from "./styles";

export interface LibModalProps {
  isOpen: boolean;
  onClose?: () => void;
  content: JSX.Element;
}

function LibModal({ isOpen, onClose, content }: LibModalProps) {
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={styles.modalBox}>{content}</Box>
    </Modal>
  );
}

export const BasicModal = React.memo(LibModal);
