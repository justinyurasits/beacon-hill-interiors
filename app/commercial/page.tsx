import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import GoldRule from "@/components/GoldRule";
import SectionLabel from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "Commercial & Hospitality Cleaning — Beacon Hill Interiors",
  description:
    "Professional cleaning and interior maintenance for hotels, managed buildings, and commercial spaces across Greater Boston. Founder-led, licensed, and fully insured. One accountable contact.",
};

const builtFor = [
  "Hotel guest rooms and suites",
  "Hotel lobbies, corridors, and common areas",
  "Managed condominium buildings — common areas, lobbies, corridors",
  "Commercial office interiors",
  "Retail and hospitality spaces",
  "Multi-family residential buildings",
];

const whatWeHandle = [
  {
    title: "Room Turns & Housekeeping",
    body: "Fast, consistent room turns to hotel standard. Beds dressed properly, baths detailed, fixtures polished, floors finished — the room is guest-ready, not just clean.",
  },
  {
    title: "Common Area Care",
    body: "Lobbies, corridors, elevators, stairwells, and amenity spaces maintained on a set cadence. The first thing a guest or resident sees stays consistent, shift after shift.",
  },
  {
    title: "Deep Cleaning & Resets",
    body: "Scheduled deep cleans and between-tenant resets — carpet extraction, tile and grout detail, full kitchen and bath strip-downs — on a rotation that keeps the property ahead of wear.",
  },
  {
    title: "Interior Upkeep & Repairs",
    body: "Touch-up paint, minor drywall and finish repairs, fixture and hardware fixes handled in the same visit. One partner keeps the interior right instead of three vendors you have to coordinate.",
  },
];

const differentiators = [
  {
    title: "Consistent, Inspection-Ready Results",
    body: "The standard you set is the standard you get, every visit — not quality that drifts when you stop watching.",
  },
  {
    title: "Responsive and Predictable",
    body: "One accountable contact, scheduling you can plan your operation around, and a fast response when something comes up — not a dispatch queue.",
  },
  {
    title: "Managed-Building Fluent, Licensed & Insured",
    body: "Service-entrance protocols, COI requirements, and elevator scheduling are second nature. General liability and workers' compensation on every engagement; certificate of insurance on request.",
  },
];

const engagementSteps = [
  {
    n: "01",
    title: "Walkthrough",
    body: "We visit the property, learn the spaces, access requirements, and the standard you need held.",
  },
  {
    n: "02",
    title: "Scope & Service Plan",
    body: "You get a written scope, a schedule, and clear responsibilities, with a certificate of insurance for building management.",
  },
  {
    n: "03",
    title: "Calibration Period",
    body: "The first weeks are about dialing in to your standard and your building's rhythm. We adjust the plan until it's right.",
  },
  {
    n: "04",
    title: "Ongoing Service & Review",
    body: "Service to the agreed standard, one point of contact, and a regular check-in. If the workload materially changes, we revisit scope and pricing openly — no surprises.",
  },
];

export default function CommercialPage() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative flex flex-col justify-center pt-[72px]"
        style={{ minHeight: "max(480px, 65vh)" }}
      >
        <Image src="/images/commercial-hotel.webp" alt="" fill priority className="object-cover" />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(44,44,44,0.68)" }} />
        <div className="relative max-w-6xl mx-auto px-8 py-24 w-full">
          <p
            className="text-[10px] uppercase tracking-[0.25em] mb-6"
            style={{ fontFamily: "var(--bhi-font-sans)", color: "var(--bhi-gold)" }}
          >
            02 — Commercial & Hospitality
          </p>
          <h1
            className="text-[36px] md:text-[52px] uppercase tracking-[0.06em] leading-[1.1] mb-6 max-w-2xl"
            style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-white)", textShadow: "0 1px 4px rgba(0,0,0,0.4)" }}
          >
            The Cleaning Standard Your Operation Demands.
          </h1>
          <p
            className="text-[17px] leading-[1.85] max-w-xl"
            style={{ fontFamily: "var(--bhi-font)", color: "rgba(255,255,255,0.85)" }}
          >
            Professional cleaning and interior maintenance for hotels, managed
            buildings, commercial spaces, and hospitality properties across Greater
            Boston — built by someone who has run work inside the city&rsquo;s most
            demanding buildings.
          </p>
        </div>
      </section>

      {/* WHAT THIS IS */}
      <section className="py-24 md:py-32" style={{ backgroundColor: "var(--bhi-linen)" }}>
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex flex-col md:flex-row gap-16 md:gap-24">
            <div className="flex-1">
              <SectionLabel className="mb-6">Commercial & Hospitality Cleaning</SectionLabel>
              <h2
                className="text-[26px] md:text-[34px] leading-[1.2] mb-8"
                style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-charcoal)" }}
              >
                Quality-first service, built for commercial pace.
              </h2>
              <GoldRule className="mb-8" />
              <p
                className="text-[16px] leading-[1.85] mb-6"
                style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-warm-gray)" }}
              >
                Commercial cleaning is a different discipline than residential —
                faster turnaround, higher volume, tighter scheduling, and zero
                margin for visible failure.
              </p>
              <p
                className="text-[16px] leading-[1.85] mb-6"
                style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-warm-gray)" }}
              >
                Founder Justin Yurasits spent years as a project manager and site
                superintendent on high-end residential construction inside landmark
                Boston buildings — more than $30M in project value, delivered under
                strict building management, tight access windows, and residents who
                should never notice the work happening.
              </p>
              <p
                className="text-[16px] leading-[1.85] mb-6"
                style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-warm-gray)" }}
              >
                For a hotel or property operator, the question isn&rsquo;t whether a
                space can be cleaned — it&rsquo;s whether it&rsquo;s ready, every time,
                without you having to check. BHI delivers consistent room and
                common-area readiness to an agreed standard, on a schedule you can
                plan around, with one person accountable for all of it.
              </p>
              <p
                className="text-[16px] leading-[1.85]"
                style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-warm-gray)" }}
              >
                And because we come out of construction, we handle more than
                cleaning. Touch-up paint, minor repairs, and interior upkeep get done
                as part of the same relationship — so you&rsquo;re not juggling a
                cleaner, a handyman, and a painter to keep the property right.
              </p>
            </div>

            <div className="flex-1">
              <p
                className="text-[11px] uppercase tracking-[0.2em] mb-6"
                style={{ fontFamily: "var(--bhi-font-sans)", color: "var(--bhi-charcoal)" }}
              >
                Built For
              </p>
              <ul className="flex flex-col gap-4">
                {builtFor.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[15px] leading-[1.75]"
                    style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-warm-gray)" }}
                  >
                    <span
                      className="shrink-0 mt-[0.55em]"
                      style={{ color: "var(--bhi-gold)", fontFamily: "var(--bhi-font-sans)", fontSize: "12px" }}
                      aria-hidden="true"
                    >
                      —
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE HANDLE */}
      <section className="py-24 md:py-32 bg-bhi-white">
        <div className="max-w-6xl mx-auto px-8">
          <SectionLabel className="mb-6">What We Handle</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            {whatWeHandle.map((item) => (
              <div
                key={item.title}
                style={{ border: "0.5px solid var(--bhi-sand)", padding: "32px 28px" }}
              >
                <GoldRule className="mb-6" />
                <p
                  className="text-[11px] uppercase tracking-[0.2em] mb-4"
                  style={{ fontFamily: "var(--bhi-font-sans)", color: "var(--bhi-charcoal)" }}
                >
                  {item.title}
                </p>
                <p
                  className="text-[15px] leading-[1.8]"
                  style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-warm-gray)" }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY BHI FOR COMMERCIAL */}
      <section className="py-24 md:py-32" style={{ backgroundColor: "#252525" }}>
        <div className="max-w-6xl mx-auto px-8">
          <SectionLabel className="mb-10" style={{ color: "var(--bhi-gold)" }}>
            Why BHI for Commercial
          </SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
            {differentiators.map((item) => (
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
      </section>

      {/* HOW A COMMERCIAL ENGAGEMENT WORKS */}
      <section className="py-24 md:py-32" style={{ backgroundColor: "var(--bhi-linen)" }}>
        <div className="max-w-6xl mx-auto px-8">
          <div className="mb-16">
            <SectionLabel className="mb-6">The Engagement</SectionLabel>
            <h2
              className="text-[28px] md:text-[34px] uppercase tracking-[0.05em] leading-[1.2]"
              style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-charcoal)" }}
            >
              How a Commercial Engagement Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
            {engagementSteps.map((step) => (
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

      {/* CTA */}
      <section className="py-24 md:py-32" style={{ backgroundColor: "var(--bhi-charcoal)" }}>
        <div className="max-w-6xl mx-auto px-8 flex flex-col items-center text-center">
          <SectionLabel className="mb-6" style={{ color: "var(--bhi-gold)" }}>
            Inquire
          </SectionLabel>
          <h2
            className="text-[26px] md:text-[36px] leading-[1.2] mb-6 max-w-xl"
            style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-white)" }}
          >
            Running a hotel, managing a building, or looking for a reliable
            commercial cleaning partner?
          </h2>
          <GoldRule className="mb-8 max-w-xs w-full" style={{ opacity: 0.4 }} />
          <Link
            href="/contact"
            className="inline-block text-[10px] uppercase tracking-[0.2em] px-8 py-4 transition-opacity hover:opacity-80"
            style={{ fontFamily: "var(--bhi-font-sans)", backgroundColor: "var(--bhi-white)", color: "var(--bhi-charcoal)" }}
          >
            Request a Proposal
          </Link>
        </div>
      </section>
    </>
  );
}
