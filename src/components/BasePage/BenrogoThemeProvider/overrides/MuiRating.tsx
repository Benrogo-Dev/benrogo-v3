import Square from "@mui/icons-material/Square";
import SquareOutlined from "@mui/icons-material/SquareOutlined";

const MuiRating = {
  styleOverrides: {
    root: {
      "& .MuiRating-iconFilled": {
        color: "var(--magenta-300)",
      },
      "& .MuiRating-iconEmpty": {
        color: "var(--magenta-500)",
      },
    },
  },
  defaultProps: {
    icon: <Square />,
    emptyIcon: <SquareOutlined />,
  },
};

export default MuiRating;
