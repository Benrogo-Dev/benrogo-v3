'use client';

import { Checkbox, ColoredIcon, GuardedLink, GuardedLinkProvider, Rating, Typography } from '@/components';
import React, { useEffect, useState } from 'react';
import styles from './LinkiesTable.module.scss';
import type { ThemeColor } from '@/types/colors';
import { mdiTriangle } from '@mdi/js';
import { safeHostname } from '@/utils/url';

interface LinkData {
  url: string;
  requests?: number;
  status?: 'online' | 'offline' | 'maintenance' | 'unknown';
  loadTime?: number;
  reliability?: number;
}

interface LinkiesTableProps {
  color?: ThemeColor;
}

type SortColumn = 'domain' | 'requests' | 'reliability' | 'status' | 'loadTime';
type SortDirection = 'asc' | 'desc';

const LinkiesTable = ({
  color = 'magenta'
}: LinkiesTableProps) => {
  const [expandedRows, setExpandedRows] = useState<Record<number, boolean>>({});
  const [sortColumn, setSortColumn] = useState<SortColumn | null>('requests');
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc');
  const [onlineOnly, setOnlineOnly] = useState(false);
  const [apiData, setApiData] = useState<LinkData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`/api/linkies?onlineOnly=${onlineOnly}&sortColumn=${sortColumn}&sortDirection=${sortDirection}`);
        if (!response.ok) {
          throw new Error('Error fetching linkies data');
        }
        const data = await response.json();
        setApiData(data);
      } catch {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [onlineOnly, sortColumn, sortDirection]);

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

  return (
    <>
      <div className={`color-${color} ${styles.LinkiesTableControls}`}>
        <Checkbox
          label="online linkies only"
          labelPosition="right"
          color="green"
          checked={onlineOnly}
          onCheckedChange={() => setOnlineOnly(!onlineOnly)}
        />
      </div>
      <div className={`color-${color} ${styles.LinkiesTable}`}>
        <div className={styles.LinkiesTableHead}>
          <div className={styles.LinkiesTableRow}>
            <div className={`${styles.LinkiesTableCell} ${styles.SortableHeader}`} onClick={() => handleSort('domain')}>
              <Typography glow>
                Link
                {sortColumn === 'domain' && (
                  <ColoredIcon
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
                  <ColoredIcon
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
                  <ColoredIcon
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
                  <ColoredIcon
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
                  <ColoredIcon
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
          {
            apiData.length !== 0 &&
            <GuardedLinkProvider>
              {
                apiData.map((link, i) => {
                  const rowColor = (
                    link.status === 'online' ? 'green' :
                      link.status === 'offline' ? 'red' :
                        link.status === 'maintenance' ? 'orange' :
                          link.status === 'unknown' ? 'yellow' :
                            'magenta'
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
                          <ColoredIcon
                            path={mdiTriangle}
                            size={0.8}
                            rotate={expandedRows[i] ? 180 : 270}
                            className={styles.LinkiesTableExpandArrowIcon}
                          />
                        </div>
                      </div>
                      <div className={styles.LinkiesTableCell} data-label="Requests">
                        <Typography color={rowColor}>{link.requests?.toLocaleString() ?? 'ERROR'}</Typography>
                      </div>
                      <div className={styles.LinkiesTableCell} data-label="Status">
                        <Typography color={rowColor}>{link.status?.toUpperCase() ?? 'ERROR'}</Typography>
                      </div>
                      <div className={styles.LinkiesTableCell} data-label="Load time">
                        <Typography color={rowColor}>{link?.loadTime ?? 'N/A'}s</Typography>
                      </div>
                      <div className={styles.LinkiesTableCell} data-label="Reliability">
                        <Rating value={link?.reliability ?? 0} max={10} color={rowColor} />
                      </div>
                    </div>
                  );
                })
              }
            </GuardedLinkProvider>
          }
          {
            loading || error &&
            [...Array(5)].map((_, i) => (
              <div className={styles.LinkiesTableRow} key={i}>
                <div className={styles.LinkiesTableCell}>
                  <div className={`${styles.LinkiesTablePlaceholder} ${loading && styles.loading} ${error && styles.error}`} />
                </div>
                <div className={styles.LinkiesTableCell}>
                  <div className={`${styles.LinkiesTablePlaceholder} ${loading && styles.loading} ${error && styles.error}`} />
                </div>
                <div className={styles.LinkiesTableCell}>
                  <div className={`${styles.LinkiesTablePlaceholder} ${loading && styles.loading} ${error && styles.error}`} />
                </div>
                <div className={styles.LinkiesTableCell}>
                  <div className={`${styles.LinkiesTablePlaceholder} ${loading && styles.loading} ${error && styles.error}`} />
                </div>
                <div className={styles.LinkiesTableCell}>
                  <div className={`${styles.LinkiesTablePlaceholder} ${loading && styles.loading} ${error && styles.error}`} />
                </div>
                <div className={styles.LinkiesTableCell}>
                  <div className={`${styles.LinkiesTablePlaceholder} ${loading && styles.loading} ${error && styles.error}`} />
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
};

export default LinkiesTable;