'use client';

import React, { useState, useEffect, useRef } from 'react';
import styles from './GuardedLink.module.scss';
import type { ThemeColor } from '@/types/colors';
import { useGuardedLinkContext } from '@/context/GuardedLinkContext';

interface GuardedLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  hoverUnderline?: boolean;
  glow?: boolean;
  color?: ThemeColor;
  fontSize?: number | string;
  children: string;
}

const getRandomFragment = (text: string): string => {
  let fragment = '';
  for (let i = 0; i < text.length; i++) {
    if (Math.random() < 0.35) {
      fragment += '\u00A0';
    } else {
      fragment += text[i];
    }
  }
  return fragment;
};

const GuardedLink = ({
  hoverUnderline = false,
  glow = false,
  color = 'magenta',
  fontSize,
  children,
  href,
  target,
  rel,
  ...props
}: GuardedLinkProps) => {
  const [currentText, setCurrentText] = useState('');
  const { timer, guardEnabled } = useGuardedLinkContext();
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (guardEnabled) {
      setCurrentText(getRandomFragment(children));
    } else {
      setCurrentText(children);
    }
  }, [children, timer, guardEnabled]);

  useEffect(() => {
    if (linkRef.current) {
      linkRef.current.style.setProperty('--gl-text', `"${guardEnabled ? currentText : children}"`);
    }
  }, [
    currentText,
    guardEnabled,
    children
  ]);

  return (
    <a
      ref={linkRef}
      {...props}
      href={href}
      className={`${styles.GuardedLink} color-${color}`}
      style={{
        fontSize,
      }}
      draggable={false}
      {...(hoverUnderline && { 'data-hover-underline': 1 })}
      {...(glow && { 'data-glow': 1 })}
      target={target ?? '_blank'}
      rel={(target ?? '_blank') === '_blank' ? ['noopener', 'noreferrer', ...(rel ? rel.split(' ') : [])].filter((v, i, a) => a.indexOf(v) === i).join(' ') : rel}
    />
  );
};

export default GuardedLink;
