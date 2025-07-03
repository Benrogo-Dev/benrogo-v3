"use client"

import { createTheme, ThemeProvider } from "@mui/material";
import * as React from "react";

import "./colors.scss";
import MuiAvatar from "./overrides/MuiAvatar";
import MuiButton from "./overrides/MuiButton";
import MuiCheckbox from "./overrides/MuiCheckbox";
import MuiSlider from "./overrides/MuiSlider";
import MuiSwitch from "./overrides/MuiSwitch";
import MuiTable from "./overrides/MuiTable";
import MuiRating from "./overrides/MuiRating";
import MuiTypography from "./overrides/MuiTypography";

const BenrogoTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#e526cb"
    },
    secondary: {
      main: "#11d6c6"
    },
    success: {
      main: "#0cc048"
    },
    error: {
      main: "#fc2f00"
    },
    info: {
      main: "#587efc"
    },
    warning: {
      main: "#d9720b"
    }
  },
  shape: {
    borderRadius: 12
  },
  components: {
    MuiAvatar,
    MuiButton,
    MuiCheckbox,
    MuiSlider,
    MuiSwitch,
    MuiTable,
    MuiRating,
    MuiTypography
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