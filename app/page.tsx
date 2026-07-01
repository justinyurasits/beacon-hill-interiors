import Link from "next/link";
import Image from "next/image";
import Logo from "@/components/Logo";
import GoldRule from "@/components/GoldRule";
import SectionLabel from "@/components/SectionLabel";
import ServiceCard from "@/components/ServiceCard";

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
        {/* Charcoal overlay 45% */}
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(44,44,44,0.45)" }} />

        <div className="relative max-w-6xl mx-auto px-8 py-24 md:py-32 flex flex-col items-center text-center w-full">
          <Logo height={48} className="text-bhi-white mb-10" />

          <SectionLabel className="mb-8" style={{ color: "var(--bhi-gold)" }}>
            Private Home Services — Boston
          </SectionLabel>

          <h1
            className="text-[42px] md:text-[56px] lg:text-[64px] uppercase tracking-[0.06em] leading-[1.1] mb-8 max-w-3xl"
            style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-white)" }}
          >
            Your home deserves a higher standard.
          </h1>

          <GoldRule className="mb-8 w-full max-w-xs" />

          <p
            className="text-[17px] leading-[1.8] mb-12 max-w-xl"
            style={{ fontFamily: "var(--bhi-font)", color: "rgba(245,242,238,0.85)" }}
          >
            Beacon Hill Interiors provides private home care, interior painting,
            and residential refresh services for discerning homes in Boston&rsquo;s
            finest neighborhoods.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6">
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
              className="text-xs italic"
              style={{ fontFamily: "var(--bhi-font)", color: "rgba(245,242,238,0.7)" }}
            >
              We work by referral and take on a limited number of clients.
              Availability is selective.
            </p>
          </div>
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
      <section className="bg-bhi-white py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-8">
          <div className="mb-16">
            <SectionLabel className="mb-6">What We Do</SectionLabel>
            <p
              className="text-[22px] md:text-[26px] leading-[1.5] max-w-2xl"
              style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-charcoal)" }}
            >
              Three services. One standard. Your home — kept exactly as it
              should be.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
            <ServiceCard
              number="01"
              title="Home Care"
              description="Premium recurring cleaning for residences that require more than the ordinary. No rotating crews. No shortcuts. The same trusted team, every time."
              href="/services#home-care"
            />
            <ServiceCard
              number="02"
              title="Interior Painting & Refresh"
              description="Precise, clean, and completely turnkey — for homes that won't tolerate mediocrity. Meticulous preparation, premium materials, clean execution."
              href="/services#interior-refresh"
            />
            <ServiceCard
              number="03"
              title="Home Stewardship"
              description="For owners who want their home fully attended to — without the coordination. We become the single point of contact for your home's ongoing care."
              href="/services#stewardship"
            />
          </div>

          <div className="mt-16">
            <Link
              href="/services"
              className="text-xs uppercase tracking-[0.2em] inline-flex items-center gap-2 transition-opacity hover:opacity-70"
              style={{
                fontFamily: "var(--bhi-font-sans)",
                color: "var(--bhi-charcoal)",
              }}
            >
              View all services
              <span aria-hidden="true">→</span>
            </Link>
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
