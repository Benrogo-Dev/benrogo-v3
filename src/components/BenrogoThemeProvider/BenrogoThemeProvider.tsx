"use client"

import { createTheme, ThemeProvider } from "@mui/material";
import * as React from "react";
import MuiButton from "./overrides/MuiButton";
import MuiCheckbox from "./overrides/MuiCheckbox";
import MuiSlider from "./overrides/MuiSlider";
import MuiSwitch from "./overrides/MuiSwitch";

const BenrogoTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#fff"
    },
    secondary: {
      main: "#fff"
    },
  },
  shape: {
    borderRadius: 12
  },
  components: {
    MuiTableBody: {
      styleOverrides: {
        root: {
          '& .MuiTableRow-root:last-child td, & .MuiTableRow-root:last-child th': {
            border: 0
          }
        }
      }
    },
    MuiButton,
    MuiCheckbox,
    MuiSlider,
    MuiSwitch
  }
});

type BenrogoThemeProviderProps = {
  children: React.ReactNode;
}

const BenrogoThemeProvider = ({ children }: BenrogoThemeProviderProps) => {
  return (
    <ThemeProvider theme={BenrogoTheme}>
      { children }
    </ThemeProvider>
  );
};

export default BenrogoThemeProvider;