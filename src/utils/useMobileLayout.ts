import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const useMobileLayout = (): boolean => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.only("mobile"));
}

export default useMobileLayout;