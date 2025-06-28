"use client"

import { createTheme, ThemeProvider } from "@mui/material";
import * as React from "react";

const BenrogoTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ffffff"
    },
    secondary: {
      main: "#ffffff"
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
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#ffffff",
          "&.MuiButton-colorPrimary": {
            backgroundColor: "var(--magenta-600)",
            border: "0.1rem solid var(--magenta-200)",
            boxShadow: "var(--magenta-300-neon)",
            "&:hover": {
              backgroundColor: "var(--magenta-500)",
              border: "0.1rem solid var(--magenta-300)",
              boxShadow: "var(--magenta-400-neon)"
            }
          },
          "&.MuiButton-colorSecondary": {
            backgroundColor: "var(--cyan-600)",
            border: "0.1rem solid var(--cyan-200)",
            boxShadow: "var(--cyan-300-neon)",
            "&:hover": {
              backgroundColor: "var(--cyan-500)",
              border: "0.1rem solid var(--cyan-300)",
              boxShadow: "var(--cyan-400-neon)"
            }
          },
          "&.MuiButton-colorSuccess": {
            backgroundColor: "var(--green-600)",
            border: "0.1rem solid var(--green-200)",
            boxShadow: "var(--green-300-neon)",
            "&:hover": {
              backgroundColor: "var(--green-500)",
              border: "0.1rem solid var(--green-300)",
              boxShadow: "var(--green-400-neon)"
            }
          },
          "&.MuiButton-colorError": {
            backgroundColor: "var(--scarlet-600)",
            border: "0.1rem solid var(--scarlet-200)",
            boxShadow: "var(--scarlet-300-neon)",
            "&:hover": {
              backgroundColor: "var(--scarlet-500)",
              border: "0.1rem solid var(--scarlet-300)",
              boxShadow: "var(--scarlet-400-neon)"
            }
          },
          "&.MuiButton-colorInfo": {
            backgroundColor: "var(--blue-600)",
            border: "0.1rem solid var(--blue-200)",
            boxShadow: "var(--blue-300-neon)",
            "&:hover": {
              backgroundColor: "var(--blue-500)",
              border: "0.1rem solid var(--blue-300)",
              boxShadow: "var(--blue-400-neon)"
            }
          },
          "&.MuiButton-colorWarning": {
            backgroundColor: "var(--orange-600)",
            border: "0.1rem solid var(--orange-200)",
            boxShadow: "var(--orange-300-neon)",
            "&:hover": {
              backgroundColor: "var(--orange-500)",
              border: "0.1rem solid var(--orange-300)",
              boxShadow: "var(--orange-400-neon)"
            }
          }
        }
      }
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          "&.MuiCheckbox-colorPrimary": {
            "&.Mui-checked": {
              color: "var(--magenta-300)",
            }
          },
          "&.MuiCheckbox-colorSecondary": {
            "&.Mui-checked": {
              color: "var(--cyan-300)"
            }
          },
          "&.MuiCheckbox-colorSuccess": {
            "&.Mui-checked": {
              color: "var(--green-300)"
            }
          },
          "&.MuiCheckbox-colorError": {
            "&.Mui-checked": {
              color: "var(--scarlet-300)"
            }
          },
          "&.MuiCheckbox-colorInfo": {
            "&.Mui-checked": {
              color: "var(--blue-300)"
            }
          },
          "&.MuiCheckbox-colorWarning": {
            "&.Mui-checked": {
              color: "var(--orange-300)"
            }
          },
        }
      }
    }
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