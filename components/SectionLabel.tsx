import React from "react";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function SectionLabel({ children, className = "", style }: SectionLabelProps) {
  return (
    <p
      className={`text-xs uppercase tracking-[0.2em] ${className}`}
      style={{
        fontFamily: "var(--bhi-font-sans)",
        color: "var(--bhi-gold)",
        ...style,
      }}
    >
      {children}
    </p>
  );
}
