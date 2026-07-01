interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <p
      className={`text-xs uppercase tracking-[0.2em] ${className}`}
      style={{
        fontFamily: "var(--bhi-font-sans)",
        color: "var(--bhi-gold)",
      }}
    >
      {children}
    </p>
  );
}
