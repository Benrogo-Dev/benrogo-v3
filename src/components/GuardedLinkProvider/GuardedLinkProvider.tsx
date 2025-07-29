"use client"

import { GuardedLinkContext } from '@/context/GuardedLinkContext';
import React, { useState, useEffect } from 'react';

interface GuardedLinkProviderProps {
  children: React.ReactNode;
}

const GuardedLinkProvider = ({
  children
}: GuardedLinkProviderProps) => {
  const [fragmentOffset, setFragmentOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFragmentOffset((prevOffset) => (prevOffset + 1) % 2);
    }, 40);

    return () => clearInterval(interval);
  });

  return (
    <GuardedLinkContext.Provider value={{ fragmentOffset, setFragmentOffset }}>
      {children}
    </GuardedLinkContext.Provider>
  );
};

export default GuardedLinkProvider;