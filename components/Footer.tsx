import Link from "next/link";
import Logo from "./Logo";
import GoldRule from "./GoldRule";

const serviceLinks = [
  { href: "/residential", label: "Residential Interior Care" },
  { href: "/commercial", label: "Commercial & Hospitality" },
  { href: "/construction", label: "Interior Construction & Refresh" },
  { href: "/punchlist", label: "Punch List & Closeout" },
];

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
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
            Private & Commercial Interior Services · Boston, Massachusetts
          </p>
        </div>

        <GoldRule className="mb-12 opacity-30" />

        {/* Navigation columns */}
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-12">
          {/* Services */}
          <div>
            <p
              className="text-[10px] uppercase tracking-[0.2em] mb-4"
              style={{ fontFamily: "var(--bhi-font-sans)", color: "var(--bhi-sand)" }}
            >
              Services
            </p>
            <nav className="flex flex-col gap-2" aria-label="Footer service navigation">
              {serviceLinks.map((link) => (
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

          {/* Company */}
          <div>
            <p
              className="text-[10px] uppercase tracking-[0.2em] mb-4"
              style={{ fontFamily: "var(--bhi-font-sans)", color: "var(--bhi-sand)" }}
            >
              Company
            </p>
            <nav className="flex flex-col gap-2" aria-label="Footer company navigation">
              {companyLinks.map((link) => (
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

          {/* Contact */}
          <div className="md:text-right">
            <p
              className="text-[10px] uppercase tracking-[0.2em] mb-4"
              style={{ fontFamily: "var(--bhi-font-sans)", color: "var(--bhi-sand)" }}
            >
              Contact
            </p>
            <a
              href="tel:+17812278472"
              className="text-xs tracking-wide transition-opacity hover:opacity-60 block"
              style={{ fontFamily: "var(--bhi-font-sans)", color: "var(--bhi-warm-gray)" }}
            >
              (781) 227-8472
            </a>
            <a
              href="mailto:info@beaconhillinteriors.com"
              className="text-xs tracking-wide transition-opacity hover:opacity-60 block mt-1"
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
          </div>
        </div>

        <GoldRule className="mb-8 opacity-20" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <p
            className="text-[11px] tracking-wide"
            style={{ fontFamily: "var(--bhi-font-sans)", color: "var(--bhi-warm-gray)" }}
          >
            © 2026 Beacon Hill Interiors. Licensed · Insured · Building-Compliant.
          </p>
          <p
            className="text-[11px] italic tracking-wide"
            style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-warm-gray)" }}
          >
            One team. Four capabilities. One point of accountability.
          </p>
        </div>
      </div>
    </footer>
  );
}
