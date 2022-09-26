import React from "react";
import { lightTheme } from "@theme/index";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import styles from "./styles";

const {
  back,
  primary,
  secondary,
  tertiary,
  primaryInverse,
  secondaryInverse,
  tertiaryInverse,
  iconTextInverse,
} = styles;

const { palette } = lightTheme;

export const iconColor = (color?: string) => {
  if (color && palette[color]) {
    return palette[color].main;
  }

  return palette.primary.main;
};

export const getBtnStyles = (
  variant: string,
  color: string,
  theme?: string,
  startIcon?: React.ReactNode
) => {
  if (variant === "back") {
    return back;
  }

  if (color === "secondary" || theme === "dark") {
    if (startIcon !== undefined) {
      return iconTextInverse;
    }

    if (variant === "primary") {
      return primaryInverse;
    }

    if (variant === "secondary") {
      return secondaryInverse;
    }

    if (variant === "tertiary") {
      return tertiaryInverse;
    }

    return {};
  }

  if (startIcon !== undefined) {
    return secondary;
  }

  if (variant === "primary" && color === "primary") {
    return primary;
  }

  if (variant === "secondary" && color === "primary") {
    return secondary;
  }

  if (variant === "tertiary" && color === "primary") {
    return tertiary;
  }

  return {};
};

export const getIcon = (
  variant: string,
  isHover: boolean,
  color: string,
  StartIcon: React.ReactNode
) => {
  if (StartIcon !== undefined) {
    return StartIcon;
  }

  if (variant === "tertiary") {
    if (isHover) {
      return StartIcon;
    }

    return StartIcon;
  }

  if (variant === "back") {
    return StartIcon;
  }

  return undefined;
};
