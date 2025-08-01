"use client"

import { GuardedLink, GuardedLinkProvider, Rating, Typography } from "@/components";
import * as React from "react";
import styles from "./LinkTable.module.scss";
import type { ThemeColor } from "@/types/colors";
import Icon from '@mdi/react';
import { mdiTriangle } from "@mdi/js";

interface LinkData {
  url: string;
  requests?: number;
  status?: "online" | "offline" | "maintenance" | "unknown";
  loadTime?: number;
  reliability?: number;
}

interface LinkTableProps {
  color?: ThemeColor;
  linkData?: LinkData[];
}

const LinkTable = ({
  color = "magenta",
  linkData = []
}: LinkTableProps) => {
  const [expandedRows, setExpandedRows] = React.useState<Record<number, boolean>>({});

  const handleExpandClick = (i: number) => {
    setExpandedRows(prev => ({ ...prev, [i]: !prev[i] }));
  };

  return (
    <div className={`color-${color} ${styles.LinkTable}`}>
      <div className={styles.LinkTableHead}>
        <div className={styles.LinkTableRow}>
          <div className={styles.LinkTableCell}>
            <Typography glow>Link</Typography>
          </div>
          <div className={styles.LinkTableCell}>
            <Typography glow>Requests (1 week)</Typography>
          </div>
          <div className={styles.LinkTableCell}>
            <Typography glow>Status</Typography>
          </div>
          <div className={styles.LinkTableCell}>
            <Typography glow>Load time</Typography>
          </div>
          <div className={styles.LinkTableCell}>
            <Typography glow>Reliability</Typography>
          </div>
        </div>
      </div>
      <div className={styles.LinkTableBody}>
        <GuardedLinkProvider>
        {
          linkData.map((link, i) => {
            const rowColor = (
              link.status === "online" ? "green" :
              link.status === "offline" ? "red" :
              link.status === "maintenance" ? "orange" :
              link.status === "unknown" ? "yellow" :
              "magenta"
            );

            return (
              <div
                className={styles.LinkTableRow}
                key={i}
                data-expanded={expandedRows[i] ? 1 : undefined}
              >
                <div className={styles.LinkTableCell} onClick={() => handleExpandClick(i)}>
                  <GuardedLink href={link.url} color={rowColor} hoverUnderline>{new URL(link.url).hostname}</GuardedLink>
                  <div className={styles.LinkTableExpandArrow}>
                    <Icon
                      path={mdiTriangle}
                      size={0.8}
                      rotate={expandedRows[i] ? 180 : 270}
                      className={styles.LinkTableExpandArrowIcon}
                    />
                  </div>
                </div>
                <div className={styles.LinkTableCell} data-label="Requests">
                  <Typography color={rowColor}>{link.requests?.toLocaleString() ?? "ERROR"}</Typography>
                </div>
                <div className={styles.LinkTableCell} data-label="Status">
                  <Typography color={rowColor}>{link.status?.toUpperCase() ?? "ERROR"}</Typography>
                </div>
                <div className={styles.LinkTableCell} data-label="Load time">
                  <Typography color={rowColor}>{link?.loadTime ?? "N/A"}s</Typography>
                </div>
                <div className={styles.LinkTableCell} data-label="Reliability">
                  <Rating value={link?.reliability ?? 0} max={10} color={rowColor} />
                </div>
              </div>
            );
          })
        }
        </GuardedLinkProvider>
      </div>
    </div>
  );
};

export default LinkTable;