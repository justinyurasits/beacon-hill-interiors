import GoldRule from "./GoldRule";
import Link from "next/link";

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  href?: string;
}

export default function ServiceCard({ number, title, description, href }: ServiceCardProps) {
  return (
    <div className="flex flex-col">
      <span
        className="text-xs tracking-[0.2em] uppercase mb-4"
        style={{
          fontFamily: "var(--bhi-font-sans)",
          color: "var(--bhi-gold)",
        }}
      >
        {number}
      </span>
      <GoldRule className="mb-6" />
      <h3
        className="text-sm uppercase tracking-[0.15em] mb-4"
        style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-charcoal)" }}
      >
        {title}
      </h3>
      <p
        className="text-[15px] leading-[1.75] flex-1"
        style={{ color: "var(--bhi-warm-gray)" }}
      >
        {description}
      </p>
      {href && (
        <Link
          href={href}
          className="mt-6 text-xs uppercase tracking-[0.15em] inline-flex items-center gap-2 transition-opacity hover:opacity-70"
          style={{
            fontFamily: "var(--bhi-font-sans)",
            color: "var(--bhi-charcoal)",
          }}
        >
          Learn more
          <span aria-hidden="true">→</span>
        </Link>
      )}
    </div>
  );
}
