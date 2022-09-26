import { SxProps } from "@mui/material";

export interface ResponsiveProps {
  xl?: string;
  lg?: string;
  xs?: string;
  ss?: string;
  sm?: string;
  md?: string;
  mm?: string;
  ml?: string;
}

export const boxDisplay = (
  display: string,
  justifyContent?: string,
  alignItems?: string
) => ({
  display,
  justifyContent,
  alignItems,
});

export const textStyle = (
  fontWeight: number,
  fontSize: string | ResponsiveProps,
  lineHeight: string | ResponsiveProps
) => ({
  fontWeight,
  fontSize,
  lineHeight,
  whiteSpace: "pre-wrap",
});

const styles: Record<string, SxProps> = {
  mainContainer: {
    ...boxDisplay("flex", "center", "center"),
    flexDirection: "column",
    gap: "1rem",
  },
};

export default styles;
