import { SxProps } from "@mui/material";
import { lightTheme } from "@theme/index";

const { palette } = lightTheme;
const styles: Record<string, SxProps> = {
  common: {
    boxShadow: "none",
    textTransform: "capitalize",
    borderRadius: "0.25rem",
    letterSpacing: "0",
    ":disabled": {
      color: palette.grey["300"],
      svg: {
        fill: palette.grey["300"],
      },
    },
  },
  small: {
    height: "2rem",
    paddingY: "0.75rem",
    fontSize: "0.75rem",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "0.75rem",
    svg: {
      width: "0.75rem",
    },
  },
  medium: {
    height: "2.5rem",
    paddingX: "1.125rem",
    paddingY: "0.625rem",
    fontSize: "1rem",
    fontStyle: "normal",
    fontWeight: "800",
    lineHeight: "1.25rem",
    svg: {
      width: "1rem",
    },
  },
  large: {
    height: "3rem",
    paddingY: "0.875rem",
    paddingX: "2rem",
    fontSize: "1rem",
    fontStyle: "normal",
    fontWeight: "800",
    lineHeight: "1.25rem",
    svg: {
      width: "1rem",
    },
  },
  back: {
    border: "none",
    color: palette.grey["400"],
    svg: {
      fill: palette.grey["400"],
    },
    ":hover": {
      boxShadow: "none",
    },
  },
  primary: {
    backgroundColor: palette.secondary.main,
    color: palette.grey["500"],
    ":hover": {
      backgroundColor: {
        xs: palette.secondary.main,
        md: palette.secondary["300"],
      },
      boxShadow: "none",
      color: palette.grey["500"],
    },
    ":disabled": {
      backgroundColor: palette.grey["100"],
    },
  },
  secondary: {
    border: `0.0625rem solid ${palette.primary["200"]}`,
    backgroundColor: palette.primary["100"],
    color: palette.primary.main,
    boxShadow: "none",
    svg: {
      transition: "0.1s",
      fill: palette.primary.main,
      width: "1rem",
    },
    ":disabled": {
      backgroundColor: palette.grey["100"],
      border: "none",
    },
    ":hover": {
      backgroundColor: palette.primary.main,
      color: palette.grey["50"],
      boxShadow: "none",
      svg: {
        transition: "0.1s",
        fill: palette.grey["50"],
      },
    },
  },
  tertiary: {
    border: "none",
    backgroundColor: "transparent",
    color: palette.grey["500"],
    boxShadow: "none",
    ".MuiButton-startIcon": {
      margin: 0,
    },
    ":hover": {
      boxShadow: "none",
      border: "none",
      backgroundColor: "transparent",
    },
  },
  iconText: {
    border: `0.0625rem solid ${palette.primary["200"]}`,
    backgroundColor: palette.grey["50"],
    color: palette.primary.main,
    boxShadow: "none",
    svg: {
      transition: "0.1s",
      fill: palette.grey.main,
      width: "1rem",
    },
    ":hover": {
      boxShadow: "none",
      backgroundColor: palette.primary["100"],
      color: palette.primary.main,
      svg: {
        transition: "0.1s",
        fill: palette.primary.main,
      },
    },
  },
  primaryInverse: {
    backgroundColor: palette.grey["50"],
    border: `0.0625rem solid ${palette.grey["500"]}`,
    color: palette.grey["500"],
  },
  secondaryInverse: {
    backgroundColor: palette.grey["50"],
    border: `0.0625rem solid ${palette.primary["200"]}`,
    color: palette.primary.main,
  },
  tertiaryInverse: {
    backgroundColor: palette.grey["50"],
    border: "none",
    color: palette.secondary.main,
    ":hover": {
      boxShadow: "none",
      border: "none",
      backgroundColor: palette.grey["50"],
    },
  },
  iconTextInverse: {
    border: "none",
    backgroundColor: palette.grey["50"],
    color: palette.primary.main,
    boxShadow: "none",
    svg: {
      transition: "0.1s",
      fill: palette.primary.main,
      width: "1rem",
    },
    ":hover": {
      backgroundColor: palette.grey["50"],
    },
  },
};

export default styles;
