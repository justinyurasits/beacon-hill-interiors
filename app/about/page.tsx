import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/components/Logo";
import GoldRule from "@/components/GoldRule";
import SectionLabel from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "About — Beacon Hill Interiors",
  description:
    "A private interior services firm built on years of high-end residential construction inside Boston's most demanding buildings. Massachusetts Construction Supervisor License; registered Massachusetts Home Improvement Contractor.",
};

const credentials = [
  {
    title: "Licensed Construction Background",
    body: "Justin holds a Massachusetts Construction Supervisor License, and Beacon Hill Interiors is a registered Massachusetts Home Improvement Contractor. We understand interior work at a professional level — not just how it looks, but how it's built.",
  },
  {
    title: "Managed Building Know-How",
    body: "Our founder's years running high-end residential construction inside landmark Boston buildings mean service entrance protocols, COI requirements, and building manager relationships are second nature.",
  },
  {
    title: "Full Insurance Coverage",
    body: "General liability on every engagement. Workers' compensation for all team members. Certificate of insurance available on request.",
  },
  {
    title: "One Point of Accountability",
    body: "You work with one person. Justin Yurasits is involved in every client relationship, every scope of work, and every standard we're held to.",
  },
];

const areas = [
  "Beacon Hill",
  "Back Bay",
  "South End",
  "Seaport",
  "Charlestown",
  "Brookline",
  "Cambridge",
  "Somerville",
  "Newton",
  "Wellesley",
  "Lexington",
  "Needham",
  "Chestnut Hill",
];

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="bg-bhi-white pt-[72px]">
        <div className="flex flex-col items-center px-8 pt-20 pb-16">
          <Logo height={96} className="text-bhi-charcoal mb-14" />

          <SectionLabel className="mb-7 text-center">
            About Beacon Hill Interiors
          </SectionLabel>

          <h1
            className="text-[32px] md:text-[46px] lg:text-[54px] uppercase tracking-[0.07em] leading-[1.15] text-center max-w-3xl mb-8"
            style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-charcoal)" }}
          >
            Built on Years Inside Boston&rsquo;s Finest Properties.
          </h1>

          <p
            className="text-[17px] leading-[1.85] text-center max-w-2xl mb-12"
            style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-warm-gray)" }}
          >
            Beacon Hill Interiors is a private interior services firm built by
            someone who has run work inside Boston&rsquo;s most demanding buildings.
          </p>

          <GoldRule className="w-full max-w-lg" />
        </div>
      </section>

      {/* ── THE STORY ────────────────────────────────────────────────── */}
      <section className="bg-bhi-white pt-12 pb-24">
        <div
          className="mx-auto px-8 flex flex-col gap-6"
          style={{ maxWidth: "640px" }}
        >
          <SectionLabel className="mb-2">About Beacon Hill Interiors</SectionLabel>
          <h2
            className="text-[22px] md:text-[28px] leading-[1.3] mb-2"
            style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-charcoal)" }}
          >
            Small by design. Serious by standard.
          </h2>
          <GoldRule className="mb-4" />
          <p
            className="text-[16px] leading-[1.95]"
            style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-warm-gray)" }}
          >
            BHI was built out of a simple observation: most home and commercial
            service providers in Boston are either too large to care or too small
            to be reliable. There was a gap between commodity cleaning and real
            professional service — and that gap was exactly where the best
            properties needed help the most.
          </p>
          <p
            className="text-[16px] leading-[1.95]"
            style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-warm-gray)" }}
          >
            Justin Yurasits founded Beacon Hill Interiors after years as a project
            manager and site superintendent in Boston&rsquo;s premier residential
            construction — running projects inside Back Bay brownstones, luxury
            high-rises, and landmark buildings, more than $30M in total project
            value. He holds a Massachusetts Construction Supervisor License, and
            Beacon Hill Interiors is a registered Massachusetts Home Improvement
            Contractor.
          </p>
          <p
            className="text-[16px] leading-[1.95]"
            style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-warm-gray)" }}
          >
            That experience translates directly into how BHI operates: a deep
            understanding of surfaces, building systems, and construction method;
            fluency in how managed buildings, property managers, and hospitality
            properties operate; and an eye for quality that comes from working
            alongside people who accepted nothing less.
          </p>
          <p
            className="text-[16px] leading-[1.95]"
            style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-warm-gray)" }}
          >
            BHI is intentionally small. We take on a limited number of clients and
            engagements — enough to do the work correctly and stay accountable, not
            so many that quality becomes impossible to maintain.
          </p>
        </div>
      </section>

      {/* ── PULL QUOTE ───────────────────────────────────────────────── */}
      <section
        className="py-20 md:py-28"
        style={{ backgroundColor: "var(--bhi-linen)" }}
      >
        <div
          className="mx-auto px-8 flex flex-col items-center"
          style={{ maxWidth: "820px" }}
        >
          <GoldRule className="w-full mb-12" />
          <p
            className="text-[22px] md:text-[30px] lg:text-[34px] italic leading-[1.55] text-center"
            style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-charcoal)" }}
          >
            &ldquo;We are not trying to be the biggest service company in Boston. We
            are trying to be the best one for the clients we take on.&rdquo;
          </p>
          <p
            className="mt-8 text-[13px] uppercase tracking-[0.2em] text-center"
            style={{ fontFamily: "var(--bhi-font-sans)", color: "var(--bhi-warm-gray)" }}
          >
            &mdash; Justin Yurasits, Principal
          </p>
          <GoldRule className="w-full mt-12" />
        </div>
      </section>

      {/* ── ABOUT IMAGE ──────────────────────────────────────────────── */}
      <section className="bg-bhi-white py-16">
        <div className="mx-auto px-8" style={{ maxWidth: "680px" }}>
          <div
            className="relative w-full"
            style={{
              aspectRatio: "3 / 2",
              border: "1px solid var(--bhi-sand)",
            }}
          >
            <Image
              src="/images/about.webp"
              alt=""
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── CREDENTIALS ──────────────────────────────────────────────── */}
      <section className="bg-bhi-white py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-8">
          <SectionLabel className="mb-14">The Credentials</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            {credentials.map((c) => (
              <div key={c.title}>
                <GoldRule className="mb-5" />
                <p
                  className="text-[10px] uppercase tracking-[0.2em] mb-4"
                  style={{
                    fontFamily: "var(--bhi-font-sans)",
                    color: "var(--bhi-gold)",
                  }}
                >
                  {c.title}
                </p>
                <p
                  className="text-[15px] leading-[1.8]"
                  style={{
                    fontFamily: "var(--bhi-font)",
                    color: "var(--bhi-warm-gray)",
                  }}
                >
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AREAS SERVED ─────────────────────────────────────────────── */}
      <section
        className="py-20 md:py-28"
        style={{ backgroundColor: "var(--bhi-linen)" }}
      >
        <div className="max-w-6xl mx-auto px-8">
          <SectionLabel className="mb-8">Areas Served</SectionLabel>
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {areas.map((area) => (
              <span
                key={area}
                className="text-[13px] uppercase tracking-[0.15em]"
                style={{ fontFamily: "var(--bhi-font-sans)", color: "var(--bhi-warm-gray)" }}
              >
                {area}
              </span>
            ))}
            <span
              className="text-[13px] uppercase tracking-[0.15em]"
              style={{ fontFamily: "var(--bhi-font-sans)", color: "var(--bhi-gold)" }}
            >
              + Greater Boston
            </span>
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ──────────────────────────────────────────────── */}
      <section
        className="py-24 md:py-32"
        style={{ backgroundColor: "var(--bhi-charcoal)" }}
      >
        <div className="max-w-6xl mx-auto px-8 flex flex-col items-center text-center">
          <SectionLabel className="mb-6" style={{ color: "var(--bhi-gold)" }}>
            Inquire
          </SectionLabel>
          <h2
            className="text-[26px] md:text-[36px] leading-[1.2] mb-6 max-w-xl"
            style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-white)" }}
          >
            Ready to talk?
          </h2>
          <GoldRule className="mb-8 max-w-xs w-full" style={{ opacity: 0.4 }} />
          <p
            className="text-[16px] leading-[1.8] mb-10 max-w-md"
            style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-sand)" }}
          >
            Whether you have a specific project, a standing need, or just want to
            understand whether BHI is the right fit — reach out.
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
            Request a Proposal
          </Link>
        </div>
      </section>
    </>
  );
}
