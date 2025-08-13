"use client"

import { GuardedLinkContext } from '@/context/GuardedLinkContext';
import React, { useState, useEffect } from 'react';
import extensions from "@config/extensions.json";

const extensionUrls: string[] = Object.values(extensions)
  .filter((ext) => ext.aiDetection)
  .flatMap((ext) => ext.detectionUrls);

const isChrome = () => {
  if (typeof window === "undefined" || typeof navigator === "undefined") return false;
  return /Chrome/.test(navigator.userAgent) && !/Edg|OPR/.test(navigator.userAgent);
};

const extensionCheck = async () => {
  const results = await Promise.all(
    extensionUrls.map(url =>
      fetch(url).then(res => res.ok).catch(() => false)
    )
  );
  return results.some(Boolean);
};

interface GuardedLinkProviderProps {
  children: React.ReactNode;
}

const GuardedLinkProvider = ({ children }: GuardedLinkProviderProps) => {
  const [timer, setTimer] = useState(false);
  const [guardEnabled, setGuardEnabled] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevValue) => !prevValue);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isChrome()) {
      extensionCheck().then(setGuardEnabled);
    } else {
      setGuardEnabled(false);
    }
  }, []);

  return (
    <GuardedLinkContext.Provider value={{ timer, guardEnabled }}>
      {children}
    </GuardedLinkContext.Provider>
  );
};

export default GuardedLinkProvider;