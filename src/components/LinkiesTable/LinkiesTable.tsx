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
  onlineOnly: boolean;
  onOnlineOnlyChange?: (value: boolean) => void;
}

type SortColumn = 'domain' | 'requests' | 'reliability' | 'status' | 'loadTime';
type SortDirection = 'asc' | 'desc';

const LinkiesTable = ({
  color = "magenta",
  linkData,
  onlineOnly,
  onOnlineOnlyChange
}: LinkiesTableProps) => {
  const [expandedRows, setExpandedRows] = React.useState<Record<number, boolean>>({});
  const [sortColumn, setSortColumn] = React.useState<SortColumn | null>(null);
  const [sortDirection, setSortDirection] = React.useState<SortDirection>('asc');

  const handleExpandClick = (i: number) => {
    setExpandedRows(prev => ({ ...prev, [i]: !prev[i] }));
  };

  const handleSort = (column: SortColumn) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const sortedData = React.useMemo(() => {
    if (!linkData) return undefined;
    
    if (!sortColumn) return linkData;
    
    return [...linkData].sort((a, b) => {
      let aValue: number | string;
      let bValue: number | string;
      
      switch (sortColumn) {
        case 'domain':
          aValue = safeHostname(a.url).toLowerCase();
          bValue = safeHostname(b.url).toLowerCase();
          break;
        case 'requests':
          aValue = a.requests ?? 0;
          bValue = b.requests ?? 0;
          break;
        case 'reliability':
          aValue = a.reliability ?? 0;
          bValue = b.reliability ?? 0;
          break;
        case 'loadTime':
          aValue = a.loadTime ?? 0;
          bValue = b.loadTime ?? 0;
          break;
        case 'status':
          const statusOrder = { online: 4, maintenance: 3, unknown: 2, offline: 1 };
          aValue = statusOrder[a.status as keyof typeof statusOrder] ?? 0;
          bValue = statusOrder[b.status as keyof typeof statusOrder] ?? 0;
          break;
        default:
          return 0;
      }
      
      if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }, [linkData, sortColumn, sortDirection]);

  return (
    <>
      <div className={`color-${color} ${styles.LinkiesTable}`}>
      <div className={styles.LinkiesTableHead}>
        <div className={styles.LinkiesTableRow}>
          <div className={`${styles.LinkiesTableCell} ${styles.SortableHeader}`} onClick={() => handleSort('domain')}>
            <Typography glow>
              Link
              {sortColumn === 'domain' && (
                <Icon
                  path={mdiTriangle}
                  size={0.6}
                  rotate={sortDirection === 'asc' ? 0 : 180}
                  className={styles.SortIcon}
                />
              )}
            </Typography>
          </div>
          <div className={`${styles.LinkiesTableCell} ${styles.SortableHeader}`} onClick={() => handleSort('requests')}>
            <Typography glow>
              Requests (1 week)
              {sortColumn === 'requests' && (
                <Icon
                  path={mdiTriangle}
                  size={0.6}
                  rotate={sortDirection === 'asc' ? 0 : 180}
                  className={styles.SortIcon}
                />
              )}
            </Typography>
          </div>
          <div className={`${styles.LinkiesTableCell} ${styles.SortableHeader}`} onClick={() => handleSort('status')}>
            <Typography glow>
              Status
              {sortColumn === 'status' && (
                <Icon
                  path={mdiTriangle}
                  size={0.6}
                  rotate={sortDirection === 'asc' ? 0 : 180}
                  className={styles.SortIcon}
                />
              )}
            </Typography>
          </div>
          <div className={`${styles.LinkiesTableCell} ${styles.SortableHeader}`} onClick={() => handleSort('loadTime')}>
            <Typography glow>
              Load time
              {sortColumn === 'loadTime' && (
                <Icon
                  path={mdiTriangle}
                  size={0.6}
                  rotate={sortDirection === 'asc' ? 0 : 180}
                  className={styles.SortIcon}
                />
              )}
            </Typography>
          </div>
          <div className={`${styles.LinkiesTableCell} ${styles.SortableHeader}`} onClick={() => handleSort('reliability')}>
            <Typography glow>
              Reliability
              {sortColumn === 'reliability' && (
                <Icon
                  path={mdiTriangle}
                  size={0.6}
                  rotate={sortDirection === 'asc' ? 0 : 180}
                  className={styles.SortIcon}
                />
              )}
            </Typography>
          </div>
        </div>
      </div>
      <div className={styles.LinkiesTableBody}>
        <GuardedLinkProvider>
        {
          sortedData ? sortedData.map((link, i) => {
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
          checked={onlineOnly}
          onCheckedChange={onOnlineOnlyChange}
        />
      </div>
    </>
  );
};

export default LinkiesTable;
