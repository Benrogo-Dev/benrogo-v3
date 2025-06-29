const MuiSlider = {
  styleOverrides: {
    root: {
      "&.MuiSlider-colorPrimary": {
        "& .MuiSlider-rail": {
          backgroundColor: "var(--magenta-500)",
          opacity: 100
        },
        "& .MuiSlider-track": {
          backgroundColor: "var(--magenta-300)",
          border: "none",
          boxShadow: "var(--magenta-300-neon)"
        },
        "& .MuiSlider-thumb": {
          backgroundColor: "var(--magenta-300)",
          boxShadow: "var(--magenta-300-neon)",
          "&:hover": {
            boxShadow: "var(--magenta-400-neon)"
          }
        },
        "&.Mui-disabled": {
          "& .MuiSlider-rail": {
            backgroundColor: "var(--magenta-600)",
          },
          "& .MuiSlider-track": {
            backgroundColor: "var(--magenta-500)",
            boxShadow: "none"
          },
          "& .MuiSlider-thumb": {
            backgroundColor: "var(--magenta-500)",
            boxShadow: "none"
          }
        }
      },
      "&.MuiSlider-colorSecondary": {
        "& .MuiSlider-rail": {
          backgroundColor: "var(--cyan-500)",
          opacity: 100
        },
        "& .MuiSlider-track": {
          backgroundColor: "var(--cyan-300)",
          border: "none",
          boxShadow: "var(--cyan-300-neon)"
        },
        "& .MuiSlider-thumb": {
          backgroundColor: "var(--cyan-300)",
          boxShadow: "var(--cyan-300-neon)",
          "&:hover": {
            boxShadow: "var(--cyan-400-neon)"
          }
        },
        "&.Mui-disabled": {
          "& .MuiSlider-rail": {
            backgroundColor: "var(--cyan-600)",
          },
          "& .MuiSlider-track": {
            backgroundColor: "var(--cyan-500)",
            boxShadow: "none"
          },
          "& .MuiSlider-thumb": {
            backgroundColor: "var(--cyan-500)",
            boxShadow: "none"
          }
        }
      },
      "&.MuiSlider-colorSuccess": {
        "& .MuiSlider-rail": {
          backgroundColor: "var(--green-500)",
          opacity: 100
        },
        "& .MuiSlider-track": {
          backgroundColor: "var(-green-300)",
          border: "none",
          boxShadow: "var(--green-300-neon)"
        },
        "& .MuiSlider-thumb": {
          backgroundColor: "var(--green-300)",
          boxShadow: "var(--green-300-neon)",
          "&:hover": {
            boxShadow: "var(--green-400-neon)"
          }
        },
        "&.Mui-disabled": {
          "& .MuiSlider-rail": {
            backgroundColor: "var(--green-600)",
          },
          "& .MuiSlider-track": {
            backgroundColor: "var(--green-500)",
            boxShadow: "none"
          },
          "& .MuiSlider-thumb": {
            backgroundColor: "var(--green-500)",
            boxShadow: "none"
          }
        }
      },
      "&.MuiSlider-colorError": {
        "& .MuiSlider-rail": {
          backgroundColor: "var(--scarlet-500)",
          opacity: 100
        },
        "& .MuiSlider-track": {
          backgroundColor: "var(-scarlet-300)",
          border: "none",
          boxShadow: "var(--scarlet-300-neon)"
        },
        "& .MuiSlider-thumb": {
          backgroundColor: "var(--scarlet-300)",
          boxShadow: "var(--scarlet-300-neon)",
          "&:hover": {
            boxShadow: "var(--scarlet-400-neon)"
          }
        },
        "&.Mui-disabled": {
          "& .MuiSlider-rail": {
            backgroundColor: "var(--scarlet-600)",
          },
          "& .MuiSlider-track": {
            backgroundColor: "var(--scarlet-500)",
            boxShadow: "none"
          },
          "& .MuiSlider-thumb": {
            backgroundColor: "var(--scarlet-500)",
            boxShadow: "none"
          }
        }
      },
      "&.MuiSlider-colorInfo": {
        "& .MuiSlider-rail": {
          backgroundColor: "var(--blue-500)",
          opacity: 100
        },
        "& .MuiSlider-track": {
          backgroundColor: "var(-blue-300)",
          border: "none",
          boxShadow: "var(--blue-300-neon)"
        },
        "& .MuiSlider-thumb": {
          backgroundColor: "var(--blue-300)",
          boxShadow: "var(--blue-300-neon)",
          "&:hover": {
            boxShadow: "var(--blue-400-neon)"
          }
        },
        "&.Mui-disabled": {
          "& .MuiSlider-rail": {
            backgroundColor: "var(--blue-600)",
          },
          "& .MuiSlider-track": {
            backgroundColor: "var(--blue-500)",
            boxShadow: "none"
          },
          "& .MuiSlider-thumb": {
            backgroundColor: "var(--blue-500)",
            boxShadow: "none"
          }
        }
      },
      "&.MuiSlider-colorWarning": {
        "& .MuiSlider-rail": {
          backgroundColor: "var(--orange-500)",
          opacity: 100
        },
        "& .MuiSlider-track": {
          backgroundColor: "var(-orange-300)",
          border: "none",
          boxShadow: "var(--orange-300-neon)"
        },
        "& .MuiSlider-thumb": {
          backgroundColor: "var(--orange-300)",
          boxShadow: "var(--orange-300-neon)",
          "&:hover": {
            boxShadow: "var(--orange-400-neon)"
          }
        },
        "&.Mui-disabled": {
          "& .MuiSlider-rail": {
            backgroundColor: "var(--orange-600)",
          },
          "& .MuiSlider-track": {
            backgroundColor: "var(--orange-500)",
            boxShadow: "none"
          },
          "& .MuiSlider-thumb": {
            backgroundColor: "var(--orange-500)",
            boxShadow: "none"
          }
        }
      }
    }
  }
};

export default MuiSlider;