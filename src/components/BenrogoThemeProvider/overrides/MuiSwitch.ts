const MuiSwitch = {
  styleOverrides: {
    root: {
      "& .MuiSwitch-colorPrimary": {
        "&.Mui-checked": {
          "+.MuiSwitch-track": {
            backgroundColor: "var(--magenta-300)",
            boxShadow: "var(--magenta-300-neon)",
            opacity: 1
          },
          "& .MuiSwitch-thumb": {
            backgroundColor: "var(--magenta-100)"
          }
        },
        "&.Mui-disabled": {
          "&.Mui-checked": {
            "+.MuiSwitch-track": {
              backgroundColor: "var(--magenta-600)",
              boxShadow: "none"
            },
            "& .MuiSwitch-thumb": {
              backgroundColor: "var(--magenta-500)"
            }
          }
        }
      },
      "& .MuiSwitch-colorSecondary": {
        "&.Mui-checked": {
          "+.MuiSwitch-track": {
            backgroundColor: "var(--cyan-300)",
            boxShadow: "var(--cyan-300-neon)",
            opacity: 1
          },
          "& .MuiSwitch-thumb": {
            backgroundColor: "var(--cyan-100)"
          }
        },
        "&.Mui-disabled": {
          "&.Mui-checked": {
            "+.MuiSwitch-track": {
              backgroundColor: "var(--cyan-600)",
              boxShadow: "none"
            },
            "& .MuiSwitch-thumb": {
              backgroundColor: "var(--cyan-500)"
            }
          }
        }
      },
      "& .MuiSwitch-colorSuccess": {
        "&.Mui-checked": {
          "+.MuiSwitch-track": {
            backgroundColor: "var(--green-300)",
            boxShadow: "var(--green-300-neon)",
            opacity: 1
          },
          "& .MuiSwitch-thumb": {
            backgroundColor: "var(--green-100)"
          }
        },
        "&.Mui-disabled": {
          "&.Mui-checked": {
            "+.MuiSwitch-track": {
              backgroundColor: "var(--green-600)",
              boxShadow: "none"
            },
            "& .MuiSwitch-thumb": {
              backgroundColor: "var(--green-500)"
            }
          }
        }
      },
      "& .MuiSwitch-colorError": {
        "&.Mui-checked": {
          "+.MuiSwitch-track": {
            backgroundColor: "var(--scarlet-300)",
            boxShadow: "var(--scarlet-300-neon)",
            opacity: 1
          },
          "& .MuiSwitch-thumb": {
            backgroundColor: "var(--scarlet-100)"
          }
        },
        "&.Mui-disabled": {
          "&.Mui-checked": {
            "+.MuiSwitch-track": {
              backgroundColor: "var(--scarlet-600)",
              boxShadow: "none"
            },
            "& .MuiSwitch-thumb": {
              backgroundColor: "var(--scarlet-500)"
            }
          }
        }
      },
      "& .MuiSwitch-colorInfo": {
        "&.Mui-checked": {
          "+.MuiSwitch-track": {
            backgroundColor: "var(--blue-300)",
            boxShadow: "var(--blue-300-neon)",
            opacity: 1
          },
          "& .MuiSwitch-thumb": {
            backgroundColor: "var(--blue-100)"
          }
        },
        "&.Mui-disabled": {
          "&.Mui-checked": {
            "+.MuiSwitch-track": {
              backgroundColor: "var(--blue-600)",
              boxShadow: "none"
            },
            "& .MuiSwitch-thumb": {
              backgroundColor: "var(--blue-500)"
            }
          }
        }
      },
      "& .MuiSwitch-colorWarning": {
        "&.Mui-checked": {
          "+.MuiSwitch-track": {
            backgroundColor: "var(--orange-300)",
            boxShadow: "var(--orange-300-neon)",
            opacity: 1
          },
          "& .MuiSwitch-thumb": {
            backgroundColor: "var(--orange-100)"
          }
        },
        "&.Mui-disabled": {
          "&.Mui-checked": {
            "+.MuiSwitch-track": {
              backgroundColor: "var(--orange-600)",
              boxShadow: "none"
            },
            "& .MuiSwitch-thumb": {
              backgroundColor: "var(--orange-500)"
            }
          }
        }
      }
    }
  }
};

export default MuiSwitch;