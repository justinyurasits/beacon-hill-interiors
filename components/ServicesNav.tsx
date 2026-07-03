"use client";

import { useState, useEffect } from "react";

const links = [
  { id: "interior-care", number: "01", label: "Interior Care & Cleaning" },
  { id: "interior-refresh", number: "02", label: "Interior Painting & Refresh" },
  { id: "stewardship", number: "03", label: "Private Home Services" },
];

export default function ServicesNav() {
  const [active, setActive] = useState("interior-care");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-10% 0px -80% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div
      className="sticky z-40 bg-bhi-white"
      style={{
        top: "72px",
        borderBottom: "1px solid var(--bhi-sand)",
      }}
    >
      <div className="max-w-6xl mx-auto px-8">
        <nav
          className="flex items-center gap-6 md:gap-10 py-4 overflow-x-auto"
          aria-label="Jump to service"
        >
          {links.map(({ id, number, label }) => {
            const isActive = active === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                className="flex items-center gap-2 shrink-0 transition-opacity hover:opacity-80"
                style={{
                  fontFamily: "var(--bhi-font-sans)",
                  color: isActive ? "var(--bhi-charcoal)" : "var(--bhi-warm-gray)",
                  textDecoration: "none",
                }}
              >
                <span
                  className="text-[10px] uppercase tracking-[0.2em]"
                  style={{ color: "var(--bhi-gold)" }}
                >
                  {number}
                </span>
                <span
                  className="text-[10px] uppercase tracking-[0.18em]"
                  style={{
                    paddingBottom: "2px",
                    borderBottom: isActive
                      ? "0.5px solid var(--bhi-gold)"
                      : "0.5px solid transparent",
                  }}
                >
                  {label}
                </span>
              </a>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
