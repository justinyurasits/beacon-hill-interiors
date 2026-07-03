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
            Beacon Hill Interiors provides private home care, interior painting,
            and residential refresh services for discerning homes in Boston&rsquo;s
            finest neighborhoods.
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
            className="text-xs italic text-center mt-5"
            style={{ fontFamily: "var(--bhi-font)", color: "rgba(255,255,255,0.8)", textShadow: "0 1px 4px rgba(0,0,0,0.4)" }}
          >
            We work by referral and take on a limited number of clients.
            Availability is selective.
          </p>
        </div>
      </section>

      {/* ── TRUST BAR ────────────────────────────────────────────────── */}
      <section
        className="py-5"
        style={{
          backgroundColor: "var(--bhi-linen)",
          borderTop: "0.5px solid var(--bhi-sand)",
          borderBottom: "0.5px solid var(--bhi-sand)",
        }}
      >
        <div className="max-w-6xl mx-auto px-8 flex flex-col items-center">
          <p
            className="text-center text-[10px] uppercase tracking-[0.2em]"
            style={{ fontFamily: "var(--bhi-font-sans)", color: "var(--bhi-gold)" }}
          >
            Licensed &middot; Fully Insured &middot; Workers&rsquo; Comp Certified &middot; Building-Compliant
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
                icon: (
                  <svg viewBox="0 0 32 32" width="28" height="28" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M10 26 L16 10 L18 10 L20 6 L24 8 L22 12 L20 10 L16 26 Z" />
                    <path d="M10 26 Q8 28 10 30 Q14 30 14 26 Z" />
                    <line x1="14" y1="18" x2="18" y2="16" />
                  </svg>
                ),
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
                icon: (
                  <svg viewBox="0 0 32 32" width="28" height="28" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="14" y="4" width="10" height="7" rx="1" />
                    <path d="M14 7 L6 7 L6 12 L14 12" />
                    <line x1="19" y1="11" x2="19" y2="26" />
                    <ellipse cx="19" cy="27" rx="3" ry="2" />
                  </svg>
                ),
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
                icon: (
                  <svg viewBox="0 0 32 32" width="28" height="28" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 14 L16 5 L27 14 L27 27 L5 27 Z" />
                    <rect x="12" y="19" width="8" height="8" />
                    <circle cx="22" cy="11" r="2.5" />
                    <line x1="22" y1="13.5" x2="22" y2="17" />
                  </svg>
                ),
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
                className="flex flex-col p-8 md:p-10"
                style={{ border: "0.5px solid var(--bhi-sand)", backgroundColor: "var(--bhi-linen)" }}
              >
                {/* Icon badge */}
                <div
                  className="flex items-center justify-center mb-7 shrink-0"
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: "50%",
                    backgroundColor: "var(--bhi-charcoal)",
                  }}
                >
                  {svc.icon}
                </div>

                {/* Service name */}
                <p
                  className="text-[12px] uppercase tracking-[0.18em] mb-4"
                  style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-charcoal)" }}
                >
                  {svc.name}
                </p>
                <GoldRule className="mb-6" />

                {/* Bullets */}
                <ul className="flex flex-col gap-3 flex-1 mb-8">
                  {svc.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-3 text-[16px] leading-[1.7]"
                      style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-warm-gray)" }}
                    >
                      <span
                        className="mt-[10px] shrink-0 block rounded-full"
                        style={{ width: 3, height: 3, backgroundColor: "var(--bhi-gold)" }}
                      />
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
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY BHI ──────────────────────────────────────────────────── */}
      <section
        className="py-24 md:py-32"
        style={{ backgroundColor: "var(--bhi-linen)" }}
      >
        <div className="max-w-6xl mx-auto px-8">
          <div className="mb-16 max-w-2xl">
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
              Most home service providers in Boston operate informally — no business
              registration, no liability coverage, no workers&rsquo; compensation. For the
              homeowner, that means real exposure: to liability if someone is injured
              in your home, to risk if something goes wrong, and to the buildings that
              require proof of insurance before allowing any vendor through the service
              entrance.
            </p>
            <p
              className="text-[16px] leading-[1.8] mt-4"
              style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-warm-gray)" }}
            >
              Beacon Hill Interiors is built differently. Every engagement is backed
              by a fully licensed, insured, and compliant operation — the kind that
              Boston&rsquo;s most demanding residential buildings require, and the kind that
              protects you completely.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-x-16 md:gap-y-12 mb-14">
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
                body: "We know how Boston's managed buildings work: service entrances, elevator scheduling, protection requirements, COI requests. We handle all of it. Your building manager already knows how to work with us.",
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
      </section>

      {/* ── ABOUT SNIPPET ────────────────────────────────────────────── */}
      <section
        className="py-24 md:py-32"
        style={{ backgroundColor: "var(--bhi-linen)" }}
      >
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
            <div>
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

            <div className="flex flex-col justify-center">
              <div
                className="pl-8"
                style={{ borderLeft: "0.5px solid var(--bhi-gold)" }}
              >
                <p
                  className="text-[20px] md:text-[24px] leading-[1.6] italic"
                  style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-charcoal)" }}
                >
                  &ldquo;Quietly excellent. That&rsquo;s the only kind of work we do.&rdquo;
                </p>
              </div>
            </div>
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
        className="py-24 md:py-32"
        style={{ backgroundColor: "var(--bhi-linen)" }}
      >
        <div className="max-w-6xl mx-auto px-8">
          <div className="max-w-2xl">
            <SectionLabel className="mb-6">Get In Touch</SectionLabel>
            <h2
              className="text-[28px] md:text-[40px] uppercase tracking-[0.06em] leading-[1.2] mb-8"
              style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-charcoal)" }}
            >
              Taking on a limited number of new clients.
            </h2>
            <GoldRule className="mb-8" />
            <p
              className="text-[16px] leading-[1.8] mb-10"
              style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-warm-gray)" }}
            >
              If you&rsquo;re looking for a home services partner who will hold your
              residence to a genuinely high standard, we&rsquo;d like to hear from you.
            </p>
            <Link
              href="/contact"
              className="inline-block text-[10px] uppercase tracking-[0.2em] px-8 py-4 transition-opacity hover:opacity-80"
              style={{
                fontFamily: "var(--bhi-font-sans)",
                backgroundColor: "var(--bhi-charcoal)",
                color: "var(--bhi-white)",
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
