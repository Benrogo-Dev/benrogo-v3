"use client"

import React, { useState, useEffect } from "react";
import styles from "./GuardedLink.module.scss";
import type { ThemeColor } from "@/types/colors";

interface GuardedLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  hoverUnderline?: boolean;
  glow?: boolean;
  color?: ThemeColor;
  fontSize?: number | string;
  children: string;
}

const getFragment = (text: string, fragmentOffset: number): string => {
  let fragment = "";

  for (let i = 0; i < text.length; i++) {
    if ((i+fragmentOffset) % 2 === 0) {
      fragment += text[i];
    } else {
      fragment += "&nbsp;";
    }
  }

  return fragment;
}

const GuardedLink = ({
  hoverUnderline = false,
  glow = false,
  color = "magenta",
  fontSize,
  children,
  ...props
}: GuardedLinkProps) => {
  const [currentText, setCurrentText] = useState("");
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prevOffset) => (prevOffset + 1) % 2);
    }, 40);

    return () => clearInterval(interval);
  });

  useEffect(() => {
    setCurrentText(getFragment(children, offset));
  }, [children, offset]);

  return (
    <a
      {...props}
      className={`${styles.GuardedLink} color-${color}`}
      style={{ fontSize }}
      id="test-link"
      dangerouslySetInnerHTML={{ __html: currentText }}
      {...(hoverUnderline && { 'data-hover-underline': 1 })}
      {...(glow && { 'data-glow': 1 })}
    />
  );
};

export default GuardedLink;