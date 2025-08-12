"use client"

import { GuardedLink, GuardedLinkProvider, Rating, Typography } from "@/components";
import * as React from "react";
import styles from "./LinkiesTable.module.scss";
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

interface LinkiesTableProps {
  color?: ThemeColor;
  linkData?: LinkData[];
}

const LinkiesTable = ({
  color = "magenta",
  linkData
}: LinkiesTableProps) => {
  const [expandedRows, setExpandedRows] = React.useState<Record<number, boolean>>({});

  const handleExpandClick = (i: number) => {
    setExpandedRows(prev => ({ ...prev, [i]: !prev[i] }));
  };

  return (
    <div className={`color-${color} ${styles.LinkiesTable}`}>
      <div className={styles.LinkiesTableHead}>
        <div className={styles.LinkiesTableRow}>
          <div className={styles.LinkiesTableCell}>
            <Typography glow>Link</Typography>
          </div>
          <div className={styles.LinkiesTableCell}>
            <Typography glow>Requests (1 week)</Typography>
          </div>
          <div className={styles.LinkiesTableCell}>
            <Typography glow>Status</Typography>
          </div>
          <div className={styles.LinkiesTableCell}>
            <Typography glow>Load time</Typography>
          </div>
          <div className={styles.LinkiesTableCell}>
            <Typography glow>Reliability</Typography>
          </div>
        </div>
      </div>
      <div className={styles.LinkiesTableBody}>
        <GuardedLinkProvider>
        {
          linkData ? linkData.map((link, i) => {
            const rowColor = (
              link.status === "online" ? "green" :
              link.status === "offline" ? "red" :
              link.status === "maintenance" ? "orange" :
              link.status === "unknown" ? "yellow" :
              "magenta"
            );

            return (
              <div
                className={styles.LinkiesTableRow}
                key={i}
                data-expanded={expandedRows[i] ? 1 : undefined}
              >
                <div className={styles.LinkiesTableCell} onClick={() => handleExpandClick(i)}>
                  <GuardedLink href={link.url} color={rowColor} hoverUnderline>{new URL(link.url).hostname}</GuardedLink>
                  <div className={styles.LinkiesTableExpandArrow}>
                    <Icon
                      path={mdiTriangle}
                      size={0.8}
                      rotate={expandedRows[i] ? 180 : 270}
                      className={styles.LinkiesTableExpandArrowIcon}
                    />
                  </div>
                </div>
                <div className={styles.LinkiesTableCell} data-label="Requests">
                  <Typography color={rowColor}>{link.requests?.toLocaleString() ?? "ERROR"}</Typography>
                </div>
                <div className={styles.LinkiesTableCell} data-label="Status">
                  <Typography color={rowColor}>{link.status?.toUpperCase() ?? "ERROR"}</Typography>
                </div>
                <div className={styles.LinkiesTableCell} data-label="Load time">
                  <Typography color={rowColor}>{link?.loadTime ?? "N/A"}s</Typography>
                </div>
                <div className={styles.LinkiesTableCell} data-label="Reliability">
                  <Rating value={link?.reliability ?? 0} max={10} color={rowColor} />
                </div>
              </div>
            );
          }) : [...Array(5)].map((_, i) => (
            <div className={styles.LinkiesTableRow} key={i}>
              <div className={styles.LinkiesTableCell} onClick={() => handleExpandClick(i)}>
                <div className={styles.LinkiesTablePlaceholder} />
                <div className={styles.LinkiesTableExpandArrow}>
                  <Icon
                    path={mdiTriangle}
                    size={0.8}
                    rotate={expandedRows[i] ? 180 : 270}
                    className={styles.LinkiesTableExpandArrowIcon}
                  />
                </div>
              </div>
              <div className={styles.LinkiesTableCell}>
                <div className={styles.LinkiesTablePlaceholder} />
              </div>
              <div className={styles.LinkiesTableCell}>
                <div className={styles.LinkiesTablePlaceholder} />
              </div>
              <div className={styles.LinkiesTableCell}>
                <div className={styles.LinkiesTablePlaceholder} />
              </div>
              <div className={styles.LinkiesTableCell}>
                <div className={styles.LinkiesTablePlaceholder} />
              </div>
            </div>
          ))
        }
        </GuardedLinkProvider>
      </div>
    </div>
  );
};

export default LinkiesTable;