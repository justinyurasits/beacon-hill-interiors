interface GoldRuleProps {
  className?: string;
}

export default function GoldRule({ className = "" }: GoldRuleProps) {
  return (
    <hr
      className={`border-none ${className}`}
      style={{
        height: "0.5px",
        backgroundColor: "var(--bhi-gold)",
      }}
    />
  );
}
