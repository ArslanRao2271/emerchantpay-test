import { SxProps } from "@mui/material";
import { lightTheme } from "@theme/index";

const { palette } = lightTheme;

const styles: Record<string, SxProps> = {
  modalBox: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: palette.grey[50],
    border: "2px solid #000",
    p: 4,
  },
};

export default styles;
