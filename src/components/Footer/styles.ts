import { SxProps } from "@mui/material";
import { lightTheme } from "@theme/index";

const { palette } = lightTheme;

const styles: Record<string, SxProps> = {
  labelStyle: {
    flexGrow: 1,
    textAlign: "center",
  },

  footerBar: {
    backgroundColor: palette.primary.main,
    position: "fixed",
    bottom: 0,
    top: "auto",
  },
};

export default styles;
