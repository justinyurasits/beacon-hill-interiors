import Link from "next/link";
import Logo from "./Logo";
import GoldRule from "./GoldRule";

const footerLinks = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const neighborhoods = [
  "Beacon Hill",
  "Back Bay",
  "South End",
  "Brookline",
  "Cambridge",
];

export default function Footer() {
  return (
    <footer
      className="pt-20 pb-10 px-8"
      style={{ backgroundColor: "var(--bhi-charcoal)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Logo + tagline */}
        <div className="flex flex-col items-center text-center mb-12">
          <Logo height={44} className="text-bhi-white mb-6" />
          <p
            className="text-xs uppercase tracking-[0.25em] mb-1"
            style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-white)" }}
          >
            Beacon Hill Interiors
          </p>
          <p
            className="text-xs tracking-wide mt-2 italic"
            style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-sand)" }}
          >
            Private Home Services · Boston, Massachusetts
          </p>
          <p
            className="text-xs tracking-wide mt-1 italic"
            style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-sand)" }}
          >
            Serving Boston, the Inner Suburbs, and Surrounding Communities
          </p>
        </div>

        <GoldRule className="mb-12 opacity-30" />

        {/* Navigation + neighborhoods */}
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-12">
          <div>
            <p
              className="text-[10px] uppercase tracking-[0.2em] mb-4"
              style={{ fontFamily: "var(--bhi-font-sans)", color: "var(--bhi-sand)" }}
            >
              Navigation
            </p>
            <nav className="flex flex-col gap-2" aria-label="Footer navigation">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs uppercase tracking-[0.15em] transition-opacity hover:opacity-60"
                  style={{ fontFamily: "var(--bhi-font-sans)", color: "var(--bhi-warm-gray)" }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p
              className="text-[10px] uppercase tracking-[0.2em] mb-4"
              style={{ fontFamily: "var(--bhi-font-sans)", color: "var(--bhi-sand)" }}
            >
              Serving
            </p>
            <ul className="flex flex-col gap-2">
              {neighborhoods.map((n) => (
                <li
                  key={n}
                  className="text-xs tracking-wide"
                  style={{ fontFamily: "var(--bhi-font-sans)", color: "var(--bhi-warm-gray)" }}
                >
                  {n}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:text-right">
            <p
              className="text-[10px] uppercase tracking-[0.2em] mb-4"
              style={{ fontFamily: "var(--bhi-font-sans)", color: "var(--bhi-sand)" }}
            >
              Contact
            </p>
            <a
              href="mailto:info@beaconhillinteriors.com"
              className="text-xs tracking-wide transition-opacity hover:opacity-60 block"
              style={{ fontFamily: "var(--bhi-font-sans)", color: "var(--bhi-warm-gray)" }}
            >
              info@beaconhillinteriors.com
            </a>
            <p
              className="text-xs tracking-wide mt-1"
              style={{ fontFamily: "var(--bhi-font-sans)", color: "var(--bhi-warm-gray)" }}
            >
              Boston, Massachusetts
            </p>
            <p
              className="text-xs tracking-wide mt-1"
              style={{ fontFamily: "var(--bhi-font-sans)", color: "var(--bhi-warm-gray)" }}
            >
              55 Linwood St.
            </p>
          </div>
        </div>

        <GoldRule className="mb-8 opacity-20" />

        {/* Copyright */}
        <p
          className="text-center text-[11px] tracking-wide"
          style={{ fontFamily: "var(--bhi-font-sans)", color: "var(--bhi-warm-gray)" }}
        >
          © 2026 Beacon Hill Interiors. By referral and by standard.
        </p>
      </div>
    </footer>
  );
}
