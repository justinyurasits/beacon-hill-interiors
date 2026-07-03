import Link from "next/link";
import Image from "next/image";
import Logo from "@/components/Logo";
import GoldRule from "@/components/GoldRule";
import SectionLabel from "@/components/SectionLabel";

export default function Home() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-center pt-[72px]" style={{ minHeight: "max(600px, 100vh)" }}>
        <Image
          src="/images/hero.webp"
          alt=""
          fill
          priority
          className="object-cover"
        />
        {/* Charcoal overlay 62% */}
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(44,44,44,0.62)" }} />

        <div className="relative max-w-6xl mx-auto px-8 py-24 md:py-32 flex flex-col items-center text-center w-full">
          <Logo height={48} className="text-bhi-white mb-10" style={{ filter: "drop-shadow(0 1px 4px rgba(0,0,0,0.4))" }} />

          <SectionLabel className="mb-8" style={{ color: "var(--bhi-white)", textShadow: "0 1px 4px rgba(0,0,0,0.4)" }}>
            Private Home Services — Boston
          </SectionLabel>

          <h1
            className="text-[42px] md:text-[56px] lg:text-[64px] uppercase tracking-[0.06em] leading-[1.1] mb-8 max-w-3xl"
            style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-white)", textShadow: "0 1px 4px rgba(0,0,0,0.4)" }}
          >
            Your home deserves a higher standard.
          </h1>

          <GoldRule className="mb-8 w-full max-w-xs" />

          <p
            className="text-[18px] leading-[1.8] mb-12"
            style={{ fontFamily: "var(--bhi-font)", color: "rgba(245,242,238,0.85)", maxWidth: "560px", textShadow: "0 1px 4px rgba(0,0,0,0.4)" }}
          >
            Beacon Hill Interiors provides premium interior care, cleaning,
            painting, and private home services for Boston residences that require
            discretion, consistency, and professional oversight.
          </p>

          <Link
            href="/contact"
            className="inline-block text-[10px] uppercase tracking-[0.2em] px-8 py-4 transition-opacity hover:opacity-80"
            style={{
              fontFamily: "var(--bhi-font-sans)",
              backgroundColor: "var(--bhi-white)",
              color: "var(--bhi-charcoal)",
            }}
          >
            Inquire About Your Home
          </Link>
          <p
            className="text-[11px] uppercase tracking-[0.2em] text-center mt-5"
            style={{ fontFamily: "var(--bhi-font-sans)", color: "rgba(255,255,255,0.5)" }}
          >
            Licensed &middot; Fully Insured &middot; Workers&rsquo; Comp Certified &middot; Building-Compliant
          </p>
          <p
            className="text-[14px] italic text-center"
            style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-gold)", marginTop: "16px" }}
          >
            Confidence Without Supervision.
          </p>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32" style={{ backgroundColor: "var(--bhi-linen)" }}>
        <div className="max-w-6xl mx-auto px-8">
          <div className="mb-16">
            <SectionLabel className="mb-6">What We Do</SectionLabel>
            <h2
              className="text-[28px] md:text-[36px] leading-[1.25] mb-8"
              style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-charcoal)" }}
            >
              Three services. One standard.
            </h2>
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
                {/* Photo */}
                <div className="relative w-full shrink-0" style={{ height: 220 }}>
                  <Image src={svc.image} alt="" fill className="object-cover" />
                </div>

                <div className="flex flex-col flex-1 px-8 pb-8">
                  <GoldRule />

                  {/* Service name */}
                  <p
                    className="text-[11px] uppercase tracking-[0.18em] mt-6 mb-5"
                    style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-charcoal)" }}
                  >
                    {svc.name}
                  </p>

                  {/* Bullets */}
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

                  {/* Ghost link */}
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

      {/* ── WHY BHI ──────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "var(--bhi-linen)" }}>
        <div className="flex flex-col md:flex-row">
          {/* Image — mobile: 220px tall; desktop: stretches to full section height */}
          <div
            className="relative w-full md:w-[40%] shrink-0"
            style={{ minHeight: "220px" }}
          >
            <Image src="/images/about.webp" alt="" fill className="object-cover" />
          </div>

          {/* Content */}
          <div className="flex-1 py-24 md:py-32 px-8 md:px-16">
            <div className="mb-14">
              <SectionLabel className="mb-6">The Difference</SectionLabel>
              <h2
                className="text-[28px] md:text-[34px] uppercase tracking-[0.06em] leading-[1.2] mb-8"
                style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-charcoal)" }}
              >
                Professional credentials. No exceptions.
              </h2>
              <GoldRule className="mb-8" />
              <p
                className="text-[16px] leading-[1.8]"
                style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-warm-gray)" }}
              >
                Many home service arrangements are informal by nature. For discerning
                homeowners — especially in managed Boston buildings — that creates
                unnecessary risk, inconsistency, and administrative friction. Beacon
                Hill Interiors was built to operate differently: licensed, insured,
                workers&rsquo; comp certified, and familiar with the protocols required by
                Boston&rsquo;s most demanding residential buildings.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-x-12 md:gap-y-10 mb-14">
              {[
                {
                  title: "Licensed",
                  body: "Massachusetts licensed builder with deep experience in Boston's most complex residential buildings. We understand construction, surfaces, and building systems at a professional level.",
                },
                {
                  title: "Fully Insured",
                  body: "General liability coverage on every engagement. If anything goes wrong in your home, you are fully protected. No gray areas, no claims against your homeowner's policy.",
                },
                {
                  title: "Workers' Comp Certified",
                  body: "Our team members are W-2 employees covered by workers' compensation insurance. Required by Boston's most discerning buildings — and the right way to operate.",
                },
                {
                  title: "Building-Compliant",
                  body: "We know how to work with building managers, service entrances, elevator scheduling, protection requirements, and COI requests.",
                },
              ].map((cred) => (
                <div key={cred.title}>
                  <GoldRule className="mb-5" />
                  <h3
                    className="text-sm uppercase tracking-[0.15em] mb-3"
                    style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-charcoal)" }}
                  >
                    {cred.title}
                  </h3>
                  <p
                    className="text-[15px] leading-[1.75]"
                    style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-warm-gray)" }}
                  >
                    {cred.body}
                  </p>
                </div>
              ))}
            </div>

            <p
              className="text-[15px] italic"
              style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-warm-gray)" }}
            >
              This is the standard your home — and your building — requires. It&rsquo;s the
              only standard we operate to.
            </p>
          </div>
        </div>
      </section>

      {/* ── ABOUT SNIPPET ────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "var(--bhi-linen)" }}>
        <div className="flex flex-col md:flex-row">
          {/* Text — mobile: first; desktop: 55% */}
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
              Beacon Hill Interiors is a private home services firm serving a
              select clientele across Boston&rsquo;s most distinguished neighborhoods.
            </p>
            <p
              className="text-[16px] leading-[1.8] mb-6"
              style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-warm-gray)" }}
            >
              We were founded by a Massachusetts licensed builder with years of
              experience working in Boston&rsquo;s premier residential buildings — Beacon
              Hill brownstones, Back Bay condominiums, luxury high-rises in the heart
              of the city. That background shapes everything about how we operate.
            </p>
            <p
              className="text-[16px] leading-[1.8] mb-10"
              style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-warm-gray)" }}
            >
              We are not a large company. We are not trying to be. Our model
              is intentionally limited — a small number of clients, a carefully
              selected team, and a standard of work that simply cannot be maintained
              at volume.
            </p>
            <Link
              href="/about"
              className="text-xs uppercase tracking-[0.2em] inline-flex items-center gap-2 transition-opacity hover:opacity-70"
              style={{
                fontFamily: "var(--bhi-font-sans)",
                color: "var(--bhi-charcoal)",
              }}
            >
              Our story
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Image — mobile: 220px below text; desktop: 45%, full section height */}
          <div
            className="relative w-full md:w-[45%] shrink-0"
            style={{
              minHeight: "220px",
              border: "1px solid var(--bhi-sand)",
            }}
          >
            <Image src="/images/services.webp" alt="" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────────────────────────── */}
      <section className="bg-bhi-white py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-8">
          <div className="mb-16">
            <SectionLabel className="mb-6">The Process</SectionLabel>
            <h2
              className="text-[28px] md:text-[34px] uppercase tracking-[0.06em] leading-[1.2] max-w-2xl"
              style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-charcoal)" }}
            >
              Simple, considered, and built around your home.
            </h2>
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
                  style={{
                    fontFamily: "var(--bhi-font-sans)",
                    color: "var(--bhi-gold)",
                  }}
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

      {/* ── CONTACT CTA ──────────────────────────────────────────────── */}
      <section
        className="relative flex items-center"
        style={{ minHeight: "280px" }}
      >
        {/* Background image */}
        <Image
          src="/images/hero.webp"
          alt=""
          fill
          className="object-cover"
        />
        {/* 60% charcoal overlay */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(44,44,44,0.60)" }}
        />
        {/* Content */}
        <div className="relative z-10 w-full py-24 md:py-32 px-8 md:px-16">
          <div className="max-w-2xl">
            <SectionLabel
              className="mb-6"
              style={{ color: "var(--bhi-white)" }}
            >
              Get In Touch
            </SectionLabel>
            <h2
              className="text-[28px] md:text-[40px] uppercase tracking-[0.06em] leading-[1.2] mb-8"
              style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-white)" }}
            >
              Taking on a limited number of new clients.
            </h2>
            <GoldRule className="mb-8" />
            <p
              className="text-[16px] leading-[1.8] mb-10"
              style={{ fontFamily: "var(--bhi-font)", color: "rgba(255,255,255,0.85)" }}
            >
              If you&rsquo;re looking for a home services partner who will hold your
              residence to a genuinely high standard, we&rsquo;d like to hear from you.
            </p>
            <Link
              href="/contact"
              className="inline-block text-[10px] uppercase tracking-[0.2em] px-8 py-4 transition-opacity hover:opacity-80 w-full md:w-auto text-center md:text-left"
              style={{
                fontFamily: "var(--bhi-font-sans)",
                backgroundColor: "var(--bhi-white)",
                color: "var(--bhi-charcoal)",
              }}
            >
              Inquire About Your Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
