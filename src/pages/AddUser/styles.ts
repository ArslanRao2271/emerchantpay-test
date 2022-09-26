import { SxProps } from "@mui/material";
import { boxDisplay } from "../../appStyles";

const styles: Record<string, SxProps> = {
  addUserPageContainer: {
    ...boxDisplay("flex", "center", "center"),
    flexDirection: "column",
    gap: "5rem",
  },
};

export default styles;
