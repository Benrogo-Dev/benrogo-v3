const MuiTable = {
  styleOverrides: {
    root: {
      "& .MuiTableRow-root": {
        "&:last-child td": {
          border: 0,
        },
        "& .MuiTableCell-root": {
          borderBottom: "1px solid var(--magenta-300)",
        },
      },
    },
  },
};

export default MuiTable;
