import { SxProps } from "@mui/material";
import { lightTheme } from "@theme/index";

const { palette } = lightTheme;

const styles: Record<string, SxProps> = {
  labelStyle: {
    flexGrow: 1,
  },

  appBar: {
    backgroundColor: palette.primary.main,
  },
};

export default styles;
