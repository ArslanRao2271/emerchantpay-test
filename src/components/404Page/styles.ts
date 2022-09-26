import { SxProps } from "@mui/material";
import { boxDisplay } from "../../appStyles";

const styles: Record<string, SxProps> = {
  pageNotFoundContainer: {
    ...boxDisplay("flex", "center", "center"),
    flexDirection: "column",
  },
};

export default styles;
