import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import GoldRule from "@/components/GoldRule";
import SectionLabel from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "Residential Interior Care — Beacon Hill Interiors",
  description:
    "Private interior care for Boston's brownstones, condominiums, and finest residences — recurring care, deep and seasonal resets, and move-in and move-out detail. One point of accountability.",
};

const services = [
  {
    title: "Recurring Home Care",
    body: "Weekly, biweekly, or a cadence built around your home. Kitchens, baths, living spaces, floors, and the millwork and finishes that make the house distinctive — kept to a consistent standard, visit after visit.",
  },
  {
    title: "Deep & Seasonal Care",
    body: "Intensive, detailed work for what everyday upkeep doesn't reach: cabinetry, fixtures, tile, trim, baseboards. Right for a seasonal reset, before an event, or to establish a baseline before recurring care begins.",
  },
  {
    title: "Move-In & Move-Out",
    body: "Full detail for a residence between occupants — before you move in, after you move out, or to prepare a listing for photography, staging, or showings. For homeowners, realtors, and property managers.",
  },
];

const audiences = [
  {
    title: "Private Homes & Brownstones",
    body: "Boston residences with historic detail, fine finishes, and their own maintenance demands — cared for by people who understand what that requires.",
  },
  {
    title: "Luxury Condominiums",
    body: "Service for condominium owners, including direct coordination with building management where access, COI, and contractor requirements apply.",
  },
  {
    title: "Realtors & Property Managers",
    body: "Responsive care and property preparation for listings, transitions, and residences between occupants.",
  },
];

const reasons = [
  {
    title: "Care for the Details",
    body: "Hardwood, custom millwork, stone, tile, finished surfaces — different materials need different handling, and we treat them that way.",
  },
  {
    title: "A Standard You Can Count On",
    body: "We agree the scope and priorities up front and deliver consistent results every visit, with one point of accountability for the work.",
  },
  {
    title: "More Than Cleaning",
    body: "A licensed construction background means we don't just clean. We handle minor repairs, touch-up paint, and interior refresh as part of the same relationship, when you need it.",
  },
];

const steps = [
  {
    n: "01",
    title: "Inquiry",
    body: "Tell us about your home, what you need, and the schedule you'd want.",
  },
  {
    n: "02",
    title: "Walkthrough & Proposal",
    body: "For recurring or more involved work, we assess the space, agree priorities, and set a clear scope and price.",
  },
  {
    n: "03",
    title: "Service & Ongoing Care",
    body: "We deliver the agreed work, keep you in the loop, and adjust the plan as your needs change.",
  },
];

function CardGrid({ items }: { items: { title: string; body: string }[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {items.map((item) => (
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
  );
}

export default function ResidentialPage() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative flex flex-col justify-center pt-[72px]"
        style={{ minHeight: "max(480px, 65vh)" }}
      >
        <Image src="/images/cleaning.webp" alt="" fill priority className="object-cover" />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(44,44,44,0.68)" }} />
        <div className="relative max-w-6xl mx-auto px-8 py-24 w-full">
          <p
            className="text-[10px] uppercase tracking-[0.25em] mb-6"
            style={{ fontFamily: "var(--bhi-font-sans)", color: "var(--bhi-gold)" }}
          >
            01 — Residential Interior Care
          </p>
          <h1
            className="text-[36px] md:text-[52px] uppercase tracking-[0.06em] leading-[1.1] mb-6 max-w-2xl"
            style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-white)", textShadow: "0 1px 4px rgba(0,0,0,0.4)" }}
          >
            Your Home. Cared For the Way It Should Be.
          </h1>
          <p
            className="text-[17px] leading-[1.85] max-w-xl"
            style={{ fontFamily: "var(--bhi-font)", color: "rgba(255,255,255,0.85)" }}
          >
            Private interior care for Boston&rsquo;s brownstones, condominiums, and
            finest residences — from recurring upkeep to a detailed reset before a
            move or a season. Built around your home and the standard you hold it to.
          </p>
        </div>
      </section>

      {/* WHAT THIS IS */}
      <section className="py-24 md:py-32" style={{ backgroundColor: "var(--bhi-linen)" }}>
        <div className="max-w-6xl mx-auto px-8">
          <div className="max-w-2xl">
            <SectionLabel className="mb-6">Residential Interior Care</SectionLabel>
            <h2
              className="text-[26px] md:text-[34px] leading-[1.2] mb-8"
              style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-charcoal)" }}
            >
              Care, not commodity cleaning.
            </h2>
            <GoldRule className="mb-8" />
            <p
              className="text-[16px] leading-[1.85] mb-6"
              style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-warm-gray)" }}
            >
              This is a care program built around your home — your schedule, your
              priorities, the way you want the space kept — not a cleaning service
              running a generic checklist.
            </p>
            <p
              className="text-[16px] leading-[1.85] mb-10"
              style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-warm-gray)" }}
            >
              You set the standard once. We hold it: a defined scope, consistent
              results, and one point of accountability for the work. If
              something&rsquo;s off, you have a name to call, not a dispatch line.
            </p>
            <p
              className="text-[16px] italic leading-[1.85]"
              style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-gold)" }}
            >
              &ldquo;You set the standard once. We hold it.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* RESIDENTIAL SERVICES */}
      <section className="py-24 md:py-32 bg-bhi-white">
        <div className="max-w-6xl mx-auto px-8">
          <SectionLabel className="mb-10">Residential Services</SectionLabel>
          <CardGrid items={services} />
        </div>
      </section>

      {/* WHO IT IS FOR */}
      <section className="py-24 md:py-32" style={{ backgroundColor: "var(--bhi-linen)" }}>
        <div className="max-w-6xl mx-auto px-8">
          <SectionLabel className="mb-6">Who It&rsquo;s For</SectionLabel>
          <h2
            className="text-[26px] md:text-[34px] leading-[1.2] mb-10 max-w-2xl"
            style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-charcoal)" }}
          >
            For distinctive homes.
          </h2>
          <CardGrid items={audiences} />
        </div>
      </section>

      {/* WHY BHI */}
      <section className="py-24 md:py-32" style={{ backgroundColor: "#252525" }}>
        <div className="max-w-6xl mx-auto px-8">
          <SectionLabel className="mb-10" style={{ color: "var(--bhi-gold)" }}>
            Why Beacon Hill Interiors
          </SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
            {reasons.map((item) => (
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

      {/* HOW IT WORKS */}
      <section className="py-24 md:py-32" style={{ backgroundColor: "var(--bhi-linen)" }}>
        <div className="max-w-6xl mx-auto px-8">
          <SectionLabel className="mb-6">How It Works</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 mt-10">
            {steps.map((step) => (
              <div key={step.n}>
                <span
                  className="text-xs tracking-[0.2em] uppercase"
                  style={{ fontFamily: "var(--bhi-font-sans)", color: "var(--bhi-gold)" }}
                >
                  {step.n}
                </span>
                <GoldRule className="my-5" />
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
            Ready to talk about your home?
          </h2>
          <GoldRule className="mb-8 max-w-xs w-full" style={{ opacity: 0.4 }} />
          <p
            className="text-[16px] leading-[1.8] mb-10 max-w-md"
            style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-sand)" }}
          >
            Whether it&rsquo;s dependable ongoing care or preparing a residence for
            its next chapter, let&rsquo;s talk about what your home needs.
          </p>
          <Link
            href="/contact"
            className="inline-block text-[10px] uppercase tracking-[0.2em] px-8 py-4 transition-opacity hover:opacity-80"
            style={{ fontFamily: "var(--bhi-font-sans)", backgroundColor: "var(--bhi-white)", color: "var(--bhi-charcoal)" }}
          >
            Submit an Inquiry
          </Link>
        </div>
      </section>
    </>
  );
}
