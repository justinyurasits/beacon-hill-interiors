import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/components/Logo";
import GoldRule from "@/components/GoldRule";
import SectionLabel from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "Beacon Hill Interiors — Private Home Services Boston",
  description:
    "Private home services for Boston's refined residences — cleaning, painting, refresh work, and home coordination through one trusted point of accountability.",
};

export default function Home() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-center pt-[72px]" style={{ minHeight: "max(600px, 100vh)" }}>
        <Image src="/images/hero.webp" alt="" fill priority className="object-cover" />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(44,44,44,0.62)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.55) 100%)" }} />

        <div className="relative max-w-6xl mx-auto px-8 py-24 md:py-32 flex flex-col items-center text-center w-full">
          <Logo height={48} className="text-bhi-white mb-10" style={{ filter: "drop-shadow(0 1px 4px rgba(0,0,0,0.4))" }} />

          <p
            className="text-[11px] uppercase tracking-[0.2em] mb-6"
            style={{ fontFamily: "var(--bhi-font-sans)", color: "rgba(255,255,255,0.85)", textShadow: "0 1px 3px rgba(0,0,0,0.5)" }}
          >
            Private Home Services &middot; Boston
          </p>

          <h1
            className="text-[42px] md:text-[56px] lg:text-[64px] uppercase tracking-[0.06em] leading-[1.1] mb-8 max-w-3xl"
            style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-white)", textShadow: "0 1px 4px rgba(0,0,0,0.4)" }}
          >
            For Homes Requiring the Highest Standard.
          </h1>

          <p
            className="text-[18px] leading-[1.8] mb-10"
            style={{ fontFamily: "var(--bhi-font)", color: "rgba(255,255,255,0.9)", maxWidth: "640px", textShadow: "0 1px 4px rgba(0,0,0,0.4)" }}
          >
            Beacon Hill Interiors provides premium interior care, cleaning,
            painting, and private home services for Boston homeowners who require
            discretion, consistency, and the highest quality.
          </p>

          <Link
            href="/contact"
            className="inline-block text-[10px] uppercase tracking-[0.2em] px-8 py-4 transition-opacity hover:opacity-80"
            style={{ fontFamily: "var(--bhi-font-sans)", backgroundColor: "var(--bhi-white)", color: "var(--bhi-charcoal)" }}
          >
            Inquire About Availability
          </Link>

          <p
            className="text-[14px] italic mt-5"
            style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-gold)", textShadow: "0 1px 3px rgba(0,0,0,0.5)" }}
          >
            Confidence Without Supervision.
          </p>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32" style={{ backgroundColor: "var(--bhi-linen)" }}>
        <div className="max-w-6xl mx-auto px-8">
          <div className="mb-16">
            <SectionLabel className="mb-6">What We Handle</SectionLabel>
            <h2
              className="text-[28px] md:text-[36px] leading-[1.25] mb-5"
              style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-charcoal)" }}
            >
              Everything your home needs. Nothing you have to manage.
            </h2>
            <p
              className="text-[17px] italic leading-[1.7] mb-8"
              style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-warm-gray)", maxWidth: "600px" }}
            >
              One relationship. One standard. All the details handled.
            </p>
            <GoldRule className="max-w-xs" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                href: "/services#interior-care",
                name: "Interior Care & Cleaning",
                image: "/images/cleaning.webp",
                bullets: [
                  "Recurring weekly or biweekly cleaning",
                  "Deep cleaning & seasonal resets",
                  "Move-in / Move-out preparation",
                  "Post-construction cleaning",
                ],
              },
              {
                href: "/services#interior-refresh",
                name: "Interior Painting & Refresh",
                image: "/images/painting.webp",
                bullets: [
                  "Full room interior painting",
                  "Touch-ups, trim & millwork",
                  "Accent walls & specialty finishes",
                  "Premium materials, clean execution",
                ],
              },
              {
                href: "/services#stewardship",
                name: "Private Home Services",
                image: "/images/homeservices.webp",
                bullets: [
                  "Vendor coordination & scheduling",
                  "Access management & building protocols",
                  "Seasonal readiness & property oversight",
                  "Punch list support & light maintenance",
                ],
              },
            ].map((svc) => (
              <div
                key={svc.name}
                className="flex flex-col"
                style={{ border: "0.5px solid var(--bhi-sand)", backgroundColor: "var(--bhi-linen)" }}
              >
                <div className="relative w-full shrink-0" style={{ height: 220 }}>
                  <Image src={svc.image} alt="" fill className="object-cover" />
                </div>
                <div className="flex flex-col flex-1 px-8 pb-8">
                  <GoldRule />
                  <p
                    className="text-[13px] font-bold uppercase tracking-[0.22em] mt-8 mb-5"
                    style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-charcoal)" }}
                  >
                    {svc.name}
                  </p>
                  <ul className="flex flex-col gap-3 flex-1 mb-8">
                    {svc.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-3 text-[16px] leading-[1.7]"
                        style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-warm-gray)" }}
                      >
                        <span
                          className="shrink-0 mt-[0.6em]"
                          style={{ color: "var(--bhi-gold)", fontFamily: "var(--bhi-font-sans)", fontSize: "12px", lineHeight: 1 }}
                          aria-hidden="true"
                        >—</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={svc.href}
                    className="text-xs uppercase tracking-[0.18em] inline-flex items-center gap-2 transition-opacity hover:opacity-70"
                    style={{ fontFamily: "var(--bhi-font-sans)", color: "var(--bhi-gold)" }}
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ONE TRUSTED CALL ─────────────────────────────────────────── */}
      <section className="py-24 md:py-32" style={{ backgroundColor: "#252525" }}>
        <div className="max-w-6xl mx-auto px-8 flex flex-col items-center text-center">
          <SectionLabel className="mb-8" style={{ color: "var(--bhi-gold)" }}>
            One Trusted Point of Accountability
          </SectionLabel>
          <h2
            className="text-[28px] md:text-[38px] leading-[1.2] mb-8 max-w-3xl"
            style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-white)" }}
          >
            You shouldn&rsquo;t have to manage five vendors to keep your home running.
          </h2>
          <p
            className="text-[17px] leading-[1.85] mb-6"
            style={{ fontFamily: "var(--bhi-font)", color: "#9A9490", maxWidth: "680px" }}
          >
            Finding one person to clean, another to paint, another to handle a punch
            list, another to meet the vendor, another to prepare the home before guests
            arrive — that is not a solved problem. It is a management job you didn&rsquo;t
            ask for.
          </p>
          <p
            className="text-[17px] leading-[1.85] mb-16"
            style={{ fontFamily: "var(--bhi-font)", color: "#9A9490", maxWidth: "680px" }}
          >
            Beacon Hill Interiors brings these services together under one accountable
            relationship. Your home is cared for consistently, quietly, and correctly —
            without you having to coordinate any of it.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 w-full mb-16">
            {[
              {
                n: "01",
                title: "Cleaning & Care",
                body: "Recurring or as-needed, to a standard that shows.",
              },
              {
                n: "02",
                title: "Painting & Refresh",
                body: "Precise, clean, and completely turnkey.",
              },
              {
                n: "03",
                title: "Coordination & Oversight",
                body: "Vendors, access, scheduling — handled before you think to ask.",
              },
            ].map((col) => (
              <div key={col.n} className="flex flex-col items-center text-center">
                <p
                  className="text-xs uppercase tracking-[0.25em] mb-4"
                  style={{ fontFamily: "var(--bhi-font-sans)", color: "var(--bhi-gold)" }}
                >
                  {col.n}
                </p>
                <GoldRule className="w-full mb-6" style={{ opacity: 0.3 }} />
                <h3
                  className="text-sm uppercase tracking-[0.15em] mb-3"
                  style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-white)" }}
                >
                  {col.title}
                </h3>
                <p
                  className="text-[15px] leading-[1.75]"
                  style={{ fontFamily: "var(--bhi-font)", color: "#9A9490" }}
                >
                  {col.body}
                </p>
              </div>
            ))}
          </div>

          <p
            className="text-[16px] italic"
            style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-gold)" }}
          >
            One call. One relationship. One standard.
          </p>
        </div>
      </section>

      {/* ── ABOUT SNIPPET ────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "var(--bhi-linen)" }}>
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 py-24 md:py-32 px-8 md:px-16 md:w-[55%]">
            <SectionLabel className="mb-6">About Beacon Hill Interiors</SectionLabel>
            <h2
              className="text-[28px] md:text-[34px] uppercase tracking-[0.06em] leading-[1.2] mb-8"
              style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-charcoal)" }}
            >
              Small by design. Exceptional by standard.
            </h2>
            <GoldRule className="mb-8" />
            <p
              className="text-[16px] leading-[1.8] mb-6"
              style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-warm-gray)" }}
            >
              Your home reflects how you live. It should feel cared for, finished,
              and quietly under control — without requiring your attention to keep
              it that way.
            </p>
            <p
              className="text-[16px] leading-[1.8] mb-6"
              style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-warm-gray)" }}
            >
              Beacon Hill Interiors was founded by Justin Yurasits, a Massachusetts
              Licensed Construction Supervisor and General Contractor with nearly two
              decades of experience in Boston&rsquo;s finest residential buildings. That
              background means we understand your home — the materials, the building
              protocols, the standard of finish your residence requires — at a level
              most service providers simply don&rsquo;t.
            </p>
            <p
              className="text-[16px] leading-[1.8] mb-10"
              style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-warm-gray)" }}
            >
              We work with a small number of clients. We are not trying to grow
              beyond what we can do exceptionally well.
            </p>
            <Link
              href="/about"
              className="text-xs uppercase tracking-[0.2em] inline-flex items-center gap-2 transition-opacity hover:opacity-70"
              style={{ fontFamily: "var(--bhi-font-sans)", color: "var(--bhi-charcoal)" }}
            >
              Our story
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div
            className="relative w-full md:w-[45%] shrink-0"
            style={{ minHeight: "220px", border: "1px solid var(--bhi-sand)" }}
          >
            <Image src="/images/services.webp" alt="" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* ── REFERRAL PARTNERS ────────────────────────────────────────── */}
      <section className="py-24 md:py-32" style={{ backgroundColor: "var(--bhi-linen)" }}>
        <div className="max-w-6xl mx-auto px-8">
          <SectionLabel className="mb-6">For Referral Partners</SectionLabel>
          <h2
            className="text-[28px] md:text-[36px] leading-[1.25] mb-8 max-w-2xl"
            style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-charcoal)" }}
          >
            We work closely with those who care for Boston&rsquo;s finest homes.
          </h2>
          <p
            className="text-[17px] leading-[1.85] mb-16"
            style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-warm-gray)", maxWidth: "680px" }}
          >
            Beacon Hill Interiors is a trusted resource for realtors, interior
            designers, property managers, and contractors who need a reliable partner
            for the interior care, refresh work, and preparation their clients&rsquo;
            homes require.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Realtors & Presale Specialists",
                body: "Pre-listing interior refresh — cleaning, painting, touch-ups, and punch list work that makes a home show-ready. A single call gets the home prepared to its best standard before staging or photography.",
              },
              {
                title: "Interior Designers",
                body: "Post-installation cleaning, touch-ups, and ongoing maintenance that protects finished spaces. We understand the standard your completed work deserves.",
              },
              {
                title: "Property Managers & Building Staff",
                body: "A licensed, insured, COI-ready operator who understands managed building protocols. We coordinate with building management directly — your residents never have to.",
              },
            ].map((col) => (
              <div key={col.title} style={{ border: "0.5px solid var(--bhi-sand)", padding: "32px" }}>
                <GoldRule className="mb-6" />
                <h3
                  className="text-[11px] uppercase tracking-[0.2em] mb-5"
                  style={{ fontFamily: "var(--bhi-font-sans)", color: "var(--bhi-charcoal)" }}
                >
                  {col.title}
                </h3>
                <p
                  className="text-[15px] leading-[1.8]"
                  style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-warm-gray)" }}
                >
                  {col.body}
                </p>
              </div>
            ))}
          </div>

          <p
            className="text-[14px] italic text-center mt-12"
            style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-warm-gray)" }}
          >
            To discuss a referral relationship, reach us directly at{" "}
            <a
              href="mailto:info@beaconhillinteriors.com"
              className="transition-opacity hover:opacity-70"
              style={{ color: "var(--bhi-gold)" }}
            >
              info@beaconhillinteriors.com
            </a>
          </p>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────────────────────────── */}
      <section className="bg-bhi-white py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-8">
          <div className="mb-16">
            <SectionLabel className="mb-6">How It Works</SectionLabel>
            <h2
              className="text-[28px] md:text-[34px] uppercase tracking-[0.06em] leading-[1.2] max-w-2xl mb-5"
              style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-charcoal)" }}
            >
              Simple, considered, and built around your home.
            </h2>
            <p
              className="text-[17px] italic"
              style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-warm-gray)" }}
            >
              No bids. No scheduling hassles. No follow-up required.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
            {[
              {
                n: "01",
                title: "Inquiry",
                body: "Reach out through our contact form or by referral. We'll respond within one business day and schedule a brief conversation to learn about your home and what you're looking for.",
              },
              {
                n: "02",
                title: "Consultation",
                body: "We visit your residence, assess what's needed, and put together a service recommendation tailored to your home. No pressure. No generic proposals.",
              },
              {
                n: "03",
                title: "Service Begins",
                body: "Once we've agreed on scope and schedule, we get to work — and stay accountable to the standard we've set from day one.",
              },
            ].map((step) => (
              <div key={step.n} className="flex flex-col">
                <span
                  className="text-xs tracking-[0.2em] uppercase mb-4"
                  style={{ fontFamily: "var(--bhi-font-sans)", color: "var(--bhi-gold)" }}
                >
                  {step.n}
                </span>
                <GoldRule className="mb-6" />
                <h3
                  className="text-sm uppercase tracking-[0.15em] mb-4"
                  style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-charcoal)" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-[15px] leading-[1.75]"
                  style={{ color: "var(--bhi-warm-gray)" }}
                >
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE DETAILS ARE HANDLED ───────────────────────────────────── */}
      <section className="py-24 md:py-32" style={{ backgroundColor: "#E7E0D4" }}>
        <div className="max-w-6xl mx-auto px-8">
          <SectionLabel className="mb-6">For Your Building and Your Peace of Mind</SectionLabel>
          <h2
            className="text-[28px] md:text-[36px] leading-[1.25] mb-8 max-w-2xl"
            style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-charcoal)" }}
          >
            The details are handled before we start.
          </h2>
          <GoldRule className="mb-8 max-w-xs" />
          <p
            className="text-[17px] leading-[1.85] mb-12"
            style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-warm-gray)", maxWidth: "680px" }}
          >
            Beacon Hill Interiors operates with the documentation, insurance, and
            building awareness expected in Boston&rsquo;s refined residential properties.
            Every engagement is covered. Every building requirement is managed. You
            never have to ask.
          </p>

          <ul className="flex flex-col gap-6 mb-12" style={{ maxWidth: "680px" }}>
            {[
              "Licensed construction background — Massachusetts Licensed Construction Supervisor and General Contractor",
              "Fully insured — general liability and workers’ compensation on every engagement",
              "Building-compliant — COIs, elevator scheduling, access protocols, and building manager coordination handled directly",
              "COI-ready — certificates of insurance provided to building management upon request",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-4 text-[16px] leading-[1.75]"
                style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-warm-gray)" }}
              >
                <span
                  className="shrink-0 mt-[0.1em]"
                  style={{ color: "var(--bhi-gold)", fontFamily: "var(--bhi-font-sans)", fontSize: "14px" }}
                  aria-hidden="true"
                >—</span>
                {item}
              </li>
            ))}
          </ul>

          <p
            className="text-[15px] italic"
            style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-warm-gray)" }}
          >
            This is what professional oversight looks like.
          </p>
        </div>
      </section>

      {/* ── CONTACT CTA ──────────────────────────────────────────────── */}
      <section className="relative flex items-center" style={{ minHeight: "280px" }}>
        <Image src="/images/hero.webp" alt="" fill className="object-cover" />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(44,44,44,0.60)" }} />
        <div className="relative z-10 w-full py-24 md:py-32 px-8 md:px-16 flex flex-col items-center text-center">
          <div className="max-w-2xl w-full flex flex-col items-center">
            <SectionLabel className="mb-6" style={{ color: "var(--bhi-white)" }}>
              Inquire About Availability
            </SectionLabel>
            <h2
              className="text-[28px] md:text-[40px] uppercase tracking-[0.06em] leading-[1.2] mb-8"
              style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-white)" }}
            >
              Inquire About Availability
            </h2>
            <GoldRule className="mb-8 w-full" />
            <p
              className="text-[16px] leading-[1.8] mb-10"
              style={{ fontFamily: "var(--bhi-font)", color: "rgba(255,255,255,0.85)", maxWidth: "560px" }}
            >
              Beacon Hill Interiors accepts new client relationships selectively.
              To explore whether we might be a good fit for your home, please
              complete the form below.
            </p>
            <Link
              href="/contact"
              className="inline-block text-[10px] uppercase tracking-[0.2em] px-8 py-4 transition-opacity hover:opacity-80"
              style={{ fontFamily: "var(--bhi-font-sans)", backgroundColor: "var(--bhi-white)", color: "var(--bhi-charcoal)" }}
            >
              Inquire About Availability
            </Link>
            <p
              className="text-[14px] italic mt-6"
              style={{ fontFamily: "var(--bhi-font)", color: "rgba(255,255,255,0.7)" }}
            >
              Every inquiry is reviewed personally. We will respond within one business day.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
