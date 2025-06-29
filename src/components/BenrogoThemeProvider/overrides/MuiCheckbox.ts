const MuiCheckbox = {
  styleOverrides: {
    root: {
      "&.MuiCheckbox-colorPrimary": {
        "&.Mui-checked": {
          color: "var(--magenta-300)",
        },
        "&.Mui-disabled": {
          color: "var(--magenta-500)"
        }
      },
      "&.MuiCheckbox-colorSecondary": {
        "&.Mui-checked": {
          color: "var(--cyan-300)"
        },
        "&.Mui-disabled": {
          color: "var(--cyan-500)"
        }
      },
      "&.MuiCheckbox-colorSuccess": {
        "&.Mui-checked": {
          color: "var(--green-300)"
        },
        "&.Mui-disabled": {
          color: "var(--green-500)"
        }
      },
      "&.MuiCheckbox-colorError": {
        "&.Mui-checked": {
          color: "var(--scarlet-300)"
        },
        "&.Mui-disabled": {
          color: "var(--scarlet-500)"
        }
      },
      "&.MuiCheckbox-colorInfo": {
        "&.Mui-checked": {
          color: "var(--blue-300)"
        },
        "&.Mui-disabled": {
          color: "var(--blue-500)"
        }
      },
      "&.MuiCheckbox-colorWarning": {
        "&.Mui-checked": {
          color: "var(--orange-300)"
        },
        "&.Mui-disabled": {
          color: "var(--orange-500)"
        }
      }
    }
  }
};

export default MuiCheckbox;