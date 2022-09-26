import { SxProps } from "@mui/material";
import { lightTheme } from "@theme/index";

const { palette } = lightTheme;
const styles: Record<string, SxProps> = {
  base: {
    fontWeight: "400",
    fontSize: "0.875rem",
    lineHeight: "0.875rem",

    // style applied on input text on normal state
    ".MuiOutlinedInput-input": {
      color: palette.bluishGrey.main,
      zIndex: "0",
      "&:focus": {
        color: palette.darkestBlack.main,
      },
    },

    // to style readOnly field
    "& .MuiInput-input": {},
    // color when in simple state
    "& .MuiInput-underline:before": {
      borderBottom: `0.0625rem solid ${palette.grey.main}`,
      opacity: "0.1",
    },
    // color when field is focused
    "& .MuiInput-underline:after": {
      borderBottom: `0.0625rem solid ${palette.faintAqua.main}`,
    },
    // color on hover state
    "& .MuiInput-underline:hover:not(.Mui-disabled)::before": {
      borderBottom: `0.0625rem solid ${palette.grey.main}`,
      opacity: "0.1",
    },

    // style applied to title in normal state
    label: {
      color: palette.primary["300"],
      textTransform: "uppercase",
    },
    // style applied to title when field is focused
    "& label.Mui-focused": {
      color: palette.primary["300"],
      textTransform: "uppercase",
    },
    // style applied to base state and hover and focus state
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: palette.primary["200"],
        backgroundColor: "transparent",
        color: palette.grey.main,
      },
      "&:hover fieldset": {
        borderColor: palette.lightishAqua.main,
        backgroundColor: palette.lightishAqua.main,
        color: `${palette.grey.main}`,
        zIndex: "-10",
      },
      "&.Mui-focused fieldset": {
        borderColor: palette.lightishAqua.main,
        backgroundColor: palette.lightishAqua.main,
        color: `${palette.grey.main}`,
        zIndex: "-10",
      },
    },
    // basic style applied to helper msg in normal state
    "& .MuiFormHelperText-root": {
      color: palette.primary.main, // this color is applied when error={false}
      margin: "0",
    },
    // styles being applied at error state
    "& .Mui-error": {
      color: `${palette.brightRed.main}`,
      backgroundColor: "transparent",
      ".MuiOutlinedInput-input": {
        color: palette.brightRed.main,
      },
      ".MuiOutlinedInput-notchedOutline": {
        borderColor: `${palette.bloodRed.main}`,
      },
      "&:hover fieldset": {
        borderColor: palette.bloodRed.main,
        backgroundColor: "transparent",
      },
      "&.Mui-focused fieldset": {
        backgroundColor: "transparent",
        borderColor: `${palette.bloodRed.main}`,
        zIndex: "-10",
      },
    },
    // styles being applied at disabled state
    ".Mui-disabled": {
      ".MuiOutlinedInput-input": {
        color: palette.darkestBlack.main,
        borderColor: palette.grey["100"],
        backgroundColor: palette.grey["100"],
        borderRadius: "0.25rem",
        zIndex: "-10",
      },
      "&:hover fieldset": {
        borderColor: palette.grey["100"],
        backgroundColor: palette.grey["100"],
        zIndex: "-15",
      },
      ".MuiOutlinedInput-notchedOutline": {
        border: "none",
      },
    },
  },

  hideNumberStepper: {
    "& input[type=number]": {
      "-moz-appearance": "textfield",
    },
    "& input[type=number]::-webkit-outer-spin-button": {
      "-webkit-appearance": "none",
      margin: 0,
    },
    "& input[type=number]::-webkit-inner-spin-button": {
      "-webkit-appearance": "none",
      margin: 0,
    },
  },
  // styles applied for isSuccess
  isSuccess: {
    fontWeight: "500",
    fontSize: "0.875rem",
    lineHeight: "0.875rem",
    backgroundColor: palette.darkAqua.main,
    border: "none",
    "& fieldset": {
      border: "none",
    },
    ".MuiOutlinedInput-input": {
      color: palette.primary.main,
      zIndex: "100",
      border: "none",
      borderRadius: "0.25rem",
      "&:hover": {
        color: palette.primary.main,
        border: "none",
      },
      "&:focus": {
        color: palette.primary.main,
      },
    },
  },
};

export default styles;
