import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Button, Stack, Typography } from "@mui/material";
import { useMobileLayout } from "@/utils";

const LinkiesPagination = () => {
  const mobile = useMobileLayout();

  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={2}
      justifyContent={mobile ? "center" : "flex-end"}
    >
      <Button sx={{ p: 0 }}>
        <PlayArrowIcon
          fontSize={mobile ? "medium" : "large"}
          sx={{ transform: "rotate(180deg)" }}
        />
      </Button>
      <Typography fontSize={mobile ? "medium" : "large"}>1</Typography>
      <Button sx={{ p: 0 }}>
        <PlayArrowIcon fontSize={mobile ? "medium" : "large"} />
      </Button>
    </Stack>
  );
};

export default LinkiesPagination;
