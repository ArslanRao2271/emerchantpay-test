import { SxProps } from "@mui/material";
import { lightTheme } from "@theme/index";
import { boxDisplay, textStyle } from "../../appStyles";

const { palette } = lightTheme;

const styles: Record<string, SxProps> = {
  headerCellText: {
    ...textStyle(400, "1rem", "1.25rem"),
    color: palette.grey[400],
  },

  rowTextStyle: {
    ...textStyle(400, "1rem", "1.25rem"),
    color: palette.grey.main ?? "",
    cursor: "pointer",
  },

  viewDocumentCTA: {
    ...textStyle(800, { lg: "1rem", md: "1rem", xs: "0.875rem" }, "1.25rem"),
    color: palette.grey.main ?? "",
    borderLeft: `0.125rem solid ${palette.primary.main}`,
    paddingLeft: "0.5rem",
    cursor: "pointer",
    "& span": {
      display: {
        lg: "inline",
        md: "inline",
        xs: "none",
      },
    },
  },

  buttonsContainer: {
    ...boxDisplay("flex", "flex-start", "center"),
    gap: "0.25rem",
  },

  pastTenanciesDocumentLabelContainer: {
    ...boxDisplay("flex", "flex-start", "flex-start"),
    gap: "0.5rem",
  },

  docTitleStyle: {
    ...textStyle(400, { lg: "1rem", md: "1rem", xs: "0.75rem" }, "0.875rem"),
    color: palette.grey.main ?? "",
  },

  docSubTitleStyle: {
    ...textStyle(300, "0.75rem", "0.875rem"),
    color: palette.grey[600],
    mt: "0.3rem",
  },
};

export default styles;
