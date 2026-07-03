import React from "react";

interface GoldRuleProps {
  className?: string;
  style?: React.CSSProperties;
}

export default function GoldRule({ className = "", style }: GoldRuleProps) {
  return (
    <hr
      className={`border-none ${className}`}
      style={{
        height: "0.5px",
        backgroundColor: "var(--bhi-gold)",
        ...style,
      }}
    />
  );
}
