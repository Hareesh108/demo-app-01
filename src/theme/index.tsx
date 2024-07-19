import React, { useMemo } from "react";
import { CssBaseline } from "@mui/material";
import {
  createTheme,
  ThemeOptions,
  StyledEngineProvider,
  ThemeProvider as MUIThemeProvider,
  Theme,
} from "@mui/material/styles";
import GlobalStyles from "./globalStyles";
import typography from "./typography";
import palette from "./palette";
import styleOverride from "./styleOverride";
import "@mui/styles";


type Props = {
  children: React.ReactNode;
};
declare module "@mui/styles/defaultTheme" {
  interface DefaultTheme extends Theme {}
}
// use MUI CssBaseline component for setting baseline styles.
// GlobalStyles to override baseline styles for some of the HTML element. refer - https://mui.com/material-ui/customization/how-to-customize/

export default function ThemeProvider({ children }: Props) {
  const themeOptions: ThemeOptions = useMemo(
    () => ({
      typography,
      palette,
      // standard: {
      //   fontFamily: "var(--boost-textfont-font)",
      //   fontSize: "var(--boost-textsize-size)",
      //   fontWeight: "var(--boost-text-weight)"
      // }
      //

      //   styleOverrides: {
      //     "&:hover": {
      //       color: "green" }
      //   }
      // }
    }),
    []
  );

  const theme = createTheme(themeOptions);
  // override component here
  theme.components = styleOverride;

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}
