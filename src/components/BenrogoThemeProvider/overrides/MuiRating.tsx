import Square from "@mui/icons-material/Square";
import SquareOutlined from "@mui/icons-material/SquareOutlined";

const MuiRating = {
  styleOverrides: {
    root: {
      "& .MuiRating-icon": {
        color: "var(--magenta-300)",
      }
    }
  },
  defaultProps: {
    icon: <Square />,
    emptyIcon: <SquareOutlined />
  }
}

export default MuiRating;