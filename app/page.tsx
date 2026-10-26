import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import GoldRule from "@/components/GoldRule";
import SectionLabel from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "Beacon Hill Interiors — Interior Services, Boston",
  description:
    "Residential interior care, commercial cleaning, interior construction, and punch list closeout — for Boston's most demanding properties. Licensed. Insured. One accountable team.",
};

const pillars = [
  {
    n: "01",
    href: "/residential",
    label: "Residential Interior Care",
    image: "/images/cleaning.webp",
    body: "Premium cleaning and recurring care for private residences. White-glove standard, consistent team, no excuses.",
  },
  {
    n: "02",
    href: "/commercial",
    label: "Commercial & Hospitality",
    image: "/images/commercial-hotel.webp",
    body: "Hotel rooms, common areas, managed buildings, and commercial interiors — cleaned and maintained to the standard your operation demands.",
  },
  {
    n: "03",
    href: "/construction",
    label: "Interior Construction & Refresh",
    image: "/images/construction-work.webp",
    body: "Painting, routine repairs, drywall and finish carpentry, kitchen and bath refresh, and ongoing interior maintenance. Done correctly the first time.",
  },
  {
    n: "04",
    href: "/punchlist",
    label: "Punch List & Construction Closeout",
    image: "/images/services.webp",
    body: "Final-phase support for contractors, developers, and property owners. We close the job out — cleanly, completely, and on schedule.",
  },
];

const audiences = [
  {
    title: "Homeowners",
    href: "/residential",
    service: "Residential Interior Care",
    body: "A dependable partner for ongoing cleaning, repairs, and interior care. One team, one standard, no vendor management.",
  },
  {
    title: "Hotels & Commercial",
    href: "/commercial",
    service: "Commercial & Hospitality",
    body: "Reliable cleaning and maintenance that support daily operations and property standards — for properties that cannot afford a visible failure.",
  },
  {
    title: "Contractors & Developers",
    href: "/punchlist",
    service: "Punch List & Closeout",
    body: "Skilled punch-list support, final cleaning, and finishing work to bring projects to completion — the final phase, handled.",
  },
  {
    title: "Realtors & Designers",
    href: "/construction",
    service: "Interior Construction & Refresh",
    body: "Painting, repairs, detailing, and property preparation before photography, staging, or handoff.",
  },
];

const longTerm = [
  {
    title: "Scheduled Residential Care",
    body: "Weekly, biweekly, or monthly interior care for private residences, with seasonal deep cleaning built into the calendar rather than left to chance.",
  },
  {
    title: "Ongoing Property Maintenance",
    body: "Routine repairs, touch-ups, and interior upkeep for managed buildings, rental units, and commercial spaces — handled before small issues become visible ones.",
  },
  {
    title: "Tailored to the Property",
    body: "No packaged tiers. Every arrangement is scoped to the building, its use, and the standard you expect — and adjusted as those needs change.",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative flex flex-col justify-center pt-[72px]"
        style={{ minHeight: "max(640px, 100vh)" }}
      >
        <Image src="/images/hero.webp" alt="" fill priority className="object-cover" />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(44,44,44,0.65)" }} />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, transparent 55%, rgba(0,0,0,0.6) 100%)" }}
        />

        <div className="relative max-w-6xl mx-auto px-8 py-24 md:py-32 flex flex-col items-center text-center w-full">
          <p
            className="text-[10px] uppercase tracking-[0.25em] mb-8"
            style={{
              fontFamily: "var(--bhi-font-sans)",
              color: "var(--bhi-gold)",
              textShadow: "0 1px 3px rgba(0,0,0,0.5)",
            }}
          >
            Boston Interior Services
          </p>

          <h1
            className="text-[38px] md:text-[54px] lg:text-[62px] uppercase tracking-[0.07em] leading-[1.1] mb-8 max-w-3xl"
            style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-white)", textShadow: "0 1px 4px rgba(0,0,0,0.4)" }}
          >
            When the Standard Has to Be Right.
          </h1>

          <p
            className="text-[17px] leading-[1.85] mb-10"
            style={{
              fontFamily: "var(--bhi-font)",
              color: "rgba(255,255,255,0.88)",
              maxWidth: "620px",
              textShadow: "0 1px 4px rgba(0,0,0,0.4)",
            }}
          >
            Beacon Hill Interiors provides professional cleaning, routine
            maintenance, painting, interior improvements, and construction closeout
            services for Greater Boston&rsquo;s residential, commercial, and
            hospitality properties.
          </p>

          <Link
            href="/contact"
            className="inline-block text-[10px] uppercase tracking-[0.2em] px-8 py-4 mb-10 transition-opacity hover:opacity-80"
            style={{ fontFamily: "var(--bhi-font-sans)", backgroundColor: "var(--bhi-white)", color: "var(--bhi-charcoal)" }}
          >
            Request a Proposal
          </Link>

          <p
            className="text-[12px] uppercase tracking-[0.18em]"
            style={{ fontFamily: "var(--bhi-font-sans)", color: "rgba(255,255,255,0.55)" }}
          >
            Licensed · Insured · Building-Compliant
          </p>
        </div>
      </section>

      {/* NEIGHBORHOOD TRUST STRIP */}
      <section style={{ backgroundColor: "var(--bhi-charcoal)" }}>
        <div
          className="max-w-6xl mx-auto px-8 py-4 flex items-center justify-center flex-wrap gap-x-6 gap-y-2"
          style={{ opacity: 0.55 }}
        >
          {["Beacon Hill","Back Bay","South End","Seaport","Charlestown","Brookline","Cambridge","Newton","Wellesley"].map((n) => (
            <span
              key={n}
              className="text-[9px] uppercase tracking-[0.2em]"
              style={{ fontFamily: "var(--bhi-font-sans)", color: "var(--bhi-sand)" }}
            >
              {n}
            </span>
          ))}
        </div>
      </section>

      {/* FOUR PILLARS */}
      <section className="py-24 md:py-32" style={{ backgroundColor: "var(--bhi-linen)" }}>
        <div className="max-w-6xl mx-auto px-8">
          <div className="mb-16">
            <SectionLabel className="mb-6">What We Do</SectionLabel>
            <h2
              className="text-[28px] md:text-[38px] leading-[1.2] mb-4"
              style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-charcoal)" }}
            >
              Four services. One standard.
            </h2>
            <p
              className="text-[17px] italic leading-[1.7]"
              style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-warm-gray)", maxWidth: "520px" }}
            >
              Delivered by one accountable team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((p) => (
              <div
                key={p.n}
                className="flex flex-col"
                style={{ border: "0.5px solid var(--bhi-sand)", backgroundColor: "var(--bhi-white)" }}
              >
                <div className="relative w-full shrink-0" style={{ height: 220 }}>
                  <Image src={p.image} alt="" fill className="object-cover" />
                </div>
                <div className="flex flex-col flex-1 px-8 pb-8">
                  <GoldRule />
                  <div className="flex items-baseline gap-4 mt-6 mb-3">
                    <span
                      className="text-[10px] uppercase tracking-[0.22em]"
                      style={{ fontFamily: "var(--bhi-font-sans)", color: "var(--bhi-gold)" }}
                    >
                      {p.n}
                    </span>
                    <p
                      className="text-[12px] font-bold uppercase tracking-[0.2em]"
                      style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-charcoal)" }}
                    >
                      {p.label}
                    </p>
                  </div>
                  <p
                    className="text-[16px] leading-[1.75] mb-8 flex-1"
                    style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-warm-gray)" }}
                  >
                    {p.body}
                  </p>
                  <Link
                    href={p.href}
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

      {/* WHY BHI */}
      <section className="py-24 md:py-32" style={{ backgroundColor: "#252525" }}>
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex flex-col md:flex-row gap-16 md:gap-24">
            <div className="flex-1">
              <SectionLabel className="mb-8" style={{ color: "var(--bhi-gold)" }}>
                Why BHI
              </SectionLabel>
              <h2
                className="text-[28px] md:text-[38px] leading-[1.2] mb-8"
                style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-white)" }}
              >
                One team. Four capabilities. One point of accountability.
              </h2>
              <p
                className="text-[17px] leading-[1.85] mb-6"
                style={{ fontFamily: "var(--bhi-font)", color: "#9A9490" }}
              >
                Most service firms do one thing. We do four — and we do all of them
                to the same standard: careful, thorough, and fully accountable from
                start to finish.
              </p>
              <p
                className="text-[17px] leading-[1.85] mb-10"
                style={{ fontFamily: "var(--bhi-font)", color: "#9A9490" }}
              >
                BHI was built by someone who has run work inside Boston&rsquo;s most
                demanding buildings. Founder Justin Yurasits spent years as a project
                manager and site superintendent on high-end residential construction
                in landmark Boston addresses — more than $30M in project value. He
                understands how managed buildings and hospitality properties operate,
                what GCs and developers need at closeout, and what private clients
                expect when they open the door.
              </p>
              <Link
                href="/about"
                className="text-xs uppercase tracking-[0.2em] inline-flex items-center gap-2 transition-opacity hover:opacity-70"
                style={{ fontFamily: "var(--bhi-font-sans)", color: "var(--bhi-gold)" }}
              >
                About Beacon Hill Interiors <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="flex-1 flex flex-col justify-center gap-8">
              {[
                {
                  title: "Licensed & Experienced",
                  body: "Massachusetts Licensed Construction Supervisor and General Contractor. We understand surfaces, systems, and standards at a level most service providers don't.",
                },
                {
                  title: "Managed Building Ready",
                  body: "COI-ready. Familiar with elevator protocols, building manager relationships, and service entrance requirements across Boston's finest properties.",
                },
                {
                  title: "Fully Insured",
                  body: "General liability and workers' compensation on every engagement. Certificates of insurance provided on request.",
                },
              ].map((item) => (
                <div key={item.title}>
                  <GoldRule className="mb-5" style={{ opacity: 0.3 }} />
                  <p
                    className="text-[11px] uppercase tracking-[0.2em] mb-3"
                    style={{ fontFamily: "var(--bhi-font-sans)", color: "var(--bhi-gold)" }}
                  >
                    {item.title}
                  </p>
                  <p
                    className="text-[15px] leading-[1.8]"
                    style={{ fontFamily: "var(--bhi-font)", color: "#9A9490" }}
                  >
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="py-24 md:py-32 bg-bhi-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="mb-16">
            <SectionLabel className="mb-6">Who We Work With</SectionLabel>
            <h2
              className="text-[28px] md:text-[36px] leading-[1.25]"
              style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-charcoal)" }}
            >
              For homes, hotels, contractors, and the professionals who serve them.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {audiences.map((a) => (
              <Link
                key={a.title}
                href={a.href}
                className="flex flex-col transition-opacity hover:opacity-75"
                style={{ border: "0.5px solid var(--bhi-sand)", padding: "32px 28px" }}
              >
                <GoldRule className="mb-6" />
                <p
                  className="text-[11px] uppercase tracking-[0.2em] mb-4"
                  style={{ fontFamily: "var(--bhi-font-sans)", color: "var(--bhi-charcoal)" }}
                >
                  {a.title}
                </p>
                <p
                  className="text-[15px] leading-[1.8] mb-6 flex-1"
                  style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-warm-gray)" }}
                >
                  {a.body}
                </p>
                <span
                  className="text-[10px] uppercase tracking-[0.18em] inline-flex items-center gap-2"
                  style={{ fontFamily: "var(--bhi-font-sans)", color: "var(--bhi-gold)" }}
                >
                  {a.service} <span aria-hidden="true">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* COMMERCIAL CALLOUT */}
      <section style={{ backgroundColor: "var(--bhi-linen)" }}>
        <div className="flex flex-col md:flex-row">
          <div className="relative w-full md:w-[45%] shrink-0" style={{ minHeight: "260px" }}>
            <Image src="/images/homeservices.webp" alt="" fill className="object-cover" />
          </div>
          <div className="flex-1 py-24 md:py-32 px-8 md:px-16">
            <SectionLabel className="mb-6">Commercial & Hospitality</SectionLabel>
            <h2
              className="text-[26px] md:text-[32px] leading-[1.2] mb-6"
              style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-charcoal)" }}
            >
              The cleaning standard your operation demands.
            </h2>
            <GoldRule className="mb-8 max-w-xs" />
            <p
              className="text-[16px] leading-[1.85] mb-10"
              style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-warm-gray)", maxWidth: "480px" }}
            >
              Hotel rooms, lobbies, managed building common areas, and commercial
              interiors — maintained to the standard your guests and residents
              expect. One accountable contact. No call centers. No dispatch queues.
            </p>
            <Link
              href="/commercial"
              className="text-xs uppercase tracking-[0.18em] inline-flex items-center gap-2 transition-opacity hover:opacity-70"
              style={{ fontFamily: "var(--bhi-font-sans)", color: "var(--bhi-charcoal)" }}
            >
              Commercial services <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* A PARTNER FOR THE LONG TERM */}
      <section className="py-24 md:py-32" style={{ backgroundColor: "#252525" }}>
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex flex-col md:flex-row gap-16 md:gap-24">
            <div className="flex-1">
              <SectionLabel className="mb-8" style={{ color: "var(--bhi-gold)" }}>
                Ongoing Service
              </SectionLabel>
              <h2
                className="text-[28px] md:text-[38px] leading-[1.2] mb-8"
                style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-white)" }}
              >
                A Partner for the Long Term.
              </h2>
              <p
                className="text-[17px] leading-[1.85] mb-6"
                style={{ fontFamily: "var(--bhi-font)", color: "#9A9490" }}
              >
                Some properties need a project. Most need someone who keeps showing
                up. BHI offers recurring service arrangements — from scheduled
                residential care to ongoing commercial and property maintenance.
              </p>
              <p
                className="text-[17px] leading-[1.85] mb-10"
                style={{ fontFamily: "var(--bhi-font)", color: "#9A9490" }}
              >
                Each arrangement is built around the property: what it needs, how
                often, and to what standard. Set it once. We keep it there.
              </p>
              <Link
                href="/contact"
                className="text-xs uppercase tracking-[0.2em] inline-flex items-center gap-2 transition-opacity hover:opacity-70"
                style={{ fontFamily: "var(--bhi-font-sans)", color: "var(--bhi-gold)" }}
              >
                Discuss an ongoing arrangement <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="flex-1 flex flex-col justify-center gap-8">
              {longTerm.map((item) => (
                <div key={item.title}>
                  <GoldRule className="mb-5" style={{ opacity: 0.3 }} />
                  <p
                    className="text-[11px] uppercase tracking-[0.2em] mb-3"
                    style={{ fontFamily: "var(--bhi-font-sans)", color: "var(--bhi-gold)" }}
                  >
                    {item.title}
                  </p>
                  <p
                    className="text-[15px] leading-[1.8]"
                    style={{ fontFamily: "var(--bhi-font)", color: "#9A9490" }}
                  >
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 md:py-32 bg-bhi-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="mb-16">
            <SectionLabel className="mb-6">How It Works</SectionLabel>
            <h2
              className="text-[28px] md:text-[34px] uppercase tracking-[0.05em] leading-[1.2]"
              style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-charcoal)" }}
            >
              Simple. Considered. No back-and-forth.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
            {[
              {
                n: "01",
                title: "Tell Us What You Need",
                body: "Share information about your property, project, or ongoing service requirements. We'll discuss your priorities, timing, and expectations.",
              },
              {
                n: "02",
                title: "A Clear Scope & Service Plan",
                body: "We evaluate the work, coordinate any necessary walkthroughs, and prepare a proposal outlining services, schedule, and responsibilities.",
              },
              {
                n: "03",
                title: "Professional Execution & Follow-Through",
                body: "Our team coordinates and performs the agreed work, communicates progress, and addresses outstanding details through completion or ongoing service.",
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
                <p className="text-[15px] leading-[1.75]" style={{ color: "var(--bhi-warm-gray)" }}>
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="relative flex items-center" style={{ minHeight: "300px" }}>
        <Image src="/images/hero.webp" alt="" fill className="object-cover" />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(44,44,44,0.65)" }} />
        <div className="relative z-10 w-full py-24 md:py-32 px-8 flex flex-col items-center text-center">
          <div className="max-w-2xl w-full flex flex-col items-center">
            <SectionLabel className="mb-6" style={{ color: "rgba(255,255,255,0.7)" }}>
              Get In Touch
            </SectionLabel>
            <h2
              className="text-[28px] md:text-[40px] uppercase tracking-[0.06em] leading-[1.2] mb-6"
              style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-white)" }}
            >
              Let&rsquo;s Get Your Property Taken Care Of.
            </h2>
            <GoldRule className="mb-8 w-full max-w-xs" />
            <p
              className="text-[16px] leading-[1.8] mb-10"
              style={{ fontFamily: "var(--bhi-font)", color: "rgba(255,255,255,0.82)", maxWidth: "540px" }}
            >
              From recurring cleaning and maintenance to painting, interior
              improvements, and construction closeout, we&rsquo;re ready to discuss
              what your property or project needs.
            </p>
            <Link
              href="/contact"
              className="inline-block text-[10px] uppercase tracking-[0.2em] px-8 py-4 transition-opacity hover:opacity-80"
              style={{ fontFamily: "var(--bhi-font-sans)", backgroundColor: "var(--bhi-white)", color: "var(--bhi-charcoal)" }}
            >
              Request a Proposal
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
