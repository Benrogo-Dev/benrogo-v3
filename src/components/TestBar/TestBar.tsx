import * as React from "react";

type TestBarProps = {
  color: string;
  neon?: boolean;
};

const TestBar = ({ color, neon }: TestBarProps) => {
  return (
    <div style={{
      backgroundColor: `var(--${color})`,
      boxShadow: neon ? `var(--${color}-neon)` : "none",
      width: 100,
      height: 4
    }}/> 
  )
};

export default TestBar;