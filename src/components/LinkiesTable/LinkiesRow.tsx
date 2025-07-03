import { TableRow, TableCell, Typography, Rating } from "@mui/material";
import Link from "next/link";
import { LinkiesEntry } from "./LinkiesTable";

type LinkiesRowProps = {
  entry: LinkiesEntry;
  index: number;
  mobile: boolean;
};

const LinkiesRow = ({ entry, index, mobile }: LinkiesRowProps) => {
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
};

export default LinkiesRow;