import "@mui/material/styles";
import {
  Color as muiColor,
  PaletteColor as muiPaletteColor,
} from "@mui/material";

type ColorPartial = Partial<muiColor>;
type PaletteColorPartial = Partial<muiPaletteColor>;

declare module "@mui/material/styles" {
  interface PaletteColor extends ColorPartial {}
  interface Palette {
    gradient: Palette["primary"];
    seaGreen: Palette["primary"];
    lightSeaGreen: Palette["primary"];
    torchRed: Palette["primary"];
    vineGreen: Palette["primary"];
    mustardYellow: Palette["primary"];
    darkishBlue: Palette["primary"];
    lightishBlue: Palette["primary"];
    lightishAqua: Palette["primary"];
    darkestBlack: Palette["primary"];
    bluishGrey: Palette["primary"];
    darkAqua: Palette["primary"];
    faintAqua: Palette["primary"];
    bloodRed: Palette["primary"];
    brightRed: Palette["primary"];
    lightishBluish: Palette["primary"];
    darkGreen: Palette["primary"];
    seaBlue: Palette["primary"];
    paleBlue: Palette["primary"];
    brightGreen: Palette["primary"];
    paleLightBlue: Palette["primary"];
    transparentPaleBlue: Palette["primary"];
    transparentLightBlue: Palette["primary"];
    transparent: Palette["primary"];
    transparentWhite: Palette["primary"];
    transparentBlackishGrey: Palette["primary"];
    pinkishRed: Palette["primary"];
    semiTransparentWhite: Palette["primary"];
    darkGray: Palette["primary"];
    spanishGray: Palette["primary"];
    chineseSilver: Palette["primary"];
    brightGray: Palette["primary"];
    platinum: Palette["primary"];
    graniteGray: Palette["primary"];
    gainsboro: Palette["primary"];
    sonicSilver: Palette["primary"];
    grayX11: Palette["primary"];
    cultured: Palette["primary"];
    greenishSky: Palette["primary"];
    darkGreenishSky: Palette["primary"];
    darkerGray: Palette["primary"];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    gradient?: PaletteOptions["primary"];
    seaGreen?: PaletteOptions["primary"];
    lightSeaGreen?: PaletteOptions["primary"];
    torchRed?: PaletteOptions["primary"];
    vineGreen?: PaletteOptions["primary"];
    mustardYellow?: PaletteOptions["primary"];
    darkishBlue?: PaletteOptions["primary"];
    lightishBlue?: PaletteOptions["primary"];
    lightishAqua?: PaletteOptions["primary"];
    darkestBlack?: PaletteOptions["primary"];
    bluishGrey?: PaletteOptions["primary"];
    darkAqua?: PaletteOptions["primary"];
    faintAqua?: PaletteOptions["primary"];
    bloodRed?: PaletteOptions["primary"];
    brightRed?: PaletteOptions["primary"];
    lightishBluish?: PaletteOptions["primary"];
    darkGreen?: PaletteOptions["primary"];
    seaBlue?: PaletteOptions["primary"];
    paleBlue?: PaletteOptions["primary"];
    brightGreen?: PaletteOptions["primary"];
    paleLightBlue?: PaletteOptions["primary"];
    transparentPaleBlue?: PaletteOptions["primary"];
    transparentLightBlue?: PaletteOptions["primary"];
    transparent?: PaletteOptions["primary"];
    transparentWhite?: PaletteOptions["primary"];
    transparentBlackishGrey?: PaletteOptions["primary"];
    pinkishRed?: PaletteOptions["primary"];
    semiTransparentWhite?: PaletteOptions["primary"];
    darkGray?: PaletteOptions["primary"];
    spanishGray?: PaletteOptions["primary"];
    chineseSilver?: PaletteOptions["primary"];
    brightGray?: PaletteOptions["primary"];
    platinum?: PaletteOptions["primary"];
    graniteGray?: PaletteOptions["primary"];
    gainsboro?: PaletteOptions["primary"];
    sonicSilver?: PaletteOptions["primary"];
    grayX11?: PaletteOptions["primary"];
    cultured?: PaletteOptions["primary"];
    greenishSky?: PaletteOptions["primary"];
    darkGreenishSky?: PaletteOptions["primary"];
    darkerGray?: Palette["primary"];
  }
}
declare module "@mui/material" {
  interface Color extends PaletteColorPartial {}
}
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    gradient: true;
  }
  interface ButtonPropsVariantOverrides {
    primary: true;
    secondary: true;
    tertiary: true;
    back: true;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    bold: true;
    heavy: true;
    "light-italic": true;
  }
}
