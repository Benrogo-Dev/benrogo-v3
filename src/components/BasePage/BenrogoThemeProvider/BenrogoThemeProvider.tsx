"use client"

import { createTheme, ThemeProvider } from "@mui/material";
import * as React from "react";

// Component overrides (Stick to one per file)
import MuiAvatar from "./overrides/MuiAvatar";
import MuiButton from "./overrides/MuiButton";
import MuiSlider from "./overrides/MuiSlider";
import MuiSwitch from "./overrides/MuiSwitch";
import MuiTable from "./overrides/MuiTable";
import MuiRating from "./overrides/MuiRating";
import MuiTypography from "./overrides/MuiTypography";

// Style imports (will propagate to the rest of the app)
import "./colors.scss";

// Type overrides
declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true;
    desktop: true;
  }
}

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
  breakpoints: {
    values: {
      mobile: 0,
      desktop: 850
    }
  },
  shape: {
    borderRadius: 12
  },
  components: {
    MuiAvatar,
    MuiButton,
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