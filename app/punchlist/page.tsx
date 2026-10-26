import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import GoldRule from "@/components/GoldRule";
import SectionLabel from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "Punch List & Construction Closeout — Beacon Hill Interiors",
  description:
    "Final-phase construction support for general contractors, developers, and property owners in Greater Boston — punch list completion, finish corrections, post-construction cleaning, and turnover preparation.",
};

const closeoutServices = [
  {
    title: "Punch List Completion & Finish Corrections",
    intro: "Targeted interior work to clear outstanding deficiencies and incomplete finish items.",
    items: [
      "Interior paint touch-ups and finish corrections",
      "Drywall patching and surface repairs",
      "Caulking and sealant touch-ups",
      "Door, trim, and millwork adjustments",
      "Cabinet and hardware adjustments or installation",
      "Minor finish carpentry and interior repairs",
    ],
    closing: "We work from an agreed punch list or defined scope, coordinating priorities and access with the project team.",
  },
  {
    title: "Post-Construction Cleaning",
    intro: "Detailed cleaning to pull construction dust, residue, and debris out of newly completed interiors.",
    items: [
      "Fine dust removal from accessible interior surfaces",
      "Cabinet interiors, shelving, and millwork",
      "Floors, baseboards, doors, and trim",
      "Interior glass and accessible window surfaces",
      "Kitchen and bathroom fixtures",
      "Final detail cleaning before walkthrough or occupancy",
    ],
    closing: "Cleaning scope is tailored to the project, finish materials, and turnover requirements.",
  },
  {
    title: "Final Detail & Turnover Preparation",
    intro: "The last coordinated push to bring a completed interior to presentation and occupancy readiness.",
    items: [
      "Final cleaning and detailing",
      "Cosmetic touch-ups and minor corrections",
      "Interior hardware and finish checks",
      "Pre-walkthrough preparation",
      "Residential unit and condominium turnover",
      "Pre-listing and pre-occupancy refresh work",
    ],
    closing: "We bridge the gap between construction complete and a space that's ready to be presented, occupied, or handed over.",
  },
];

const audiences = [
  {
    title: "General Contractors",
    body: "Added closeout capacity to clear remaining interior items without remobilizing multiple trades.",
  },
  {
    title: "Developers",
    body: "Coordinated finishing, cleaning, and turnover prep for completed units and properties approaching delivery.",
  },
  {
    title: "Property Owners & Investors",
    body: "Corrections, cleaning, and interior finishing after construction, renovation, or tenant improvements.",
  },
  {
    title: "Realtors & Property Representatives",
    body: "Final prep of newly renovated properties before photography, staging, marketing, or occupancy.",
  },
];

const steps = [
  {
    n: "01",
    title: "Review the Closeout Scope",
    body: "Send us your punch list, cleaning requirements, or a description of the remaining work. We review the requirements and timing.",
  },
  {
    n: "02",
    title: "Walkthrough & Proposal",
    body: "We assess the site when needed, identify the work within our capabilities, and set the scope, schedule, and pricing.",
  },
  {
    n: "03",
    title: "Execute & Coordinate",
    body: "We perform the agreed work, flag outstanding issues, and coordinate completion with the project team.",
  },
  {
    n: "04",
    title: "Final Review",
    body: "We check completed items against the agreed scope and close out any remaining issues within our responsibility.",
  },
];

const bodyStyle = { fontFamily: "var(--bhi-font)", color: "var(--bhi-warm-gray)" };
const darkBodyStyle = { fontFamily: "var(--bhi-font)", color: "#9A9490" };

export default function PunchlistPage() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative flex flex-col justify-center pt-[72px]"
        style={{ minHeight: "max(480px, 65vh)" }}
      >
        <Image src="/images/punchlist-detail.webp" alt="" fill priority className="object-cover" />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(44,44,44,0.68)" }} />
        <div className="relative max-w-6xl mx-auto px-8 py-24 w-full">
          <p
            className="text-[10px] uppercase tracking-[0.25em] mb-6"
            style={{ fontFamily: "var(--bhi-font-sans)", color: "var(--bhi-gold)" }}
          >
            04 — Punch List & Construction Closeout
          </p>
          <h1
            className="text-[36px] md:text-[52px] uppercase tracking-[0.06em] leading-[1.1] mb-6 max-w-2xl"
            style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-white)", textShadow: "0 1px 4px rgba(0,0,0,0.4)" }}
          >
            We Close Out the Job.
          </h1>
          <p
            className="text-[17px] leading-[1.85] max-w-xl mb-10"
            style={{ fontFamily: "var(--bhi-font)", color: "rgba(255,255,255,0.85)" }}
          >
            Final-phase construction support for general contractors, developers,
            and property owners throughout Greater Boston — punch list completion,
            finish corrections, post-construction cleaning, and turnover
            preparation, coordinated through one accountable partner.
          </p>
          <div className="flex flex-col items-start gap-5">
            <Link
              href="/contact"
              className="inline-block text-[10px] uppercase tracking-[0.2em] px-8 py-4 transition-opacity hover:opacity-80"
              style={{ fontFamily: "var(--bhi-font-sans)", backgroundColor: "var(--bhi-white)", color: "var(--bhi-charcoal)" }}
            >
              Request a Proposal
            </Link>
            <Link
              href="/contact"
              className="text-xs uppercase tracking-[0.18em] inline-flex items-center gap-2 transition-opacity hover:opacity-70"
              style={{ fontFamily: "var(--bhi-font-sans)", color: "rgba(255,255,255,0.88)", textShadow: "0 1px 3px rgba(0,0,0,0.5)" }}
            >
              Send Us Your Punch List <span aria-hidden="true" style={{ color: "var(--bhi-gold)" }}>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT THIS IS */}
      <section className="py-24 md:py-32" style={{ backgroundColor: "var(--bhi-linen)" }}>
        <div className="max-w-6xl mx-auto px-8">
          <div className="max-w-2xl">
            <SectionLabel className="mb-6">Punch List & Construction Closeout</SectionLabel>
            <h2
              className="text-[26px] md:text-[34px] leading-[1.2] mb-8"
              style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-charcoal)" }}
            >
              The Last Five Percent Matters.
            </h2>
            <GoldRule className="mb-8" />
            <p className="text-[16px] leading-[1.85] mb-6" style={bodyStyle}>
              By the time a project reaches its final phase, the major work is done.
              The details that remain are often the hardest to finish.
            </p>
            <p className="text-[16px] leading-[1.85] mb-6" style={bodyStyle}>
              Outstanding punch list items. Paint and drywall corrections. Missing or
              misaligned hardware. Construction dust. Final cleaning. Subcontractors
              who&rsquo;ve moved on to the next job. And owner walkthroughs, occupancy
              dates, and turnover commitments all closing in.
            </p>
            <p className="text-[16px] leading-[1.85]" style={bodyStyle}>
              BHI provides focused closeout support to help GCs and owners resolve the
              remaining interior work and get spaces ready for handover. We know the
              pace of construction and the difference between work that&rsquo;s
              substantially complete and work that&rsquo;s actually ready to turn over.
            </p>
          </div>
        </div>
      </section>

      {/* CLOSEOUT SERVICES */}
      <section className="py-24 md:py-32 bg-bhi-white">
        <div className="max-w-6xl mx-auto px-8">
          <SectionLabel className="mb-6">Closeout Services</SectionLabel>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">
            {closeoutServices.map((svc) => (
              <div
                key={svc.title}
                className="flex flex-col"
                style={{ border: "0.5px solid var(--bhi-sand)", padding: "32px 28px" }}
              >
                <GoldRule className="mb-6" />
                <p
                  className="text-[11px] uppercase tracking-[0.2em] mb-4"
                  style={{ fontFamily: "var(--bhi-font-sans)", color: "var(--bhi-charcoal)" }}
                >
                  {svc.title}
                </p>
                <p className="text-[15px] leading-[1.8] mb-6" style={bodyStyle}>
                  {svc.intro}
                </p>
                <ul className="flex flex-col gap-3 mb-6 flex-1">
                  {svc.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-[15px] leading-[1.75]"
                      style={bodyStyle}
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
                <p className="text-[14px] italic leading-[1.75]" style={bodyStyle}>
                  {svc.closing}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUILT FOR CONSTRUCTION TEAMS */}
      <section className="py-24 md:py-32" style={{ backgroundColor: "var(--bhi-linen)" }}>
        <div className="max-w-6xl mx-auto px-8">
          <SectionLabel className="mb-6">Built for Construction Teams</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            {audiences.map((item) => (
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
                <p className="text-[15px] leading-[1.8]" style={bodyStyle}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE DIFFERENCE */}
      <section className="py-24 md:py-32" style={{ backgroundColor: "#252525" }}>
        <div className="max-w-6xl mx-auto px-8">
          <SectionLabel className="mb-6" style={{ color: "var(--bhi-gold)" }}>
            One Partner for the Work That Remains
          </SectionLabel>
          <h2
            className="text-[26px] md:text-[34px] leading-[1.2] mb-8 max-w-2xl"
            style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-white)" }}
          >
            One partner for the work that remains.
          </h2>
          <GoldRule className="mb-8 max-w-xs" style={{ opacity: 0.3 }} />
          <p className="text-[16px] leading-[1.85] mb-6" style={{ ...darkBodyStyle, maxWidth: "680px" }}>
            Most cleaning companies only clean. Most construction subs only work their
            own trade. BHI combines detailed post-construction cleaning with hands-on
            interior construction, finish work, and coordination — so a broader
            package of final-phase work runs through one point of contact.
          </p>
          <p className="text-[16px] leading-[1.85]" style={{ ...darkBodyStyle, maxWidth: "680px" }}>
            Our background is managing high-end residential construction inside
            Boston&rsquo;s demanding urban and managed-building environments, where
            access, protection, coordination, and finish quality all matter. We know
            what project managers and superintendents expect because we&rsquo;ve
            worked where they work.
          </p>
        </div>
      </section>

      {/* PLAN YOUR CLOSEOUT */}
      <section className="py-24 md:py-32 bg-bhi-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="max-w-2xl">
            <SectionLabel className="mb-6">Plan Ahead</SectionLabel>
            <h2
              className="text-[26px] md:text-[34px] leading-[1.2] mb-8"
              style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-charcoal)" }}
            >
              Plan your closeout before the final walkthrough.
            </h2>
            <GoldRule className="mb-8" />
            <p className="text-[16px] leading-[1.85] mb-6" style={bodyStyle}>
              The best time to line up closeout support isn&rsquo;t when the punch list
              is already overdue.
            </p>
            <p className="text-[16px] leading-[1.85] mb-6" style={bodyStyle}>
              We can work with GCs and developers to define cleaning, finish
              correction, and turnover requirements before the final phase begins — so
              the work that remains is planned for, not scrambled at the end.
            </p>
            <p className="text-[16px] leading-[1.85] mb-10" style={bodyStyle}>
              Whether you&rsquo;re approaching substantial completion on a single luxury
              residence or coordinating turnover across multiple units, we&rsquo;ll put
              together a closeout plan tailored to the project.
            </p>
            <Link
              href="/contact"
              className="inline-block text-[10px] uppercase tracking-[0.2em] px-8 py-4 transition-opacity hover:opacity-80"
              style={{ fontFamily: "var(--bhi-font-sans)", backgroundColor: "var(--bhi-charcoal)", color: "var(--bhi-white)" }}
            >
              Discuss an Upcoming Project
            </Link>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="py-24 md:py-32" style={{ backgroundColor: "var(--bhi-linen)" }}>
        <div className="max-w-6xl mx-auto px-8">
          <SectionLabel className="mb-6">How We Work</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mt-10">
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
            Have a project approaching turnover?
          </h2>
          <GoldRule className="mb-8 max-w-xs w-full" style={{ opacity: 0.4 }} />
          <p
            className="text-[16px] leading-[1.8] mb-10 max-w-md"
            style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-sand)" }}
          >
            Whether it&rsquo;s detailed post-construction cleaning, punch list
            completion, or coordinated final-phase interior work, we&rsquo;ll help bring
            the project across the line.
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
