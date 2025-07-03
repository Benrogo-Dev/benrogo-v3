const MuiButton = {
  styleOverrides: {
    root: {
      color: "#ffffff",
      padding: 6,
      minWidth: 32,
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
};

export default MuiButton;