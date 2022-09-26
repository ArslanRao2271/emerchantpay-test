// libs
import { ButtonProps, Button as MuiButton } from "@mui/material";
import merge from "lodash/merge";
import React, { useState } from "react";

// src
import { getBtnStyles, getIcon } from "./utility";

// styles
import styles from "./styles";

export interface LibButtonProps extends ButtonProps {
  theme?: "dark" | "light";
  variant?:
    | "text"
    | "outlined"
    | "contained"
    | "primary"
    | "secondary"
    | "tertiary"
    | "back";
}

function LibButton({
  theme = "light",
  color = "primary",
  ...props
}: LibButtonProps) {
  const [isHover, setIsHover] = useState(false);

  return (
    <MuiButton
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      {...props}
      color={color}
      startIcon={getIcon(props.variant, isHover, color, props.startIcon)}
      sx={merge(
        { ...styles.common },
        { ...styles[props.size || "medium"] },
        { ...getBtnStyles(props.variant, color, theme, props.startIcon) },
        { ...props.sx }
      )}
    >
      {props.children || props.variant}
    </MuiButton>
  );
}

export const Button = React.memo(LibButton);
