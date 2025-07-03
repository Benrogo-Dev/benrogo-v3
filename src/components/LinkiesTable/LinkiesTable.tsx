"use client";

import {
  FormControlLabel,
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
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";
import LinkiesRow from "./LinkiesRow";
import LinkiesPagination from "./LinkiesPagination";

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

  const filteredLinkies = linkies.filter(entry => {
    if (entry.status === "offline" && !showOffline) return false;
    if (entry.status === "unknown" && !showUnknown) return false;
    return true;
  });

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
        <LinkiesPagination mobile={mobile} />
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
          {filteredLinkies.map((entry, index) => (
            <LinkiesRow
              key={entry.url + index}
              entry={entry}
              index={index}
              mobile={mobile}
            />
          ))}
        </TableBody>
      </Table>
      <br />
      <LinkiesPagination mobile={mobile} />
    </TableContainer>
  );
};

export default LinkiesTable;