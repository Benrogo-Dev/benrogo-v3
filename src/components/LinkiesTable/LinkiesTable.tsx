"use client"

import { GuardedLink, GuardedLinkProvider, Rating, Switch, Typography } from "@/components";
import * as React from "react";
import styles from "./LinkiesTable.module.scss";
import type { ThemeColor } from "@/types/colors";
import Icon from '@mdi/react';
import { mdiTriangle } from "@mdi/js";
import { safeHostname } from "@/utils/url";

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
  onlineOnly?: boolean;
}

const LinkiesTable = ({
  color = "magenta",
  linkData,
  onlineOnly = false
}: LinkiesTableProps) => {
  const [expandedRows, setExpandedRows] = React.useState<Record<number, boolean>>({});
  const [showOnlineOnly, setShowOnlineOnly] = React.useState(onlineOnly);

  const handleExpandClick = (i: number) => {
    setExpandedRows(prev => ({ ...prev, [i]: !prev[i] }));
  };

  const filteredLinkData = React.useMemo(() => {
    if (!linkData) return undefined;
    return showOnlineOnly ? linkData.filter(link => link.status === "online") : linkData;
  }, [linkData, showOnlineOnly]);

  return (
    <>
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
          filteredLinkData ? filteredLinkData.map((link, i) => {
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
                  <GuardedLink href={link.url} color={rowColor} hoverUnderline>{safeHostname(link.url)}</GuardedLink>
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
      <div className={styles.LinkiesTableControls}>
        <Switch
          label="Show online linkies only"
          labelPosition="right"
          color={color}
          checked={showOnlineOnly}
          onCheckedChange={setShowOnlineOnly}
        />
      </div>
    </>
  );
};

export default LinkiesTable;
