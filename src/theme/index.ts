import { createTheme } from "@mui/material/styles";
import colorPalette from "./colorPalette";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    ss: true;
    ml: true;
    mm: true;
  }
}

export const lightTheme = createTheme({
  typography: {
    fontFamily: "Bliss Pro",
  },
  palette: {
    ...colorPalette,
    mode: "light",
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "Bliss Pro",
        },
        h2: {
          fontFamily: "Bliss Pro",
        },
      },
      variants: [
        {
          props: { variant: "bold" },
          style: { fontFamily: "Bliss Pro Bold" },
        },
        {
          props: { variant: "h1" },
          style: { fontFamily: "Bliss Pro" },
        },
        {
          props: { variant: "heavy" },
          style: { fontFamily: "Bliss Pro Heavy" },
        },
      ],
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      ss: 410,
      sm: 600,
      md: 900,
      mm: 1050,
      lg: 1200,
      ml: 1400,
      xl: 1536,
    },
  },
});
