// libs
import React from "react";
import {
  TextField as MuiTextfield,
  TextFieldProps,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { AccountCircle, Visibility, VisibilityOff } from "@mui/icons-material";
import { deepmerge } from "@mui/utils";

// src

// styles
import styles from "./styles";

export interface LibTextfieldProps {
  label?: string;
  name?: string;
  type?: "text" | "number" | "email" | "password" | "tel" | "date";
  readOnly?: boolean;
  isSuccess?: boolean;
  hasNumberStepper?: boolean;
  message?: string;
  startAdornmentOption?: boolean;
  endAdornmentOption?: boolean;
  startInputAdornment?: React.ReactNode;
  endInputAdornment?: React.ReactNode;
}

function LibTextfield({
  type = "text",
  variant,
  message,
  readOnly,
  isSuccess,
  startAdornmentOption,
  endAdornmentOption,
  startInputAdornment,
  endInputAdornment,
  hasNumberStepper = true,
  ...props
}: LibTextfieldProps & Partial<TextFieldProps>) {
  const [visiblePass, setVisiblePass] = React.useState(false);

  const handleClickShowPassword = () => {
    setVisiblePass(!visiblePass);
  };

  const getEndAdornamentIcon = (
    textfieldType: "text" | "number" | "email" | "password" | "tel" | "date",
    isEndAdornmentOption: boolean,
    isEndInputAdornment: React.ReactNode
  ) => {
    if (textfieldType === "password" && isEndAdornmentOption) {
      return (
        <InputAdornment position="end">
          {isEndInputAdornment || (
            <IconButton
              onClick={handleClickShowPassword}
              edge="end"
              aria-label="toggle password visibility"
            >
              {visiblePass ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          )}
        </InputAdornment>
      );
    }

    if (isEndAdornmentOption) {
      return (
        <InputAdornment position="end">
          {isEndInputAdornment || null}
        </InputAdornment>
      );
    }

    return null;
  };

  return (
    <MuiTextfield
      type={type === "password" && visiblePass ? "text" : type}
      helperText={message}
      variant={variant || (readOnly ? "standard" : "outlined")}
      InputProps={{
        startAdornment: startAdornmentOption ? (
          <InputAdornment position="start">
            {startInputAdornment || <AccountCircle />}
          </InputAdornment>
        ) : null,
        endAdornment: getEndAdornamentIcon(
          type,
          endAdornmentOption,
          endInputAdornment
        ),
        readOnly,
        sx: isSuccess ? { ...styles.isSuccess } : null,
      }}
      InputLabelProps={readOnly ? { shrink: true } : { shrink: false }}
      sx={deepmerge(
        deepmerge(styles.base, !hasNumberStepper && styles.hideNumberStepper),
        props.sx && props.sx
      )}
      {...props}
    />
  );
}

export const Textfield = React.memo(LibTextfield);
