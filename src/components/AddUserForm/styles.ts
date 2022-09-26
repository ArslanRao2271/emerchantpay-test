import { SxProps } from "@mui/material";
import { lightTheme } from "@theme/index";
import { boxDisplay } from "../../appStyles";

const { palette } = lightTheme;

export const formStyles: React.CSSProperties = {
  ...boxDisplay("flex", "center", "center"),
  flexDirection: "column",
  gap: "1rem",
  width: "90%",
};

const styles: Record<string, SxProps> = {
  formFieldsWrapper: {
    ...boxDisplay("flex", "center", "flex-start"),
    width: "100%",
    gap: "1rem",
    flexDirection: {
      lg: "row",
      md: "row",
      xs: "column",
    },
  },

  formTextField: {
    backgroundColor: palette.grey["50"],
    borderRadius: "0.25rem",

    fieldset: {
      border: `0.063rem solid ${palette.primary["200"]}`,
    },
    "&:hover .Mui-error fieldset": {
      borderColor: palette.brightRed.main,
    },
    "& .MuiOutlinedInput-root": {
      "&:hover fieldset": {
        border: `0.063rem solid ${palette.primary["200"]}`,
      },
      "&.Mui-focused fieldset": {
        borderColor: palette.primary["200"],
      },
      "&.Mui-error fieldset": {
        border: `0.063rem solid ${palette.brightRed.main}`,
      },
    },
    ".MuiFormHelperText-root": {
      margin: "0",
      paddingTop: "0.625rem",
      fontWeight: "700",
      fontSize: "0.875rem",
      lineHeight: "0.875rem",
    },
    svg: {
      fill: `${palette.gradient.main}`,
    },
    ".MuiOutlinedInput-input": {
      backgroundColor: palette.grey["50"],
      "::-ms-reveal": {
        display: "none",
      },
    },
  },
};

export default styles;
