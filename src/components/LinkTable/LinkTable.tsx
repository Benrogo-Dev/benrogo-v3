"use client"

import { Link, GuardedLink, Rating, Typography } from "@/components";
import React, { useState } from "react";
import styles from "./LinkTable.module.scss";
import type { ThemeColor } from "@/types/colors";
import Icon from '@mdi/react';
import { mdiTriangle } from "@mdi/js";

interface LinkTableProps {
  color: ThemeColor
}

const LinkTable = ({
  color = "magenta"
}: LinkTableProps) => {
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
        <div className={styles.LinkTableRow}>
          <div className={styles.LinkTableCell}>
            <Link href="#" hoverUnderline color="green">eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</Link>
            <div className={styles.LinkTableExpandArrow}>
              <Icon
                path={mdiTriangle}
                size={0.8}
                rotate={180}
              />
            </div>
          </div>
          <div className={styles.LinkTableCell} data-label="Requests">
            <Typography color="green">1,829,384</Typography>
          </div>
          <div className={styles.LinkTableCell} data-label="Status">
            <Typography color="green">ONLINE</Typography>
          </div>
          <div className={styles.LinkTableCell} data-label="Load time">
            <Typography color="green">1.47s</Typography>
          </div>
          <div className={styles.LinkTableCell} data-label="Reliability">
            <Rating value={5} max={10} color="green" />
          </div>
        </div>
        <div className={styles.LinkTableRow}>
          <div className={styles.LinkTableCell}>
            <Link href="#" hoverUnderline color="yellow">www.google.com</Link>
            <div className={styles.LinkTableExpandArrow}>
              <Icon
                path={mdiTriangle}
                size={0.8}
                rotate={180}
              />
            </div>
          </div>
          <div className={styles.LinkTableCell} data-label="Requests">
            <Typography color="yellow">24,382</Typography>
          </div>
          <div className={styles.LinkTableCell} data-label="Status">
            <Typography color="yellow">UNKNOWN</Typography>
          </div>
          <div className={styles.LinkTableCell} data-label="Load time">
            <Typography color="yellow">N/A</Typography>
          </div>
          <div className={styles.LinkTableCell} data-label="Reliability">
            <Rating value={0} max={10} color="yellow" />
          </div>
        </div>
        <div className={styles.LinkTableRow}>
          <div className={styles.LinkTableCell}>
            <Link href="#" hoverUnderline color="orange">www.example.com</Link>
            <div className={styles.LinkTableExpandArrow}>
              <Icon
                path={mdiTriangle}
                size={0.8}
                rotate={180}
              />
            </div>
          </div>
          <div className={styles.LinkTableCell} data-label="Requests">
            <Typography color="orange">382,196</Typography>
          </div>
          <div className={styles.LinkTableCell} data-label="Status">
            <Typography color="orange">MAINTENANCE</Typography>
          </div>
          <div className={styles.LinkTableCell} data-label="Load time">
            <Typography color="orange">N/A</Typography>
          </div>
          <div className={styles.LinkTableCell} data-label="Reliability">
            <Rating value={6.2} max={10} color="orange" />
          </div>
        </div>
        <div className={styles.LinkTableRow}>
          <div className={styles.LinkTableCell}>
            <Link href="#" hoverUnderline color="red">www.benrogo.net</Link>
            <div className={styles.LinkTableExpandArrow}>
              <Icon
                path={mdiTriangle}
                size={0.8}
                rotate={180}
              />
            </div>
          </div>
          <div className={styles.LinkTableCell} data-label="Requests">
            <Typography color="red">382,129,386</Typography>
          </div>
          <div className={styles.LinkTableCell} data-label="Status">
            <Typography color="red">OFFLINE</Typography>
          </div>
          <div className={styles.LinkTableCell} data-label="Load time">
            <Typography color="red">N/A</Typography>
          </div>
          <div className={styles.LinkTableCell} data-label="Reliability">
            <Rating value={3.1} max={10} color="red" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkTable;