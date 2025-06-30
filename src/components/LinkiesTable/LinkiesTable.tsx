"use client";

import {
  Button,
  FormControlLabel,
  Rating,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Box,
  Switch
} from "@mui/material";
import Link from "next/link";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";

export type LinkiesEntry = {
  url: string;
  status: "online" | "offline" | "unknown";
  requests: number;
  loadTime?: number;
  reliability?: number;
};

type LinkiesTableProps = {
  linkies: LinkiesEntry[];
};

const LinkiesTable = ({ linkies }: LinkiesTableProps) => {
  const mobile = useMediaQuery("(max-width:700px)");
  const containerPadding = mobile ? 0 : 2;

  const [showOffline, setShowOffline] = useState(true);
  const [showUnknown, setShowUnknown] = useState(true);

  // Remove useMemo, just filter directly
  const filteredLinkies = linkies.filter(entry => {
    if (entry.status === "offline" && !showOffline) return false;
    if (entry.status === "unknown" && !showUnknown) return false;
    return true;
  });

  const Pagination = () => (
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

  return (
    <TableContainer
      sx={{
        pt: containerPadding,
        pb: 2,
        pl: containerPadding,
        pr: containerPadding,
        maxWidth: mobile ? "100vw" : undefined,
        overflowX: "auto",
      }}
    >
      <Stack
        direction={mobile ? "column" : "row"}
        alignItems="center"
        spacing={1}
      >
        <Stack direction="row">
          <FormControlLabel
            control={<Switch checked={showOffline} onChange={e => setShowOffline(e.target.checked)} color="error" />}
            label="Show offline"
          />
          <FormControlLabel
            control={<Switch checked={showUnknown} onChange={e => setShowUnknown(e.target.checked)} color="warning" />}
            label="Show unknown"
          />
        </Stack>
        <Box sx={{ flex: 1 }} />
        <Pagination />
      </Stack>
      <br />
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography>Link</Typography>
            </TableCell>
            {!mobile && (
              <TableCell align="left" sx={{ width: 120 }}>
                <Typography>Status</Typography>
              </TableCell>
            )}
            <TableCell align="right" sx={{ width: 120 }}>
              <Typography>Requests</Typography>
            </TableCell>
            {!mobile && (
              <>
                <TableCell align="right" sx={{ width: 120 }}>
                  <Typography>Load time</Typography>
                </TableCell>
                <TableCell align="center" sx={{ width: 140 }}>
                  <Typography>Reliability</Typography>
                </TableCell>
              </>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredLinkies.map((entry, index) => {
            const statusColor =
              entry.status === "online"
                ? "success"
                : entry.status === "offline"
                ? "error"
                : "warning";
            return (
              <TableRow key={entry.url + index}>
                <TableCell sx={{ maxWidth: mobile ? 180 : undefined, overflow: "hidden", textOverflow: "unset", whiteSpace: "normal" }}>
                  <Link href={entry.url}>
                    <Typography
                      sx={{
                        wordWrap: "break-word",
                        overflowWrap: "break-word",
                        whiteSpace: "normal",
                        maxWidth: mobile ? 180 : undefined,
                        display: "block",
                        fontSize: mobile ? "14px" : undefined
                      }}
                      style={{
                        userSelect: "none",
                        WebkitUserSelect: "none",
                        WebkitTouchCallout: "none"
                      }}
                      color={mobile ? statusColor : undefined}
                    >
                      {entry.url}
                    </Typography>
                  </Link>
                </TableCell>
                {!mobile && (
                  <TableCell align="left" sx={{ width: 120 }}>
                    <Typography color={statusColor}>
                      {entry.status.toUpperCase()}
                    </Typography>
                  </TableCell>
                )}
                <TableCell align="right" sx={{ width: 120 }}>
                  <Typography>{entry.requests.toLocaleString()}</Typography>
                </TableCell>
                {!mobile && (
                  <>
                    <TableCell align="right" sx={{ width: 120 }}>
                      <Typography>
                        {entry.loadTime
                          ? `${entry.loadTime.toLocaleString()} s`
                          : "N/A"}
                      </Typography>
                    </TableCell>
                    <TableCell align="center" sx={{ width: 140 }}>
                      <Rating
                        readOnly
                        precision={0.1}
                        value={entry.reliability || 0}
                      />
                    </TableCell>
                  </>
                )}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <br />
      <Pagination />
    </TableContainer>
  );
};

export default LinkiesTable;