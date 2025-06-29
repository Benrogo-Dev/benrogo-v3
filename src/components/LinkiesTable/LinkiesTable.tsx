import {
  Rating, Table,
  TableBody, TableCell,
  TableContainer, TableHead,
  TableRow, Typography
} from "@mui/material";
import Link from "next/link";

/*
type LinkiesEntry = {
  url: string,
  status: "online" | "offline" | "unknown",
  requests: number,
  loadTime?: number,
  reliability?: number
};
*/

const LinkiesTable = () => {
  return (
    <TableContainer>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell><Typography>Link</Typography></TableCell>
            <TableCell align="right"><Typography>Status</Typography></TableCell>
            <TableCell align="right"><Typography>Requests</Typography></TableCell>
            <TableCell align="right"><Typography>Load time</Typography></TableCell>
            <TableCell align="right"><Typography>Reliability</Typography></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell><Link href={"https://www.google.com/"}><Typography>https://www.google.com/</Typography></Link></TableCell>
            <TableCell align="right"><Typography color="error">OFFLINE</Typography></TableCell>
            <TableCell align="right"><Typography>1,293,483</Typography></TableCell>
            <TableCell align="right"><Typography>N/A</Typography></TableCell>
            <TableCell align="right"><Rating readOnly precision={0.1} value={1.3} /></TableCell>
          </TableRow>
          <TableRow>
            <TableCell><Link href={"https://www.example.com/"}><Typography>https://www.example.com/</Typography></Link></TableCell>
            <TableCell align="right"><Typography color="success">ONLINE</Typography></TableCell>
            <TableCell align="right"><Typography>234,567</Typography></TableCell>
            <TableCell align="right"><Typography>0.12s</Typography></TableCell>
            <TableCell align="right"><Rating readOnly precision={0.1} value={4.8} /></TableCell>
          </TableRow>
          <TableRow>
            <TableCell><Link href={"https://www.github.com/"}><Typography>https://www.github.com/</Typography></Link></TableCell>
            <TableCell align="right"><Typography color="success">ONLINE</Typography></TableCell>
            <TableCell align="right"><Typography>3,456,789</Typography></TableCell>
            <TableCell align="right"><Typography>0.19s</Typography></TableCell>
            <TableCell align="right"><Rating readOnly precision={0.1} value={4.9} /></TableCell>
          </TableRow>
          <TableRow>
            <TableCell><Link href={"https://www.notarealsite.com/"}><Typography>https://www.notarealsite.com/</Typography></Link></TableCell>
            <TableCell align="right"><Typography color="warning">UNKNOWN</Typography></TableCell>
            <TableCell align="right"><Typography>0</Typography></TableCell>
            <TableCell align="right"><Typography>N/A</Typography></TableCell>
            <TableCell align="right"><Typography>N/A</Typography></TableCell>
          </TableRow>
          <TableRow>
            <TableCell><Link href={"https://www.wikipedia.org/"}><Typography>https://www.wikipedia.org/</Typography></Link></TableCell>
            <TableCell align="right"><Typography color="success">ONLINE</Typography></TableCell>
            <TableCell align="right"><Typography>987,654</Typography></TableCell>
            <TableCell align="right"><Typography>0.22s</Typography></TableCell>
            <TableCell align="right"><Rating readOnly precision={0.1} value={4.7} /></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default LinkiesTable;