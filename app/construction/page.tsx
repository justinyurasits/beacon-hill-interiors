import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import GoldRule from "@/components/GoldRule";
import SectionLabel from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "Interior Construction & Refresh — Beacon Hill Interiors",
  description:
    "Painting, drywall and surface repairs, finish carpentry, kitchen and bath refreshes, and ongoing interior maintenance for Boston homes and managed properties. Done by a licensed team.",
};

const services = [
  {
    title: "Interior Painting & Finishing",
    body: "Walls, ceilings, doors, trim, and architectural millwork. Full-room repaints or color-matched touch-ups that keep finishes looking deliberate, not patched.",
  },
  {
    title: "Drywall & Surface Repairs",
    body: "Patching, skim coating, surface prep, and repaint after damage, a renovation, an install, or ordinary wear. The wall goes back to looking like nothing happened.",
  },
  {
    title: "Finish Carpentry & Interior Repairs",
    body: "Doors, trim, baseboards, casings, shelving, cabinetry, and hardware — adjusted, repaired, and made to work and look finished again.",
  },
  {
    title: "Kitchen & Bath Refreshes",
    body: "Update a space without gutting it: cabinet painting, hardware, backsplash, caulking, and finish repairs. The cosmetic upgrade that buys years.",
  },
  {
    title: "Ongoing Interior Maintenance",
    body: "Scheduled touch-ups, repairs, and upkeep for residences, rentals, and managed buildings. We catch wear before it turns into a project.",
  },
  {
    title: "Property Turnover & Pre-Sale Prep",
    body: "Paint, drywall, finish corrections, minor upgrades, and a final clean to get a property listing-ready or move-in ready between occupants.",
  },
];

const audiences = [
  {
    title: "Homeowners & Condo Owners",
    body: "The repairs, updates, and finishing that keep a home sharp — handled by one team instead of three trades you have to coordinate.",
  },
  {
    title: "Property Managers & Investors",
    body: "Ongoing upkeep, tenant turnover, and coordinated improvements across units and managed buildings, on a schedule you can plan around.",
  },
  {
    title: "Realtors & Homebuyers",
    body: "Pre-listing prep and post-closing work that makes a home show well and feel move-in ready.",
  },
  {
    title: "General Contractors & Developers",
    body: "Supplemental interior finishing and repairs when a project needs an extra licensed team on the details.",
  },
];

const steps = [
  {
    n: "01",
    title: "Tell Us What Needs Attention",
    body: "Walk us through the repairs, maintenance, or improvements you're weighing.",
  },
  {
    n: "02",
    title: "Scope & Proposal",
    body: "We assess the work and site conditions where needed, then set a clear scope, schedule, and price.",
  },
  {
    n: "03",
    title: "Execution",
    body: "We do the work, protect the space around it, and leave a clean finish. For ongoing clients, we set a recurring schedule and agreed priorities.",
  },
];

function Card({ title, body }: { title: string; body: string }) {
  return (
    <div style={{ border: "0.5px solid var(--bhi-sand)", padding: "32px 28px" }}>
      <GoldRule className="mb-6" />
      <p
        className="text-[11px] uppercase tracking-[0.2em] mb-4"
        style={{ fontFamily: "var(--bhi-font-sans)", color: "var(--bhi-charcoal)" }}
      >
        {title}
      </p>
      <p
        className="text-[15px] leading-[1.8]"
        style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-warm-gray)" }}
      >
        {body}
      </p>
    </div>
  );
}

export default function ConstructionPage() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative flex flex-col justify-center pt-[72px]"
        style={{ minHeight: "max(480px, 65vh)" }}
      >
        <Image src="/images/construction-work.webp" alt="" fill priority className="object-cover" />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(44,44,44,0.68)" }} />
        <div className="relative max-w-6xl mx-auto px-8 py-24 w-full">
          <p
            className="text-[10px] uppercase tracking-[0.25em] mb-6"
            style={{ fontFamily: "var(--bhi-font-sans)", color: "var(--bhi-gold)" }}
          >
            03 — Interior Construction & Refresh
          </p>
          <h1
            className="text-[36px] md:text-[52px] uppercase tracking-[0.06em] leading-[1.1] mb-6 max-w-2xl"
            style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-white)", textShadow: "0 1px 4px rgba(0,0,0,0.4)" }}
          >
            The Work Between a Cleaning and a Renovation.
          </h1>
          <p
            className="text-[17px] leading-[1.85] max-w-xl"
            style={{ fontFamily: "var(--bhi-font)", color: "rgba(255,255,255,0.85)" }}
          >
            Painting, repairs, finish carpentry, and selective improvements for
            Boston homes and managed properties — the interior work that&rsquo;s too
            involved for a cleaner and too small for a full renovation, done by a
            licensed team that knows how these buildings are built.
          </p>
        </div>
      </section>

      {/* WHAT THIS IS */}
      <section className="py-24 md:py-32" style={{ backgroundColor: "var(--bhi-linen)" }}>
        <div className="max-w-6xl mx-auto px-8">
          <div className="max-w-2xl">
            <SectionLabel className="mb-6">Interior Construction & Refresh</SectionLabel>
            <h2
              className="text-[26px] md:text-[34px] leading-[1.2] mb-8"
              style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-charcoal)" }}
            >
              Not every improvement needs a renovation.
            </h2>
            <GoldRule className="mb-8" />
            <p
              className="text-[16px] leading-[1.85] mb-6"
              style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-warm-gray)" }}
            >
              A room that needs repainting. Drywall gouged during a move. A door that
              won&rsquo;t close, worn trim, tired cabinetry, a unit that has to be right
              before the next occupant. The jobs most service companies won&rsquo;t take
              and a full GC won&rsquo;t bother with.
            </p>
            <p
              className="text-[16px] leading-[1.85]"
              style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-warm-gray)" }}
            >
              Beacon Hill Interiors handles the interior repairs, finishing, and
              improvements that keep a property sharp — and for owners and managers
              who&rsquo;d rather not chase small problems one at a time, we do it on an
              ongoing basis, before wear becomes damage.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="py-24 md:py-32 bg-bhi-white">
        <div className="max-w-6xl mx-auto px-8">
          <SectionLabel className="mb-6">What We Do</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {services.map((item) => (
              <Card key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE WORK WITH */}
      <section className="py-24 md:py-32" style={{ backgroundColor: "var(--bhi-linen)" }}>
        <div className="max-w-6xl mx-auto px-8">
          <SectionLabel className="mb-6">Who We Work With</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            {audiences.map((item) => (
              <Card key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* THE LICENSE MATTERS */}
      <section className="py-24 md:py-32" style={{ backgroundColor: "#252525" }}>
        <div className="max-w-6xl mx-auto px-8 max-w-3xl">
          <SectionLabel className="mb-6" style={{ color: "var(--bhi-gold)" }}>
            The License Matters
          </SectionLabel>
          <h2
            className="text-[26px] md:text-[34px] leading-[1.2] mb-8"
            style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-white)" }}
          >
            We know how these interiors are built.
          </h2>
          <GoldRule className="mb-8" style={{ opacity: 0.3 }} />
          <p
            className="text-[16px] leading-[1.85] mb-6"
            style={{ fontFamily: "var(--bhi-font)", color: "#9A9490" }}
          >
            Justin Yurasits holds a Massachusetts Construction Supervisor License,
            and Beacon Hill Interiors is a registered Massachusetts Home Improvement
            Contractor. That means understanding how finishes are installed, how
            materials behave, how to protect an occupied space, and how to work
            inside buildings with strict access and operational rules.
          </p>
          <p
            className="text-[16px] leading-[1.85]"
            style={{ fontFamily: "var(--bhi-font)", color: "#9A9490" }}
          >
            It also means knowing when a job needs a separately licensed trade —
            electrical, plumbing, structural — and saying so, instead of pretending
            otherwise.
          </p>
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
            Have an interior that needs attention?
          </h2>
          <GoldRule className="mb-8 max-w-xs w-full" style={{ opacity: 0.4 }} />
          <p
            className="text-[16px] leading-[1.8] mb-10 max-w-md"
            style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-sand)" }}
          >
            From a single repair to a standing maintenance program, let&rsquo;s talk
            about what the property needs.
          </p>
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
