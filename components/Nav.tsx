"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./Logo";

type NavLink = { href: string; label: string };

const navLinks: NavLink[] = [
  { href: "/residential", label: "Residential" },
  { href: "/commercial", label: "Commercial" },
  { href: "/construction", label: "Construction" },
  { href: "/punchlist", label: "Punch List" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-bhi-white transition-all duration-300"
      style={{
        borderBottom: scrolled ? "1px solid var(--bhi-sand)" : "1px solid transparent",
      }}
    >
      <div className="max-w-6xl mx-auto px-8 h-[72px] flex items-center justify-between">
        {/* Wordmark */}
        <Link
          href="/"
          className="flex items-center gap-3 transition-opacity hover:opacity-80 shrink-0"
          aria-label="Beacon Hill Interiors — Home"
        >
          <Logo height={30} className="text-bhi-charcoal" />
          <span
            className="text-xs uppercase tracking-[0.22em]"
            style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-charcoal)" }}
          >
            Beacon Hill Interiors
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[10px] uppercase tracking-[0.2em] transition-opacity hover:opacity-60"
              style={{ fontFamily: "var(--bhi-font-sans)", color: "var(--bhi-warm-gray)" }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="text-[10px] uppercase tracking-[0.2em] px-5 py-2.5 transition-opacity hover:opacity-80 ml-2"
            style={{
              fontFamily: "var(--bhi-font-sans)",
              backgroundColor: "var(--bhi-charcoal)",
              color: "var(--bhi-white)",
            }}
          >
            Inquire
          </Link>
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2 transition-opacity hover:opacity-60"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span
            className="block w-6 transition-all duration-200"
            style={{
              height: "1px",
              backgroundColor: "var(--bhi-charcoal)",
              transformOrigin: "center",
              transform: menuOpen ? "translateY(5px) rotate(45deg)" : "none",
            }}
          />
          <span
            className="block w-6 transition-all duration-200"
            style={{
              height: "1px",
              backgroundColor: "var(--bhi-charcoal)",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-6 transition-all duration-200"
            style={{
              height: "1px",
              backgroundColor: "var(--bhi-charcoal)",
              transformOrigin: "center",
              transform: menuOpen ? "translateY(-5px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="lg:hidden"
          style={{ borderTop: "1px solid var(--bhi-sand)" }}
        >
          <nav
            className="flex flex-col px-8 py-8 gap-6 bg-bhi-white"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs uppercase tracking-[0.2em] transition-opacity hover:opacity-60"
                style={{ fontFamily: "var(--bhi-font-sans)", color: "var(--bhi-warm-gray)" }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="text-xs uppercase tracking-[0.2em] px-5 py-3 text-center mt-2 transition-opacity hover:opacity-80"
              style={{
                fontFamily: "var(--bhi-font-sans)",
                backgroundColor: "var(--bhi-charcoal)",
                color: "var(--bhi-white)",
              }}
              onClick={() => setMenuOpen(false)}
            >
              Request a Proposal
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
